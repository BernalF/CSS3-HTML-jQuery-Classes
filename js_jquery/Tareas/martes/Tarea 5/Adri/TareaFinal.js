// creating the module

// Variable global to access the module

var llines = 0;
var class07 = {};

class07 = (function () {

    var options = {};
    var objs = [];
    var temp_objs = [];

    var initialize = function (opts) {
        $.extend(options, opts);

        // Handle Events
        handleClick();
    };

    var handleClick = function () {

        $('#btnSave').off('click.btnSave').on('click.btnSave', function () {

            var lvalue = $("#iName");
            var lboolean = true;

            if (lvalue.val().length == 0) {
                lvalue.next("#NameMessage").remove();
                lvalue.after('<span id="NameMessage" class="red"><label> Field Required </label></span>');
                lboolean = false;
            }
            else {
                lvalue.next("#NameMessage").remove();
            }


            var lAge = $("#iAge");

            if (lAge.val().length == 0) {
                lAge.next("#AgeMessage").remove();
                lAge.after('<span id="AgeMessage" class="red"><label> Field Required. Just Numeric Values</label></span>');
                lboolean = false;
            }
            else {
                lAge.next("#AgeMessage").remove();
            }

            return lboolean;
        });

        $("#iAge").keypress(function (e) {
            if (isNaN(String.fromCharCode(e.which))) {
                return false;
            }
        });

        $('.clsradio').change(function () {
            if ($(this).val() == "Yes") {
                $("#column1").attr("class", "cShown");
                $("#column2").attr("class", "cShown");
            }
            else {
                $("#column1").attr("class", "cHidden");
                $("#column2").attr("class", "cHidden");
            }
        });


        $('#btnAdd').off('click.btnAdd').on('click.btnAdd', function () {

            if (!Duplicates($("#iSonName").val())) {
                var html = "";

                var obj = {
                    "ROW_ID": llines,
                    "SonName": $("#iSonName").val(),
                    "GenreValue": $("#iGenre").find('option:selected').val(),
                    "GenreText": $("#iGenre").find('option:selected').text()
                }

                // add object                   
                objs.push(obj);

                // Initialize the Add section
                $('#iSonName').val('');
                $("#iGenre option[value=M]").prop('selected', 'true');

                llines++;

                // dynamically create rows in the table
                html = "<tr id='tr" + llines + "'><td>" + obj['SonName'] + "</td> <td>" + obj['GenreText'] + " </td><td><input type='button' class='cButton' id='Delete" + llines + "' value='Delete'></td> <td><input type='button' class='cButton' id='Edit" + llines + "' value='Edit'></td><td class='cHidden'>" + obj['GenreValue'] + "</td></tr>";

                //add to the table
                $("#tblData tbody").append(html)

                // The remove button click
                $('#Delete' + llines).off('click.Delete' + llines).on('click.Delete' + llines, function () {
                    if (confirm("Are you sure you want to delete this row?")) {
                        var trId = $(this).attr('id').replace("Delete", "");
                        $("#tr" + trId).remove();
                    }
                });

                // The Edit button click
                $('#Edit' + llines).off('click.Edit' + llines).on('click.Edit' + llines, function () {

                    var trId = $(this).attr('id').replace("Edit", "");
                    var par = $("#tr" + trId); //tr
                    var tdName = par.children("td:first");
                    var tdGenre = par.children("td:eq(1)");

                    if ($('#Edit' + trId).attr('value') == 'Edit') {
                        var tdGenreValue = par.children("td:eq(4)");
                        var lHtmlcombo = [];

                        $(tdName).replaceWith("<td><input type='text' id='txtName" + trId + "' value='" + tdName[0].textContent + "'/></td>");

                        lHtmlcombo.push("<td><select id='RowGenre" + trId + "' class='combobox' name='Genre'> <option value='M'>Male</option><option value='F'>Female</option></select></td> ");
                        $(tdGenre).replaceWith(lHtmlcombo);
                        $("#RowGenre" + trId + " option[value=" + tdGenreValue[0].textContent + "]").prop('selected', 'true');

                        $('#Edit' + trId).attr('value', 'Save')
                    }
                    else {
                        $(tdName).replaceWith("<td>" + $('#txtName' + trId).val() + "</td>");
                        $(tdGenre).replaceWith("<td>" + $("#RowGenre" + trId).find('option:selected').text() + " </td>");
                        $('#Edit' + trId).attr('value', 'Edit')


                    }
                });

            }
        });

        function Duplicates(ltext)
        {
            var duplicates = false;
            $("#tblData td").each(function () {
                if ($(this).text() == ltext) {
                    duplicates = true;
                }
            });

            if (duplicates)
                alert("There are duplicates.");

            return duplicates;
        }

    };

    return {
        init: initialize
    }
})();


