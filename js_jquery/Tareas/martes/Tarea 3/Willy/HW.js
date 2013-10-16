/*
* Homework javascript Module
*/
var willy = {};
willy = (function () {
    //Privates vars
    var options = {};

    //Init Method or Constructor
    var initialize = function (opts) {
        $.extend(options, opts);
        handleClick1();
        handleClick2();
        handleClick3();
        handleClick4();
        handleClick5();
        handleClick6();
        handleClick7();
    };

    //Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
    //Handler Click BTN 1
    var handleClick1 = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function () {            
            getAttrMID();
            return false;
        });
    };

    //Handler Click BTN 2
    var handleClick2 = function () {

        $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
            $('#mid').attr('merchantid', '10');
            getAttrMID(); 
            return false;
        });
    };

    //Handler Click BTN 3
    var handleClick3 = function () {
        $('#btn3').off('click.btn3').on('click.btn3', function () {
            $('#mid').attr('merchantID', function () {
                return 10 + 5;
            });
            getAttrMID();

            return false;
        });
    };

    //Handler Click BTN 4
    var handleClick4 = function () {
        $('button.button:last').off('click.btn4').on('click.btn4', function () {
            $('#mid').attr({
                'merchantid': '20',
                'contractid': '10'
            });
            getAttrMID();
            $('#mid')
                .siblings('span')
                .after(
                            '<span>ContractID:<label id="lblCID">'
                            + $('#mid').attr('contractid')
                            + '</label></span>'
                        );
            return false;
        });
    };

    //Handler Click BTN 5
    var handleClick5 = function () {
        $('#btn4').off('click.btn4').on('click.btn4', function () {
            var $mid = $('#mid');
            $mid.removeAttr('contractid');
            $mid.siblings('span:eq(1)').remove();
            return false;
        });
    };

    //Handler Click BTN 6
    var handleClick6 = function () {
        $('.containerD button:last').off('click.btn6').on('click.btn6', function () {
            var $btns = $('.containerD button');
            $btns.each(function () {
                $(this).addClass('marked');
            });
            $('#lbltbtns').html($btns.length);
        });
    };

    //Handler Click BTN 7
    var handleClick7 = function () {
        $('#btn5').off('click.ziola').on('click.ziola', function () {
            //$('#lbltbtns').text('<h1>Hola mundo</h1>');
            // $('#lbltbtns').html('<h1>Hola mundo</h1>');
            // $('#lbltbtns').prepend('0');
            $('#lbltbtns').append('1');
            $('#btn1').trigger('click');
            return false;
        });

        //delegate
        $('.containerD').off('click.ziola', 'button').on('click.ziola', 'button', function () { });

    };
    
    return {
        init: initialize
    }
})();
