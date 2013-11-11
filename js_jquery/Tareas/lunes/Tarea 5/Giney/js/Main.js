var mainPage = {};
mainPage = (function () {
    //Privates vars
    var options = {};
	var tbSonRegistry = 1;
 
    //Init Method or Constructor
    var initialize = function (opts) {
        $.extend(options, opts);
        handleClickbtnAdd();
		handleKeypressInputAge();
		handlehaveSonsMainSectionHide();
		handleanswerYes();
		handleanswerNo();
		handleClickbtnEdit();
		handleClickbtnDelete();
		handledivRightSectionHide();
		
		handleWellDone();
		
    };
     //Handler Click btn Delete
    var handleClickbtnDelete = function () {
		$('#bntDelete').off('click.bntDelete').on('click.bntDelete', function(){
			deleteSonRecord();
			return false;
		});
    };	
     var deleteSonRecord = function() {
	  var answer = confirm("Delete Item ?")
        if (answer) {
            this.parentNode.parentNode.remove();
			countSonRecords();
			if (tbSonRegistry==1) {
				$('#divRightSection').fadeToggle("slow");
			}
        } 
    };	
     //Handler Click btn Edit
    var handleClickbtnEdit = function () {
		$('#bntEdit').off('click.bntEdit').on('click.bntEdit', function(){
			editSonRecord();
			return false;
		});
    };
     var editSonRecord = function() {
	 var OriginalContent = this.parentNode.parentNode.children[2].textContent;
	 var actualCell = this.parentNode.parentNode.children[2];
	 var nextCell = this.parentNode.parentNode.children[3];
		 if (this.innerHTML=='Edit'){
			this.innerHTML = 'Save';

			$(actualCell).addClass("cellEditing");
			$(actualCell).html("<input type='text' value='" + OriginalContent + "' />");
			
			$(nextCell).addClass("cellEditing");
			$(nextCell).html("<select id='lstGenreEditRecord' class='lstRowRecord'> <option value='1'>Female</option> <option value='2'>Male</option> </select>");
			$("#lstGenreEditRecord").val(nextCell.attributes[0].nodeValue);
			/*$(actualCell.children).first()[0].focus();*/
			/*$(actualCell).children().first().keypress(function (e) {
				if (e.which == 13) {
				}
			});*/
		 } else {
			this.innerHTML = 'Edit';
			var newContent = actualCell.children[0].value;
			$(actualCell).text(newContent);
			$(actualCell).removeClass("cellEditing");
			var newNextContent = $('#lstGenreEditRecord option:selected').text()
			$(nextCell).text(newNextContent);
			$(nextCell).removeClass("cellEditing");
			actualCell.parentNode.children[0].firstElementChild.innerHTML = 'Edit';
		 }
    };
	
	//Handler Answer No
	var handleanswerNo = function () {
		$('input:radio[id="answerNo"]').change(function () {
            if ($(this).is(':checked')) {
                /*$('#haveSonsMainSection').hide();*/
				$('#haveSonsMainSection').animate({height:'toggle'});
            }
		return false;
        });
    };	
	//Handler Answer Yes
	var handleanswerYes = function () {
		$('input:radio[id="answerYes"]').change(function () {
            if ($(this).is(':checked')) {
                /*$('#haveSonsMainSection').show();*/
				$('#haveSonsMainSection').animate({height:'toggle'});
            }
		return false;
        });
    };		
	//Handler Hide Main Section
	var handlehaveSonsMainSectionHide = function () {
		$('#haveSonsMainSection').hide();
    };	
	//Handler Hide Main Section
	var handledivRightSectionHide = function () {
		$('#divRightSection').hide();
    };		
  //Handler KeyPress Age
	var handleKeypressInputAge = function () {
		$('#inputage').keypress(validateNumber);	
    };
     var validateNumber = function(event) {
		var key = window.event ? event.keyCode : event.which;
		if (event.keyCode == 8 || event.keyCode == 46
				 || event.keyCode == 37 || event.keyCode == 39) {
					return true;
				}
		else if (key < 48 || key > 57) {
					return false;
				}
		else return true;
				
    };	
     //Handler Click btn Add
    var handleClickbtnAdd = function () {
		$('#bntAdd').off('click.bntAdd').on('click.bntAdd', function(){
			/*$('#divRightSection').animate({height:'toggle'});*/
			/*$('#divRightSection').animate({height:'toggle',opacity:'0.9'},"slow");*/
			countSonRecords();
			if (tbSonRegistry==1) {
				$('#divRightSection').fadeToggle("slow");
			}
			insertSonRecord();
			return false;
		});
    };
     var insertSonRecord = function() {
        $('#tbSonRegistry > tbody:last').append(' <tr> <td> <button type="button" class="editButton">Edit</button> </td>  <td> <button type="button" class="deleteButton">Delete</button> </td>  <td>' + $('#inpSonName').val() + ' </td> <td genreValue =' + $("#lstGenre").val() + ' >' + $("#lstGenre option:selected").text() + '</td> </tr>');
        $('#inpSonName').val("");
        $('.editButton').off('click.bntEdit').on('click.bntEdit', editSonRecord);
		$('.deleteButton').off('click.bntDelete').on('click.bntDelete', deleteSonRecord);
    };
     var countSonRecords = function() {
		tbSonRegistry = $('#tbSonRegistry tr').length;
    };
     //Handler Well Done
    var handleWellDone = function () {
		$('#btnTemp').off('click.btnTemp').on('click.btnTemp', function(){
			$('#secondInformation').fadeToggle("slow");
		});
    };	
    return {
        init: initialize
    }
})();
