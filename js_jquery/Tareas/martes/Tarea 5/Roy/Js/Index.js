var Index = {};
Index = (function () {
    //Init Method or Constructor
    var initialize = function () {
        hideSon();
        defualtCheck();
        notPaste();
        chkBYes();
        chkBNo();
        validationNumbers();
        validationLetter();
        AddSonButton();
        SaveTotal();
        removeItems();
        editItems();
        saveitems();
        ClosePop();
    };

    //Remove son
    var removeItems = function () {
        $("#Mytable").off("click.removeSon").on("click.removeSon", '.removeSon', function () {

            var answer = confirm("Are you sure you want to delete? ?")
                if (answer) {
                    $(this).closest('tr').remove();
                }  
        });   
    }
    //Edit information son
    var editItems = function () {
        $("#Mytable").off("click.editSon").on("click.editSon", '.editSon', function () {
            var oId = (this.id);
            $("#" + oId + " :text").attr("readonly", false);
            $("#" + oId + " select").prop("disabled", false);
            $("#" + oId + ".editSon").addClass("saveSon").removeClass("editSon");
        });
    }
    var saveitems = function () {
        $("#Mytable").off("click.saveitems").on("click.saveitems", '.saveSon', function () {

            var oId = (this.id);
            $("#" + oId + ":text").attr("readonly", "readonly");
            $("#" + oId + " select").prop("disabled", true);
            $("#" + oId + ".saveSon").addClass("editSon").removeClass("saveSon");
        });
    }
   //  Hiden Div son.
    var hideSon = function () {
        $('#haveSons').hide();
    };
    //Default Button
    var defualtCheck = function () {
        $("#chkBoxN").prop("checked", true)
    }
    //Show div by sons
    var chkBYes = function () {
        $('#chkBoxY').off('click.chkBoxY').on('click.chkBoxY', function () {
            var checked = $(this).attr('checked', true);
            if (checked) {
                $('#haveSons').show()
            }
        });
    };
    //Hide div by sons
    var chkBNo = function () {
        $('#chkBoxN').off('click.chkBoxN').on('click.chkBoxN', function () {
            var checked = $(this).attr('checked', true);
            if (checked) {
                $('#haveSons').hide();
            }
        });
    };
    // Not accept numbers
    var validationNumbers= function () {
        $("#AgeField").keydown(function (event) {
            if (event.shiftKey) {
                event.preventDefault();
            }

            if (event.keyCode == 46 || event.keyCode == 8) {
            }
            else {
                if (event.keyCode < 95) {
                    if (event.keyCode < 48 || event.keyCode > 57) {
                        event.preventDefault();
                    }
                }
                else {
                    if (event.keyCode < 96 || event.keyCode > 105) {
                        event.preventDefault();
                    }
                }
            }
        });
    };
    // Not accept Letters
    var validationLetter = function () {

    };
    // not paste 
    var notPaste = function () {
        $('#NameField').bind("paste", function (e) {
            e.preventDefault();
            alertmenssages();
        });
        //// not copy,cut.paste
        $('#AgeField').bind("paste", function (e) {
            e.preventDefault();
            alertmenssages();
        });
        /// not paste name son
        $('iName').bind("paste", function (e) {
            e.preventDefault();
            alertmenssages();
        });
    };
    //menssages
    var alertmenssages = function () {
        alert('Not is possible insert data through "paste"');
    };
    //add son to,list
    var AddSonButton = function () {
        $('#AddSon').off('click.saveSon').on('click.saveSon', function () {
            countRow = countRow + 1
            var name = $('#iName').val();
            var genre = $('#iGenre').val();
            if (name != '') {
                $("#Mytable tbody").append(
                    "<tr class='tableTh' id="+countRow+">" +
                  "<td> <input type='button' class='editSon' id=" + countRow + " > </td>" +
                  "<td> <input type='button' class='removeSon' id=" + countRow + "> </td>" +
                  "<td><input type='text' id=" + countRow + " value='" + name + "'readonly='readonly'></td>" +
                    "<td><select class='selectGenre'  id=" + countRow + "  disabled='disabled' ><option value =1  >Male</option><option value=2>Famale</option></select></td>" +
                  "</tr>"
                    );
                $("#" + countRow + " option[ value=" + genre + "]").attr('selected', 'selected');
                $('#iName').val('');
                $('#iGenre').val('');
            }
            editItems();
            removeItems();
        });
    
    };
    ///count Son's
    var countRow = 0;
    ///save Button Son 

    //Save Total
    var SaveTotal = function () {
        $('.saveAll').off('click.saveAll').on('click.saveAll', function () {
           
            var name = $('#NameField').val();
            var age = $('#AgeField').val();
            if (name == '' || age == '') {
                    alert('Complete the space Name and Age');
                }
                else
                {
                $("#PopClass").append(
                    "<span>Information Complete *</span><br/>" +
                    "<span>Name *</span>" +
                    "<input id='name'type='text' value=" + name + ">" +
                    "<span>Age *</span>" +
                    "<input id='genre'type='text' value=" + age + ">"
                    );
                var countrow = $('#Mytable >tbody >tr').length
                if ($('#Mytable >tbody >tr').length != 1) {
                    var $button = $('#Mytable').clone();
                    $('#PopClass').append($button);
                }        
                $('#popup').fadeIn('slow');
            }
        });

    };
    //Close popup
    var ClosePop = function () {
    
        $('#close').off('click.close').on('click.close', function () {
            $('#popup').fadeOut('slow');
           $('#NameField').val('');
           $('#AgeField').val('');
           $('#PopClass').empty();
           $("#Mytable").find("tr:gt(0)").remove();
        });

    };

    return {
        init: initialize
    }
})();
