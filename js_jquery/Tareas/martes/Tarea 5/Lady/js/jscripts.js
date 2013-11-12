/****************************************************************************************************************/
/** Created by: Andrea Corrales Delgado 																	    */
/** Styling and CSS for Validation and Basic use of FORMS														*/
/** Date: 11/01/2013																						 	*/
/****************************************************************************************************************/

var applicationValidator = {
	init : function (settings) {
		applicationValidator.config = {
                $buttons : $('section button'),
                $actions : $("#sons_list"),
                $sons_activator : $('.have_sons_yes_no'),
                $banner_elements : 'header aside',
                $sons_checked : $('#yes'),
                $messages : ["<p>You select YES on have sons question... so you have to put the names of your sons!!</p>", "Please specify a son name", "Are you completely sure you want to remove your son of the list??", "<p>Invalid Name</p>", "<p>Invalid Age</p>" ],
                $name_fields : $("#name"),
                $age_fields : $("#age"),
                $button_actions : ['<button id="edit_son" class="class-button class-button-edit" type="button">Edit</button>', '<button id="delete_son" class="class-button class-button-delete" type="button">Delete</button>'],
                $button_save_action : '<button id="save_son" class="class-button class-button-primary" type="button">Save</button>'
            };
        applicationValidator.sons_names = [];
        //error vars
        applicationValidator.error_name = false;
        applicationValidator.error_sons = false;
        applicationValidator.error_age = false;
        //validator
		applicationValidator.ck_name = /^[a-zA-Z\s]+$/;
		applicationValidator.ck_age = /^[0-9]{2,3}$/;
        // allow the user to redefine the default params for config
        $.extend(applicationValidator.config, settings);
        //keyblinding validation of numbers only field
		applicationValidator._keyPressBlind($('#age'));
		//initilizer 
        applicationValidator._setup();
	},
	
	//************* PRIVATE FUNCTIONS ***************//
	//this function will initialize the buttons events and the listener for the radiobuttons
	_setup : function () {
		applicationValidator._fill_form();
		applicationValidator.config.$buttons.each(applicationValidator._blindEvents);
        applicationValidator.config.$sons_activator.each(applicationValidator._activateChilds);
        applicationValidator._slideShowPuppys();
	},
	
	//this is for validate only numbers on the age field
	_keyPressBlind : function (field){
		field.keypress(function(evnt){
			evt = (evnt) ? evnt : window.event;
		    var charCode = (evt.which) ? evt.which : evt.keyCode;
		    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		        return false;
		    }
		    return true;
		});	
	},
	
	//handle the hide and display of the sons part 
	_activateChilds : function(){
		$(this).change(function(){
			if ($(this).attr('value') == "Y"){
				$('#sons_info').fadeIn();
			} else {
				$('#sons_info').fadeOut();
			}
		}); 			
			
	},
	
	//this function handle the click for the main buttons on the form
	_blindEvents : function (){
		$(this).click(function(){
			switch(this.id){
				case 'add_new_son':
					applicationValidator._add_son();
				break;
				case 'save_information':
					applicationValidator._validate_forms();
				break;
				default: 
					alert("Error wrong params");
				break;
			}
		})
	},
	
	//this function handle the events with the dinamically generated buttons for the sons actions
	_blindActions : function (){
		$(this).on("click", function(){
			switch(this.id){
				case 'edit_son':
					applicationValidator._edit_son($(this).parent().parent());
				break;
				case 'delete_son':
					applicationValidator._remove_son($(this).parent().parent());
				break;
				case 'save_son':
					applicationValidator._save_edit_son($(this).parent().parent());
				break;
				default: 
					alert("Error wrong parameters");
				break;
			}
		})
	},
	
	//clear the options on the table so it can be repainted
	_clearOptionsFast : function (id){
		$(id+ " tbody").find("tr").remove();
	},
	
	//creates the list of sons on the table
	_sons_list : function(){
		applicationValidator._clearOptionsFast("#sons_list");
		$.each(applicationValidator.sons_names, function(key, value) {   
		     $("#sons_list").find('tbody')
			    .append($('<tr id="son_'+ key +'">')
		        	.append($('<td class="action">')
		                .html(applicationValidator.config.$button_actions[0]+" "+applicationValidator.config.$button_actions[1])
		            )
					.append($('<td class="name">')
		                .text(value.name)
		            )
					.append($('<td class="gender">')
		                .text(value.gender)
		            )
		        )   
		});
		//need to attach the events to the buttons on the table
		applicationValidator.config.$actions.find('button').each(applicationValidator._blindActions);	
	},
	
	//creates the list of sons on the table - withouth the buttons
	_sons_list_response : function(){
		applicationValidator._clearOptionsFast("#sons_list");
		$.each(applicationValidator.sons_names, function(key, value) {   
		     $("#sons_list").find('tbody')
			    .append($('<tr id="son_'+ key +'">')
		        	.append($('<td class="action">')
		                .html("")
		            )
					.append($('<td class="name">')
		                .text(value.name)
		            )
					.append($('<td class="gender">')
		                .text(value.gender)
		            )
		        )   
		});
	},
	
	//remove the name a replace it with a input and the gender with a select, also the edit button becomes save in order to save changes
	_edit_son : function(parent){
		element = parent.attr('id');
		index_element = element.split('son_');
		//remove and replace elements inside the table 
		$("#"+element+" .name").text('');
		$("#"+element+" .name").html('<input type="text" name="edit_name" id="edit_name" value="'+ applicationValidator.sons_names[index_element[1]].name +'" /> ');
		$("#"+element+" .gender").text('');
		$("#"+element+" .gender").html('<select name="edit_gender" id="edit_gender"><option value="Female" '+(applicationValidator.sons_names[index_element[1]].gender == "Female"? 'selected="selected"' : '')+'>Female</option><option value="Male" '+(applicationValidator.sons_names[index_element[1]].gender == "Male"? 'selected="selected"' : '')+'>Male</option></select>');
		$("#"+element+" .action").text('');
		$("#"+element+" .action").html(applicationValidator.config.$button_save_action);
		$(applicationValidator.config.$buttons).attr("class", 'class-button class-button-inactive');
		//for handling the new button
		applicationValidator.config.$actions.find('button').each(applicationValidator._blindActions);
	},
	
	//save from edit from the table of sons
	_save_edit_son : function(parent){
		//get the id
		element = parent.attr('id');
		index_element = element.split('son_');
		//get the new values for the actual input for edit the array
		son_name = $("#edit_name");
		son_gender = $("#edit_gender");
		if (son_name.val().length > 0) {
			applicationValidator.sons_names[index_element[1]].name = son_name.val();
			applicationValidator.sons_names[index_element[1]].gender = son_gender.val();
			applicationValidator._sons_list();
			//changing the classes on the main buttons
			$(applicationValidator.config.$buttons).attr("class", 'class-button class-button-primary');
		} else {
			alert(applicationValidator.config.$messages[1]);
			son_name.focus();
		}

	},
	
	//add a son to the array and also callback the function for repaint the select multiple
	_add_son : function(){
		son_name = $("#son_name");
		son_gender = $("#gender");
		if (son_name.val().length > 0) {
			applicationValidator.sons_names.push({ name: son_name.val(), gender: son_gender.val()});
			applicationValidator._sons_list();
			son_name.val("");
			son_name.focus();
		} else {
			alert(applicationValidator.config.$messages[1]);
			son_name.focus();
		}
	},
	
	//removes the selected son from the array and also callback the function for repaint the select multiple
	_remove_son : function(parent){
		element = parent.attr('id');
		index_element = element.split('son_');
		response = confirm(applicationValidator.config.$messages[2]);
		if (response === true){
			applicationValidator.sons_names.splice(index_element[1],1);
		}
		applicationValidator._sons_list();
	},
	
	//for validate if the persons selects yes on have sons, will ask for their names
	_validate_need_childs : function(){
		element_error_showing = $('#error_messages');
		if (applicationValidator.sons_names.length == 0) {
			element_error_showing.css('display', 'block');
			current = $(element_error_showing).text();
			element_error_showing.html(current + " " + applicationValidator.config.$messages[0]);
			applicationValidator.error_sons = true;
		} else {
			applicationValidator.error_sons = false;
		}
	},
	
	//validate the name of the person as a required field
	_validate_name : function(){
		element_error_showing = $('#error_messages');
		if (applicationValidator.config.$name_fields.val().length == 0){
			element_error_showing.css('display', 'block');
			current = $(element_error_showing).text();
			element_error_showing.html(current + " " + applicationValidator.config.$messages[3]);
			applicationValidator.error_name = true;
		} else {
			if (!applicationValidator.config.$name_fields.val().match(applicationValidator.ck_name)){
				element_error_showing.css('display', 'block');
				current = $(element_error_showing).text();
				element_error_showing.html(current + " " + applicationValidator.config.$messages[3]);
				applicationValidator.error_name = true;
			} else {
				applicationValidator.error_name = false;
			}
		}
	},
	
	//validate the age of the input, by regular expressions
	_validate_age : function(age){
		element_error_show = $('#error_messages');
		if (!applicationValidator.config.$age_fields.val().match(applicationValidator.ck_age)){
			element_error_show.css('display', 'block');
			current = $(element_error_showing).text();
			element_error_show.html(current + " " + applicationValidator.config.$messages[4]);
			applicationValidator.error_age = true;
		} else {
			applicationValidator.error_age = false;
		} 
	},
	
	
	//validate the entire form is this is correct then the form will be send to the next page
	_validate_forms : function(){
		$('#error_messages').text("");
		$('#error_messages').css('display', 'block');	
		applicationValidator._validate_name();
		applicationValidator._validate_age();
		if ($(applicationValidator.config.$sons_checked).is(':checked') && applicationValidator.sons_names.length === 0){
			applicationValidator._validate_need_childs();
		} else {
			sons_info = applicationValidator._stringify();
			$('#childs_info').val(sons_info);
			if (applicationValidator.sons_names.length != 0){
				applicationValidator.error_sons = false;
			}
		}
		//if there is no errors all of the vars
		if (applicationValidator.error_sons == false && applicationValidator.error_name == false && applicationValidator.error_age == false) {
			$('#render-action').submit();
		} 
	},
	
	//concatenate the sons names and gender
	_stringify : function(){
		var string_sons = ""
		var length = applicationValidator.sons_names.length;
		for (var i = 0; i < length; i++) {
			string_sons += applicationValidator.sons_names[i].name+"/"+applicationValidator.sons_names[i].gender+"-";
		}
		return string_sons; 
	},

	//get the "GET" vars send by the form
	_getQueryVar : function(varName){
	    // Grab and unescape the query string - appending an '&' keeps the RegExp simple
	    // for the sake of this example.
	    var queryStr = unescape(window.location.search) + '&';	
	    // Dynamic replacement RegExp
	    var regex = new RegExp('.*?[&\\?]' + varName + '=(.*?)&.*');
	    // Apply RegExp to the query string
	    val = queryStr.replace(regex, "$1");
	    // If the string is the same, we didn't find a match - return false
	    return val == queryStr ? false : val;
	},
		
	//fill the form on the response page
	_fill_form : function(){
		if (applicationValidator._getQueryVar('age') != false && applicationValidator._getQueryVar('name') != false) {
			applicationValidator.config.$name_fields.val(applicationValidator._getQueryVar('name'));
			applicationValidator.config.$age_fields.val(applicationValidator._getQueryVar('age'));
			if (applicationValidator._getQueryVar('have_sons') == "Y"){
				$('#sons_info').css('display', 'block');
				var vars = applicationValidator._getQueryVar('childs_info');
				var pair = vars.split("-");
		        for (var i=0;i<pair.length;i++) {
		        	if (pair[i] != "") {
		        		name_gender = pair[i].split("/");
			        	applicationValidator.sons_names.push({name : name_gender[0], gender : name_gender[1]});
		            }
			    }
			    applicationValidator._sons_list_response();
			}
		}
	},
	
	
	_slideShowPuppys : function(){
		$(applicationValidator.config.$banner_elements + ' img:gt(0)').hide();
		setInterval(function(){ 
			 $(applicationValidator.config.$banner_elements + ' :first-child').fadeOut()
	         .next('img').fadeIn()
	         .end().appendTo(applicationValidator.config.$banner_elements);
		},4000);
	}
};

$(document).ready(applicationValidator.init);