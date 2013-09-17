/****************************************************************************************************************/
/** Created by: Andrea Corrales Delgado 																	    */
/** Styling and CSS for Validation and Basic use of forms 														*/
/** Date: 02/09/2013																						 	*/
/****************************************************************************************************************/

function validator(){
	//global vars
	this.sons_names = [];
	this.error_name = false;
	this.error_age = false;
	this.error_sons = false;
	//validator
	this.ck_name = /^[a-zA-Z\s]+$/;
	this.ck_age = /^[0-9]{2,3}$/;
	//methods
	//validate the name of the person as a required field
	this.validate_name = function(name_son){
		var element_error_showing = document.getElementById('error_messages');
		if (name_son.length == 0){
		    element_error_showing.style.display = 'block';
		    element_error_showing.style.width = '250px';
			element_error_showing.innerHTML += "<p>Invalid Name</p>" 
			this.error_name = true;
		} else {
		    if (!this.ck_name.test(name_son)) {
		        element_error_showing.style.display = 'block';
		        element_error_showing.style.width = '250px';
		        element_error_showing.innerHTML += "<p>Invalid Name</p>"
		        this.error_name = true;
		    } else {
		        this.error_name = false;
		    }			
		}
	};
	//validate the age of the input, by regular expressions
	this.validate_age = function(age){
		var element_error_show = document.getElementById('error_messages');
		if (!this.ck_age.test(age)){
		    element_error_show.style.display = 'block';
		    element_error_show.style.width = '250px';
			element_error_show.innerHTML += "<p>Invalid Age</p>" 
			this.error_age = true;
		} else {
		    this.error_age = false;
		} 
	};
	//for validate if the persons selects yes on have sons, will ask for their names
	this.validate_need_childs = function(){
		var element_error_showing = document.getElementById('error_messages');
		if (this.sons_names.length == 0) {
		    element_error_showing.style.display = 'block';
		    element_error_showing.style.width = '500px';
			element_error_showing.innerHTML += "You select YES on have sons questions... so you have to put the names of your sons!!" 
			this.error_sons = true;
		} else {
		    this.error_sons = false;
		}
	};
	
	//display the rest of the form if the option selected is YES
	this.show_sons_form = function(state){
		var rest_form = document.getElementById('sons_info');
		if (state === "Y") {
			rest_form.style.display = 'block';
			this.sons_list();
		} else {
			rest_form.style.display = 'none';
		}
	};
	//disable the keypress event in case of not a number will be input, alowing only insert numbers
	this.isNumber = function(evt) {
	    evt = (evt) ? evt : window.event;
	    var charCode = (evt.which) ? evt.which : evt.keyCode;
	    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	        return false;
	    }
	    return true;
	};
	//creates the list of sons on the array as options on the selecte multiple
	this.sons_list = function(){
		this.clearOptionsFast("sons_list");
		var list = document.getElementById("sons_list");
		var length = this.sons_names.length;
		for (var i = 0; i < length; i++) {
			var option = document.createElement("option");
			option.text = this.sons_names[i];
			try {
		  		// for IE earlier than version 8
		  		list.add(option,list.options[null]);
		  	} catch (e) {
			  	list.add(option,null);
			}
		}
	};
	//add a son to the array and also callback the function for repaint the select multiple
	this.add_son = function(){
		son_name = document.getElementById("son_name");
		if (son_name.value.length > 0) {
			this.sons_names.push(son_name.value);
		}
		this.sons_list();
		son_name.value = "";
		son_name.focus();
	};
	//removes the selected son from the array and also callback the function for repaint the select multiple
	this.remove_son = function(name){
		var response = confirm("Are you completly sure you want to destroy your's sons name??");
		if (response === true){
			name_son = document.getElementById("sons_list").value;
			this.sons_names.splice(this.sons_names.indexOf(name_son),1);
		}
		this.sons_list();
	};
	//clear the options on the select multiple
	this.clearOptionsFast = function (id){
		document.getElementById(id).options.length = 0;
	};
	//validate the entire form is this is correct then the form will be send to the next page
	this.validate_forms = function(){
		document.getElementById('error_messages').innerHTML = "";
		document.getElementById('error_messages').style.display = 'none';	
		this.validate_name(document.getElementById('name').value);
		this.validate_age(document.getElementById('age').value);
		if (document.getElementById("yes").checked === true && this.sons_names.length === 0) {
			this.validate_need_childs();
		} else {
			sons_info = this.stringify();
			document.getElementById('childs_info').value = sons_info;
			if (this.sons_names.length != 0) {
			    this.error_sons = false;
			}
		}
		if (this.error_name == false && this.error_age == false && this.error_sons == false) {
			return true;
		} else {
			return false;
		}
	};
	
	this.stringify = function(){
		var string_sons = ""
		var length = this.sons_names.length;
		for (var i = 0; i < length; i++) {
			string_sons += this.sons_names[i]+"-";
		}
		return string_sons; 
	};

	//get the "GET" vars send by the form
	this.getQueryVar = function(varName){
	    // Grab and unescape the query string - appending an '&' keeps the RegExp simple
	    // for the sake of this example.
	    var queryStr = unescape(window.location.search) + '&';	
	    // Dynamic replacement RegExp
	    var regex = new RegExp('.*?[&\\?]' + varName + '=(.*?)&.*');
	    // Apply RegExp to the query string
	    val = queryStr.replace(regex, "$1");
	    // If the string is the same, we didn't find a match - return false
	    return val == queryStr ? false : val;
	};
		
	this.fill_form = function(){
		document.getElementById('name').value = this.getQueryVar('name');
		document.getElementById('age').value = this.getQueryVar('age');
		if (this.getQueryVar('have_sons') == "Y"){
			document.getElementById('sons_info').style.display = 'block';
			var vars = this.getQueryVar('childs_info');
			var pair = vars.split("-");
	        for (var i=0;i<pair.length;i++) {
	        	if (pair[i] != "") {
		        	this.sons_names.push(pair[i]);
	            }
		    }
		    this.sons_list();
		}
		return true;	
	};

}


