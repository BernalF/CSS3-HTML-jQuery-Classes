var ACME = ACME || {};

ACME.FinalWork = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btnAddSon();
        txtAge_KeyPress();
        HaveSons();
        NotHaveSons();
        GeneralSave();

    };

    var HaveSons = function () {
        $('#rdYes').off('change.Yes').on('click.Yes', function () {
            $('#addSons').attr('style', "display: block;");
            $('#ListSon').attr('style', "display: block;");
            
        });
    };

    var NotHaveSons = function () {
        $('#rdNo').off('change.No').on('click.No', function () {
            $('#addSons').attr('style', "display: none;");
            $('#ListSon').attr('style', "display: none;");
        });
    };

    //Add sons
    var btnAddSon = function () {
        $('#btnAdd').off('click.btnAdd').on('click.btnAdd', function () {
            AddNewRow($('#txtNameSon').val(), $("#Genre option:selected").text());
            $('#txtNameSon').val('');
        });

    };

    //Validate only numbers on txtAge field
    var txtAge_KeyPress = function () {
        $('#txtAge').off('keydown.age').on('keydown.age', function (e) {
            
            var charCode = (e.which) ? e.which : e.keyCode;
            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            else
                return true;
            
        });
    };

    //General save
    var GeneralSave = function () {
        $('#btnGeneralSave').off('click.btnGeneralSave').on('click.btnGeneralSave', function () {
            var emptyFields = false;

            $("#SpanName").attr('style', 'display:none');
            $("#SpanAge").attr('style', 'display:none');

            if ($('#txtName').val() == '') {
                $("#SpanName").attr('style', 'display:block');
                emptyFields = true;
            }

            if ($('#txtAge').val() == '') {
                $("#SpanAge").attr('style', 'display:block');
                emptyFields = true;
            }

            if (!emptyFields)
                window.open('Thanks.html')
        });
    };

    //Add row to table
    var AddNewRow = function (pName, pGenre) {
        $('#ListSons tr:last').after('<tr><td><input id="btnDelete" class="del" type="button" value="Delete" /></td><td><input id="btnEdit" class="edit" type="button" value="Edit" /><input id="btnSaveGrid" style="display:none;" class="saveGrid" type="button" value=" Save " /></td><td><span id="nameSpan">' + pName + '</span><input id="txtNamegrid" type="text" style="display:none;" /></td><td><span id="genreSpan">' + pGenre + '</span><select id="sGenre" style="display:none;"><option value="Male">Male</option><option value="Female">Female</option></select></td></tr>');

        $('.del').off('click.del').on('click.del', function () {
            var agree = confirm("Desea borrar el registro?");
            if (agree == true) {
                $(this).closest('tr').remove();
            }
        });

        //Edit element on table
        $('.edit').off('click.btnEdit').on('click.btnEdit', function () {
            var trElem = $(this).closest('tr');


            var txt = trElem.find("#txtNamegrid");
            var sel = trElem.find('#sGenre');

            trElem.find('#btnEdit').attr('style', 'display:none;');
            trElem.find('#btnSaveGrid').attr('style', 'display:block;');

            $(txt).val(trElem.find('#nameSpan').text());
            $(txt).attr('style', 'display:block;');
            trElem.find('#nameSpan').text('');

            var selectedOption = trElem.find('#genreSpan').text();

            $(trElem.find('#sGenre')).removeAttr('selected')
            $(trElem.find('#sGenre option:contains("' + selectedOption + '")')).attr('selected', 'selected')
            $(sel).attr('style', 'display:block;');
            trElem.find('#genreSpan').text('');

            $('#ListSons').attr('style', 'text-align:center;')
        });

        //Save data on table
        $('.saveGrid').off('click.saveGrid').on('click.saveGrid', function () {

            var trElem = $(this).closest('tr');

            var txt = trElem.find('#txtNamegrid');
            var sel = trElem.find('#sGenre');

            trElem.find('#btnEdit').attr('style', 'display:block;');
            trElem.find('#btnSaveGrid').attr('style', 'display:none;');

            trElem.find('#nameSpan').text($(txt).val());
            $(txt).attr('style', 'display:none;');
            $(txt).val('');


            trElem.find('#genreSpan').text(trElem.find('#sGenre :selected').text());
            $(sel).attr('style', 'display:none;');

            $(sel).removeAttr('selected');
            $('#ListSons').attr('style', 'text-align:center;')

        });

    };


    return {
        init: initialize
    };
})();