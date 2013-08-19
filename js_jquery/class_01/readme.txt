How and Where do you place JavaScript code, how to start? -> interpreted language
	- Head
	- end Body
	- Anywhere
	- <script>  

Comments -> // and /* */

JavaScript: Writing Into HTML Output
	document.write("<h1>This is a heading</h1>");

Statements
	ends always with ;
	JavaScript Code Blocks
	is Case Sensitive

Variables (case sensitive, no se puede iniciar con numeros o &*%) 

Different Types (dynamic types)
	
	Number (decimal, negative)
		isNaN(NaN);			//true
		isNaN(10);			//false
		isNaN(’10’);			//false
		isNaN(‘cool’);		//true
		isNaN(true);
	
	string ("" & ', \" (escape character) )
		var x="He is called 'Johnny'";
		var x='He is called "Johnny"';
		var x="He is called \"Johnny"\ ";

	boolean
	
	null (empty variable) assigned but with null value assigned
		var temp = null;
		alert(null == undefined) //true
		alert(null === undefined) //false

	Undefined (cosas que no existen) If you have declared but not initialized the variable, it is considered undefined:
		var temp;
		alert(temp); 		//undefined
		alert(typeof temp === ‘undefined’) //true

	Arrays
		var cars=new Array(); ||  var cars= [];
		cars[0]="Saab";
		cars[1]="Volvo";
		cars[2]="BMW";
		var cars=new Array("Saab","Volvo","BMW");
		var cars=["Saab","Volvo","BMW"]; 

	Objects
		var person={firstname:"John", lastname:"Doe", id:5566};

	Dynamic Types
		var x;               // Now x is undefined
		var x = 5;           // Now x is a Number
		var x = "John";      // Now x is a String

JavaScript Operators
	Arithmetic 
		= is used to assign values.
		+ is used to add values.
		+, -, *, /, %, ++, --, +=, -=, *=, /=, %,
	Comparison 	
		 ==, === (exactly equal to (equal value and equal type)), !=
		 !== (not equal (different value or different type))
		 >, <, >=, <=

Conditional Statements
	if (condition)
	{
		code to be executed if condition is true
	}
	else
	{
		code to be executed if condition is not true
	}
Switch Statement
	switch(n)
	{
	case 1:
	  execute code block 1
	  break;
	case 2:
	  execute code block 2
	  break;
	default:
	  code to be executed if n is different from case 1 and 2
	}

Popup Boxes
	Alert Box
		alert("some text");
	Confirm Box
		var r=confirm("Press a button");
		if (r==true) {
			x="You pressed OK!";
		}
		else {
			x="You pressed Cancel!";
		}		 	
	Prompt Box
		var person = prompt("Please enter your name","Harry Potter");
		if (person != null && person !="" ) {
			x= " Hello " + person + "! How are you today?";
		}

JavaScript Functions
	function functionname()
	{
		some code to be executed
	}
	functionname();

Local JavaScript Variables

Global JavaScript Variables
	
	The lifetime JavaScript variables starts when they are declared.
	Local variables are deleted when the function is completed.
	Global variables are deleted when you close the page.

JavaScript: Reacting to Events
	<button type="button" onclick="alert('Welcome!')">Click Me!</button>

Loops
-------------------------------- For
	cars=["BMW","Volvo","Saab","Ford"];
	for (var i=0; i < cars.length; i++) {
		document.write(cars[i] + "<br>");
	}

-------------------------------- while
	<body>
	<p>Click the button to loop through a block of as long as <em>i</em> is less than 5.</p>
	<button onclick="myFunction()">Try it</button>
	<p id="demo"></p>
	<script>
		function myFunction()
		{
		var x="",i=0;
		while (i<5)
		  {
		  x=x + "The number is " + i + "<br>";
		  i++;
		  }
		document.getElementById("demo").innerHTML=x;
		}
	</script>
	</body>
-------------------------------

------------------------------- JavaScript Form Validation
	<head>
		<script>
			function validateForm()
			{
				var x=document.forms["myForm"]["fname"].value;
				if (x==null || x=="")
				  {
					  alert("First name must be filled out");
					  return false;
				  }
			}
		</script>
	</head>

	<body>
		<form name="myForm" action="demo_form.asp" onsubmit="return validateForm()" method="post">
			First name: <input type="text" name="fname">
			<input type="submit" value="Submit">
		</form>
	</body>
-------------------------------

---- DOM 

JavaScript: Changing HTML Content
	x=document.getElementById("demo")  //Find the element
	x.innerHTML="Hello JavaScript";    //Change the content 


