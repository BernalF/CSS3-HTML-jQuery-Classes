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

