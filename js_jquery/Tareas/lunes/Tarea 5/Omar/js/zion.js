var zion = zion || {};
zion = (function () {
    //Privates Vars
    var options = {};

    //Init Method
    var initialize = function (opts) {
        $.extend(options, opts);
        methDummy(options.param1);
        principalMethods();
        sonsEvents();
    };

    var methDummy = function (param1) {
        console.log(param1 + options.param2);
    };

    principalMethods = function () {
        var zionVar = $(this);
        $('input[name="optionsRadios"]').off('click.optionsRadios').on('click.optionsRadios', function () {
            var radioValue = $(this).attr('value');

            if (!(radioValue == 'yes')) {
                $('.sonsInfo').addClass('hide');
            }
            else {
                $('.sonsInfo').removeClass('hide');
            }
        });
    };

    var sonsEvents = function () {
        var zionVar = $(this);
        var son = {
            name: '',
            genre: ''
        };
        var suvivor = {
            name : '',
            age: '',
            haveSons: false,
            sons: []
        }
        $('#addButtom a').off('click.addButtomSons').on('click.addButtomSons', function () {
            var currentSon = son;
            currentSon.name = $('#sonName_input').val();
            currentSon.genre = $('#genre_select').val();

            if (currentSon.name != undefined && currentSon.name.length > 0 && currentSon.name != '') {
                $('.sonsInfo .errormsj').addClass('hide');
                addSons(currentSon);
                $('#sonName_input').val('');
            } else {
                $('.sonsInfo .errormsj').removeClass('hide');
            }
        });

        $('ul#SonsTable').off('click.editButtomSons', 'a.editbtn').on('click.editButtomSons', 'a.editbtn', function () {
            var $editLiParent = $(this).parent();
            var $ulParent = $(this).parent().parent();
            var currentSon = son;

            currentSon.name = $editLiParent.siblings('.nameSonName').html();
            currentSon.genre = $editLiParent.siblings('.genreSonName').html();
            $ulParent.attr('sonName', currentSon.name).attr('genreName', currentSon.genre);
            $ulParent.empty();
            editSonFields(currentSon, $ulParent);
        });

        $('ul#SonsTable').off('click.deleteButtomSons', 'a.deletebtn').on('click.deleteButtomSons', 'a.deletebtn', function () {
            var r = confirm("Do you want to delete this Son?");
            if (r == true) {
                $(this).parent().parent().remove();
            }
        });


        $('ul#SonsTable').off('click.saveButtomSons', 'a.savebtn').on('click.saveButtomSons', 'a.savebtn', function () {
            var $saveLiParent = $(this).parent();
            var $ulParent = $(this).parent().parent();
            var currentSon = son;

            currentSon.name = $saveLiParent.siblings('.liSonNameEdit').children().val();
            currentSon.genre = $saveLiParent.siblings('.liSonGenreEdit').children().val();
           
            if (currentSon.name != undefined && currentSon.name.length > 0 && currentSon.name != '') {
                $ulParent.empty();
                addSons(currentSon, $ulParent);
            }

        });

        $('ul#SonsTable').off('click.cancelButtomSons', 'a.cancelbtn').on('click.cancelButtomSons', 'a.cancelbtn', function () {
            var $saveLiParent = $(this).parent();
            var $ulParent = $(this).parent().parent();
            var currentSon = son;

            currentSon.name = $ulParent.attr('sonName');
            currentSon.genre = $ulParent.attr('genreName');
            $ulParent.empty();
            addSons(currentSon, $ulParent);

        });

        $('.btn.save.savebtn').off('click.saveGlobalButtomSons').on('click.saveGlobalButtomSons', function () {
            var currentSuvivor = suvivor;

            currentSuvivor.name = $('#name_input').val();
            currentSuvivor.age = $('#age_input').val();
            currentSuvivor.haveSons = $('[name="optionsRadios"]:checked').val() == 'yes' ? true : false;

            if (currentSuvivor.name != undefined && currentSuvivor.name.length > 0 && currentSuvivor.name != ''
                && currentSuvivor.age != undefined && currentSuvivor.age.length > 0 && currentSuvivor.age != ''
                ) {
                $('.suvivorInfo .errormsj').addClass('hide');

                if (currentSuvivor.haveSons) {

                    var $sonsArray = $('.rowSonsTable ul');

                    for (var i = 0; i < $sonsArray.length; i++) {
                        var currentUlSon = $($('.rowSonsTable ul')[i]);
                        var currentson = son;

                        if ($($('.rowSonsTable ul')[0]).find('.nameSonName') != undefined
                            && $($('.rowSonsTable ul')[0]).find('.genreSonName') != undefined) {

                            currentson.name = $($('.rowSonsTable ul')[0]).find('.nameSonName').html();
                            currentson.genre = $($('.rowSonsTable ul')[0]).find('.genreSonName').html();

                            currentSuvivor.sons.push(currentson);
                        }
                    }
                }

                params = JSON.stringify(currentSuvivor);

                window.location = "response.html?suvivor=" + params;

            } else {
                $('.suvivorInfo .errormsj').removeClass('hide');
            }
            
        });
    };







    var addSons = function (son, $parentUl) {
        var stringSon = '';
        stringSon += '<li><a href="#" class="btn editbtn">Edit </a></li>';
        stringSon += '<li><a href="#" class="btn deletebtn">Delete </a></li>';
        stringSon += '<li class="nameSonName">' + son.name + '</li>';
        stringSon += '<li class="genreSonName">' + son.genre + '</li>';

        if ($parentUl != undefined) {
            $parentUl.append(
                    stringSon
                );
        } else {
            var stringParent = '';
            stringParent += '<li class="rowSonsTable">';
            stringParent += '<ul>';
            stringParent += stringSon;
            stringParent += '</ul>';
            stringParent += '</li>';
            $('#SonsTable')
                          .append(
                                stringParent
                            );
        }
    };

    var editSonFields = function (son, $parentUl) {
        var stringSon = '';
        stringSon += '<li><a href="#" class="btn savebtn">Save </a></li>';
        stringSon += '<li><a href="#" class="btn cancelbtn">Cancel </a></li>';
        stringSon += '<li class="liSonNameEdit">';
        stringSon += '<input type="text" class="sonNameEdit" placeholder="Son Name" />';
        stringSon += '</li>';
        stringSon += '<li class="liSonGenreEdit">';
        stringSon += '<select class="sonGenreEdit">';
        stringSon += '<option value="Male">Male</option>';
        stringSon += '<option value="Female">Female</option>';
        stringSon += '</select>';
        stringSon += '</li>';

        $parentUl.append(
                            stringSon
                        );

        $parentUl.find('.sonNameEdit').val(son.name);
        $parentUl.find('.sonGenreEdit').val(son.genre);
    };


    var testalert = function (param) {
        alert(param);
    };

    var GetURLParameter = function (sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };

    //Init the program
    return {
        init: initialize,
        getParams: GetURLParameter
    };
})();
