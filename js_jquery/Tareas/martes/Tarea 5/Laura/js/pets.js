var PetsModule = (function () {
    //Privates Vars
    var options = {};

    //Init Method
    var initialize = function (opts) {
        $.extend(options, opts);
        addDOMObjsBehaviour();
    };

    //Add events to the objects
    var addDOMObjsBehaviour = function () {
        $('#rbtYes').off('change').on('change.rbtYes', function () {
            ShowDescription();
        });
        $('#rbtNo').off('change').on('change.rbtNo', function () {
            HideDescription();
        });
        $('#btnAdd').off('click').on('click.btnAdd', function () {
            AddPet();
        });
        $(document).on('click', '.deleteButton', function (e) {
            DeleteRow(e);
        });
        $(document).on('click', '.editButton', function (e) {
            EditRow(e);
        });
        $(document).on('click', '.saveButton', function (e) {
            SaveRow(e);
        });
        $('#btnSave').off('click').on('click.btnSave', function () {
            GeneralSave();
        });
        $('#txtAge').off('keypress').on('keypress.txtAge', function (e) {
            IsNumberKey(e);
        });
    };

    ///Show the description area
    var ShowDescription = function () {
        $("#divDescription").removeClass('hide');
        $("#divDescription").addClass('show');
    }

    ///Hide the description area
    var HideDescription = function () {
        $("#divDescription").removeClass('show');
        $("#divDescription").addClass('hide');
    }

    ///Add new pet
    var AddPet = function () {
        var valid = 1
        $(".required").each(function () {
            if ($(this).val() == "") {
                $(this).css("border-color", "red");
                valid = 0
            } else {
                $(this).css("border-color", "#86c111");
            }
            if (!valid) {	           
                return false;
            }
            else {
                var strNewRow = '<tr>' +
                    '<td class="show">' + $('#txtPetName').val() + '</td>' +
                    '<td class="show">' + $('#ddlGenre').val() + '</td>' +
                    '<td class="hide"><input type="text" class="clsAnchoTotal" value="' + $('#txtPetName').val() + '"></td>' +
                    '<td class="hide"><select id="ddlGenre"><option value="Female">Female</option><option value="Male">Male</option></select></td>' +
                    '<td><input type="button" value="Edit" class="editButton" /></td>' +
                    '<td class="hide"><input type="button" value="Save" class="saveButton" /></td>' +
                    '<td><input type="button" value="Delete" class="deleteButton" /></td>' +
                '</tr>';
                $("#tbPets").append(strNewRow);
                $('#txtPetName').val('');
            }
        });
    }

    ///Delete the selected row
    var DeleteRow = function (e) {
        if (!confirm('Are you sure you want delete this record?')) {
            return;
        }
        else {
            $(e.target.parentElement.parentElement).remove();		
        }        
    }

    ///Edit the selected row
    var EditRow = function (e) {
        var row = $(e.target.parentElement.parentElement);
        row[0].cells[0].classList.add('hide');
        row[0].cells[0].classList.remove('show');
        row[0].cells[4].classList.add('hide');
        row[0].cells[4].classList.remove('show');
        row[0].cells[1].classList.add('hide');
        row[0].cells[1].classList.remove('show');
        row[0].cells[2].classList.add('show');
        row[0].cells[2].classList.remove('hide');
        row[0].cells[3].classList.add('show');
        row[0].cells[3].classList.remove('hide');
        row[0].cells[5].classList.add('show');
        row[0].cells[5].classList.remove('hide');
        row[0].cells[3].firstChild.value = row[0].cells[1].innerText;        
    }

    ///Save the selected row
    var SaveRow = function (e) {
        var row = $(e.target.parentElement.parentElement);
        row[0].cells[0].innerText = row[0].cells[2].firstChild.value;
        row[0].cells[1].innerText = row[0].cells[3].firstChild.value;	   
        row[0].cells[0].classList.add('show');
        row[0].cells[0].classList.remove('hide');
        row[0].cells[4].classList.add('show');
        row[0].cells[4].classList.remove('hide');
        row[0].cells[1].classList.add('show');
        row[0].cells[1].classList.remove('hide');
        row[0].cells[2].classList.add('hide');
        row[0].cells[2].classList.remove('show');
        row[0].cells[3].classList.add('hide');
        row[0].cells[3].classList.remove('show');
        row[0].cells[5].classList.add('hide');
        row[0].cells[5].classList.remove('show');
    }

    var GeneralSave = function () {
        var valid = 1
        $(".req").each(function () {
            if ($(this).val() == "") {
                $(this).css("border-color", "red");
                valid = 0
            } else {
                $(this).css("border-color", "#86c111");
            }
        });

        if (!valid) {
            alert("Complete all Required Fields");
            return false;
        }
        else {
            var dataJQ = { info: [] };
            dataJQ.info.push({ Name: $('#txtName').val(), Age: $('#txtAge').val(), Pets: [] });

            $("#tbPets tbody tr").each(function (index) {
                var petName, genre;
                $(this).children("td").each(function (index2) {
                    switch (index2) {
                        case 0:
                            petName = $(this).text();
                            break;
                        case 1:
                            genre = $(this).text();
                            break;
                    }
                });
                dataJQ.info[0].Pets.push({ PetName: petName, Genre: genre });
            });
	       
            $.cookie('dataJQ', JSON.stringify(dataJQ));
            $('#txtName').val('');
            $('#txtAge').val('');
            window.location = ("thanks.html");
        }	  
    }

    ///Validate if the key press is a number
    var IsNumberKey = function (e) {	  
        var charCode = (e.which) ? e.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            alert('Enter a valid number');
            $('#txtAge').val("");
            return false;
        }
	      

        return true;
    }

    //Init the program
    return {
        init: initialize
    };

	
})();
