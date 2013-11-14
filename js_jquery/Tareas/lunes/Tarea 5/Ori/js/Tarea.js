var people = people || {};

people.tarea = (function () {
    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        AddSons();
        deleteSons();
    };

    var AddSons = function () {
        var peopleVar = $(this);
        var son = {
            name: '',
            genre: ''
        };
        
        var person = {
            name : '',
            age: '',
            haveSons: false,
            sons: []
        }
        
        $('#addButtom a').off('click.addButtomSons').on('click.addButtomSons', function () {
            var currentSon = son;
            currentSon.name = $('#sonNametxt').val();
            currentSon.genre = $('#genre').val();

            $('.sonsInfo .errormsj').addClass('hide');
            addSons(currentSon);
            $('#sonNametxt').val('');
       
        });
            
    };
    
    var addSons = function (son, $parentUl) {
    var stringSon = '';
    stringSon += '<li><a href="#" class="btnstl editbtn">Edit </a></li>';
    stringSon += '<li><a href="#" class="btnstl deletebtn">Delete </a></li>';
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
    var deleteSons = function (son, $parentUl) {
        $('ul#SonsTable').off('click.deleteSons', 'a.deletebtn').on('click.deleteSons', 'a.deletebtn', function () {
            var d = confirm("Do you want to delete this Son?");
            if (d == true) {
                $(this).parent().parent().remove();
            }
        });
    };
          
   
    return {
        init: initialize,
        
    };

})();