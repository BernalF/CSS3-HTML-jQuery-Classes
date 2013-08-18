/*
---------------- alert
	The window.alert() method allows you to send the user a message using a modal dialog - a pop-up box that will prevent the user from carrying out any further interaction with the page until (s)he has cleared the dialog by clicking 'OK'.
*/
alert("Hola");

/*
---------------- document.write
	You use document.write() in much the same way as window.alert(). However, using document.write() the content is added into the page directly, rather than via a pop-up dialog. The string you put inside the parentheses will be added to the page.
*/
document.write("Pura Vida");
/*
---------------- Commenting your code
	Some statements in your JavaScript code are not meant to be executed by the browser's interpreter. They are there solely for the benefit of anybody reading the code.
	Single-line comments can be added by preceding text with two foward slashes:
		// this is a comment
	Multi-line comments are started with /* and terminated with */ 
	//like this:
		/* this is an example
		of a multi-line comment
		in JavaScript */
/*	
---------------- Variables
	A variable can be thought of as a named 'pigeon-hole' where we keep a particular piece of data. Such data can take many forms - an integer or decimal number, a string of characters, or various other data types.

	You can call your variables pretty much anything, provided you only use alphanumeric characters, the dollar sign $, or underscores in the name.

	Suppose you have a variable called product to which you want to assign the string "Ski Jacket". You can assign the value simply:
*/
productName = "Ski Jacket";

/*
	Enclosing the text in quote marks (single or double) tells JavaScript it's a string.
	Another variable, price, is assigned a number; so we don't use quotes:
*/
productPrice = 39.95;
/*
	When using a variable for he first time, it's good practice to declare the variable (tell JavaScript about its existence) by prefixing it with the keyword var.
*/

var productName = "Ski Jacket";
var productPrice = 39.95;
console.log("The price of the " + productName + " is $" + productPrice);

/*
---------------- Operators
Values stored in variables aren't much use unless you can manipulate them in calculations. JavaScript allows you to carry out operations using the standard arithmetic operators of addition, subtraction, multiplication and division, as well as other more specialized operators.
*/

var netPrice = 25.95;
var productQuantity = 3;
var taxRate = 15; // rate in percent

var subTotal = netPrice * productQuantity;

var tax = subTotal * taxRate / 100;

// complete the following line, by adding variable 'tax' to variable 'subTotal'
// don't forget to end your line with a semicolon
var Total = subTotal + tax;

console.log('The invoice total is $' + Total);

/*
---------------- Arguments
	Arguments (sometimes referred to as parameters) are values passed to a function.	
*/
function cube(x) {
	console.log(x * x * x);
}
cube(3);
// edit the above line to pass a different numeric value to the function.

/*
---------------- Using multiple Arguments
	Sometimes it's useful for a function to receive more than one argument. Functions can take any number of arguments - they are separated by commas:
*/
function getArea(w, h) {
	console.log("Area is equal to " + w*h);
}

// write your code statement here: 
getArea(4, 4);

/*
---------------- Returning values from functions
	Functions can return values for use by other code statements. We do this by using the = operator to assign the value to a variable.
*/
function cube(x) {
	return x * x * x;
}
var result = cube(3);
// edit the argument in the above line to try passing other values 
// to the cube() function
console.log(result);

/*
---------------- Functions can call Other Functions
	Functions are quite capable of calling other functions.
*/
function cube(x) {
	return x*x*x;
}

function sphereVolume(radius) {
	return cube(radius) * 3.14159 * 4 / 3;
}

var radius = 10;
console.log("For radius = " + radius + ", sphere volume is " + sphereVolume(radius));

/*
---------------- A Function to Convert Celsius to Fahrenheit
We can use our knowledge of functions, arithmetic operators, operator precedence and return values to write a function to convert temperatures from Celsius to Fahrenheit.
*/
function tempConvert(temp) {
	return (1.8 * temp) + 32;
}
var tempC = 100;
var tempF = tempConvert(tempC);
// edit the above line to convert different temperatures
console.log(tempC + " degrees Celsius equates to " + tempF + " degrees Fahrenheit.");

/*
---------------- Using the confirm() dialog
Part of a series providing exercises and additional material for readers of Sams Teach Yourself JavaScript in 24 Hours (5th Edition), this course introduces some of the common objects and methods you'll use in the majority of your JavaScript programs.

The confirm() dialog is another modal dialog. Unlike alert(), it offer the user two options - to confirm or cancel.

The dialog returns either 'true' or 'false'. (In a later course you'll see how to test for these values and have your program react accordingly).
*/
var answer = confirm("Are we having fun yet?");
console.log("You said: " + answer);

/*
---------------- Using the prompt() dialog
The prompt() dialog is another modal dialog. Unlike alert(), it invites the user to enter some information.
*/
var answer = prompt("What is your full name?", "John Doe");
console.log("Hello there, " + answer);

/*
---------------- The navigator Object
The navigator object contains various pieces of information about your browser, including the browser model and version, your computer's operating system, what browser extensions you have installed, and more.
*/
console.log("You are using " + navigator.appName);
console.log("On system: " + navigator.platform);
console.log("Browser Version: " + navigator.appVersion);
console.log("Cookies Enabled?: " + navigator.cookieEnabled);

/*
---------------- Working with Dates and Times
JavaScript's Date object is used to work with dates and times.
*/
var mydate = new Date();
console.log("You created a new Date object with date part: " + mydate.toDateString());
console.log("and with time part: " + mydate.toTimeString());

/*
---------------- The Math object
JavaScript's Math object can save you a lot of work when performing many sorts of calculations that frequently occur.
*/
// create a random number from 0 to 20
var myValue = 20 * Math.random();
console.log("Random number: " + myValue);
// Use the Math object to do some processing
console.log("The integer below is " + Math.floor(myValue));
console.log("The integer above is " + Math.ceil(myValue));
console.log("The closest integer is " + Math.round(myValue));



