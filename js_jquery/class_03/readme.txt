jQuery Install
	Download the jQuery library from jQuery.com
	Include jQuery from a CDN, like Google (<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>)

There are two versions of jQuery available for downloading:
    Production version - this is for your live website because it has been minified and compressed
    Development version - this is for testing and development (uncompressed and readable code)

jQuery Syntax
	The jQuery syntax is tailor made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: $(selector).action()
    A $ sign to define/access jQuery
    A (selector) to "query (or find)" HTML elements
    A jQuery action() to be performed on the element(s)

Examples:
	$(this).hide() - hides the current element.
	$("p").hide() - hides all <p> elements.
	$(".test").hide() - hides all elements with class="test".
	$("#test").hide() - hides the element with id="test".

The Document Ready Event
	$(document).ready(function(){
	   // jQuery methods go here...
	}); 

Tip: The jQuery team has also created an even shorter method for the document ready event:
	$(function(){
	   // jQuery methods go here...
	});