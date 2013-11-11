var PETS = PETS || {};

PETS.register = (function () {

    var options = {};
    var listColors = {
        "color": [
            { "name": "White", "code": "white", "default": "false" },
            { "name": "Black", "code": "black", "default": "true" },
            { "name": "Gray", "code": "gray", "default": "false" },
            { "name": "Red", "code": "red", "default": "false" },
            { "name": "Green", "code": "green", "default": "false" },
            { "name": "Brown", "code": "brown", "default": "false" },
            { "name": "Blue", "code": "blue", "default": "false" },
            { "name": "Yellow", "code": "yellow", "default": "false" }
        ]
    };
    var listTypes = {
        "type": [
            { "name": "Dog", "code": "dog", "default": "true" },
            { "name": "Cat", "code": "cat", "default": "false" },
            { "name": "Bird", "code": "bird", "default": "false" },
            { "name": "Snake", "code": "snake", "default": "false" },
            { "name": "Monkey", "code": "monkey", "default": "false" },
            { "name": "Cow", "code": "cow", "default": "false" },
            { "name": "Fish", "code": "fish", "default": "false" },
            { "name": "Rat", "code": "rat", "default": "false" }
        ]
    };
    var colorItems = [];
    var typeItems = [];
    var petItems = [];
    var initialize = function (opts) {
        $.extend(options, opts);
        initDropDowns();
        validateNumericInput();
        toggleDetails();
        addRow();
        saveRow();
        editRow();
        deleteRow();
        changeColor();
        cleanTable();
    };
    //Initialize drop down list.
    var initDropDowns = function () {
        $.each(listColors.color, function (index, value) {
            colorItems.push('<option value="');
            colorItems.push(value.code);
            colorItems.push('"', checkDefault(value.default));
            colorItems.push(' style="background-color:#9fb9b9; font-weight: bold; color: ' + value.code + '"');
            colorItems.push('>');
            colorItems.push(value.name);
            colorItems.push('</option>');
        });
        $.each(listTypes.type, function (index, value) {
            typeItems.push('<option value="');
            typeItems.push(value.code);
            typeItems.push('"', checkDefault(value.default))
            typeItems.push('>');
            typeItems.push(value.name);
            typeItems.push('</option>');
        });
    };
    // Check default values for options.
    var checkDefault = function (val) {
        var res = '';
        if (val == 'true') {
            res = ' selected="selected"'
        }
        return res;
    };
    // Select assigned value.
    var checkSelected = function (val, sel) {
        var res = '';
        if (val == sel) {
            res = ' selected="selected"'
        }
        return res;
    };
    // Check input entered into numeric input.
    var validateNumericInput = function () {
        $("#regage").keydown(function (event) {
            if ($.inArray(event.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            }
            else {
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    };
    //Toggle/Collapse pets details.
    var toggleDetails = function () {
        $('input[name=havepet]').off('click.details').on('click.details', function (e) {
            if ($("input[name=havepet]:checked").val() == '1') {
                $("#petInformation").fadeIn("slow", "linear");
            } else {
                $("#petInformation").fadeOut("fast", "linear");
            }
            e.stopPropagation();
        });
    };
    //Add new row to table.
    var addRow = function () {
        $('#addPet').off('click.addPet').on('click.addPet', function (e) {

            if (petItems.length < 5) {
                $('#addPet').attr('disabled', 'disabled');
                $('.main-content').attr('disabled', 'disabled');
                var cell = $("#tblData tbody");
                cell.append("<tr state='ins'>"
                            + "<td><input type='text' required='required'/></td>"
                            + "<td><select name='pettype' class='pettype'>"
                            + typeItems.join('')
                            + "</select></td>"
                            + "<td><select name='petcolor' class='petcolor' style='background-color:#9fb9b9'>"
                            + colorItems.join('')
                            + "</select></td>" 
                            + "<td><img src='img/save.png' class='btnSave' /> <img src='img/delete.png' class='btnDelete'/></td>" 
                            + "</tr>"); 
            }else{
                alert("Sorry... Only 5 pets is allowed!");
            }           
            e.stopPropagation();
        });
    };
    // Change text color for color dropdown.
    var changeColor = function () {
        $("#tblData").on("change", ".petcolor", function (e) {
            var par = $(this).parent().parent();
            this.style.color = this.options[this.selectedIndex].style.color;
            e.stopPropagation();
        });
    };
    //Save new added row.
    var saveRow = function () {
        $("#tblData").on("click", ".btnSave", function (e) {
            var par = $(this).parent().parent();
            var tdName = par.children("td:nth-child(1)");
            var tdType = par.children("td:nth-child(2)");
            var tdColor = par.children("td:nth-child(3)");
            var tdButtons = par.children("td:nth-child(4)");
            var rowname = tdName.children("input[type=text]").val();
            var rowtype = tdType.children().val();
            var rowcolor = tdColor.children().val();

            if (rowname != '') {
                if (existRow(rowname, rowtype, rowcolor) == false) {
                                petItems.push({ name: rowname, type: rowtype, color: rowcolor });
                                tdName.html(rowname);
                                tdType.html(tdType.children("input[type=text]").val()).children("select").attr('disabled', 'disabled');
                                tdColor.html(tdColor.children("input[type=text]").val()).children("select").attr('disabled', 'disabled');
                                tdButtons.html("<img src='img/delete.png' class='btnDelete'/><img src='img/edit.png' class='btnEdit'/>");
                            }
                            else {
                                $(this).parent().parent().fadeTo(400, 0, function () {
                                    $(this).remove();
                                });
                            }

                $('#addPet').removeAttr('disabled');
                $('.main-content').removeAttr('disabled');
                e.stopPropagation();
            } else {
                tdName.children().attr('class', 'required');
            }
            
        });
    };
    // Validate if row already exists.
    var existRow = function (name, type, color) {
        var result = false;
        if (petItems.length > 0) {
            $.each(petItems, function (index, value) {
                if (value.name == name && value.type == type && value.color == color) {
                    result = true;
                    return false;
                }
            });
        }
        return result;
    };
    // Remove rows.
    var cleanTable = function () {
        $('#havepetNo').off('click.clean').on('click.clean', function (e) {
            var table = $("#tblData tbody tr");
            table.each(function () {
                $(this).remove();
            });
            petItems = [];
        });      
    };
    //Edit selected row.
    var editRow = function () {
        $("#tblData").on("click", ".btnEdit", function (e) {
            var par = $(this).parent().parent(); 
            var tdName = par.children("td:nth-child(1)");
            var tdType = par.children("td:nth-child(2)");
            var tdColor = par.children("td:nth-child(3)");
            var tdButtons = par.children("td:nth-child(4)");
            var rowname = tdName.text();
            var rowtype = tdType.children().val();
            var rowcolor = tdColor.children().val();
            var colorItemSelected = [];
            var typeItemSelected = [];

            removeRow(rowname, rowtype, rowcolor);
            par.attr('state', 'edt');
            tdType.children("select").removeAttr('disabled');
            tdColor.children("select").removeAttr('disabled');
            $('#addPet').attr('disabled', 'disabled');
            $('.main-content').attr('disabled', 'disabled');

            $.each(listTypes.type, function (index, value) {
                typeItemSelected.push('<option value="');
                typeItemSelected.push(value.code);
                typeItemSelected.push('"', checkSelected(value.code, tdType.children("select[name=pettype]").val()));
                typeItemSelected.push('>');
                typeItemSelected.push(value.name);
                typeItemSelected.push('</option>');
            });
            $.each(listColors.color, function (index, value) {
                colorItemSelected.push('<option value="');
                colorItemSelected.push(value.code);
                colorItemSelected.push('"', checkSelected(value.code, tdColor.children("select[name=petcolor]").val()));
                colorItemSelected.push(' style="background-color:#9fb9b9; font-weight: bold; color: ' + value.code + '"');
                colorItemSelected.push('>');
                colorItemSelected.push(value.name);
                colorItemSelected.push('</option>');
            });
   
            tdName.html("<input type='text' required='required' value='" + tdName.html() + "'/>");
            tdType.html("<select name='pettype' class='pettype'>"
                            + typeItemSelected.join('')
                            + "</select>"
                );
            tdColor.html("<select name='petcolor' class='petcolor' style='background-color:#9fb9b9'>"
                            + colorItemSelected.join('')
                            + "</select>"
                );
            tdButtons.html("<img src='img/save.png' class='btnSave'/>");
            e.stopPropagation();
        });
    };
    //Remove pet from list.
    var removeRow = function (name, type, color) {
        if (petItems.length > 0) {
            $.each(petItems, function (index, value) {
                if (value.name == name && value.type == type && value.color == color) {
                    petItems.splice(index,1);
                    return false;
                }
            });
        }
    };
    //Delete row from table.
    var deleteRow = function () {
        $("#tblData").on("click", ".btnDelete", function (e) {
            var par = $(this).parent().parent();
            var tdName = par.children("td:nth-child(1)");
            var tdType = par.children("td:nth-child(2)");
            var tdColor = par.children("td:nth-child(3)");
            var tdButtons = par.children("td:nth-child(4)");
            var rowname = tdName.text();
            var rowtype = tdType.children().val();
            var rowcolor = tdColor.children().val();

            var result = confirm("Are you sure want to delete this record?");
            if (result == true) {
                $(this).parent().parent().fadeTo(400, 0, function () {
                    $(this).remove();
                });
                removeRow(rowname, rowtype, rowcolor);
            }
            $('#addPet').removeAttr('disabled');
            $('.main-content').removeAttr('disabled');
            e.stopPropagation();
        });
    };

    return {
        init: initialize
    };
})();