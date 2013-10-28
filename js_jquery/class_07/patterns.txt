//----------------------------------------------------------------------------------------------------
//--> Opción mala (antipattern)  ----------------------------------------------------------------------
var x = 'Hello';
var y = 'World';
function sum(param1, param2) {
    return param1 + param2;
}
function myMessage() {
    return x + ' ' + y;
}
alert(sum(520, 10)); // 530  
alert(myMessage()); // Hello World  

//----------------------------------------------------------------------------------------------------
//--> Opcion 2 ---------------------------------------------------------------------------------------
var myApp = {}
myApp.x = 'Hello';
myApp.y = 'World';
myApp.sum = function (param1, param2) {
    return param1 + param2;
}
myApp.myMessage = function () {
    return myApp.x + ' ' + myApp.y;
}

alert(myApp.sum(520, 10)); // 530  
alert(myApp.myMessage()); // Hello World  

var newFunction = myApp.myMessage;
alert(newFunction()); // Hello World 

//this -> referencia al objeto padre

//----------------------------------------------------------------------------------------------------
//--> Opcion 3 ---------------------------------------------------------------------------------------
//  - Evitamos hacer referencia al objeto global cada vez que necesitemos crear un nuevo método
var myApp = {
    x: 'Hello',
    y: 'World',
    sum: function (param1, param2) {
        return param1 + param2;
    },
    myMessage: function () {
        return this.x + ' ' + this.y;
    }
};

alert(myApp.sum(520, 10)); // 530  
alert(myApp.myMessage()); // Hello World  

//----------------------------------------------------------------------------------------------------
//-->  Namespaces ------------------------------------------------------------------------------------
// not safe, if there's another object with this name we will overwrite it
var myApp = {};

// We need to do a check before we create the namespace
if (typeof myApp === "undefined") {
    var myApp = {};
}
// or a shorter version
var myApp = myApp || {};

//----------------------------------------------------------------------------------------------------
//--> Opcion 4, Module Pattern -----------------------------------------------------------------------
///
/// Lectura Recomendada http://www.etnassoft.com/2011/04/11/el-patron-de-modulo-en-javascript-en-profundidad/
//                      http://www.etnassoft.com/2011/04/18/ampliando-patron-modulo-javascript-submodulos/
///
// Namespace for the library
var moduloName = {};

// Library definition
moduloName = (function () {
    //Privates Vars  / properties
    var options = {};

    //Init Method
    var initialize = function (opts) {
        $.extend(options, opts);
        methDummy(options.param1);
    };

    var methDummy = function (param1) {
        console.log(param1 + options.param2);
    };


    // Public API - metodos publicos
    return {
        init: initialize
    };
})();
//----------------------------------------------------------------------------------------------------