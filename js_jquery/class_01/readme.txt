What is and Why JavaScript?
	- Scripting Language
	- Is an interpreted language 

How and Where do you place JavaScript code, how to start? 
	- Head
	- end Body
	- Anywhere
	- <script>  

Comments -> // and /* */

Statements, ends always with ;

Variables (case sensitive, no se puede iniciar con numeros o &*%) 

Different Types
	Number (decimal, negative)
		isNaN(NaN);			//true
		isNaN(10);			//false
		isNaN(’10’);			//false
		isNaN(‘cool’);		//true
		isNaN(true);

	string ("" & ', \" (escape character) )
	boolean
	null (empty variable)
		var temp = null;
		alert(null == undefined) //true
		alert(null === undefined) //false


	Undefined (cosas que no existen)
		var temp;
		alert(temp); 		//undefined
		alert(typeof temp === ‘undefined’) //true
		
Popup Boxes
Alert Box
	–alert("some text");
Confirm Box
	–confirm("some text");
Prompt Box
	–prompt("sometext", "default value")


Referencing External JavaScript File	

JavaScript language
JavaScript functions
JavaScript events
JavaScript objects
JavaScript HTML DOM objects
Closure (need to be added)