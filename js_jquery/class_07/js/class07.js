/*
* class07 javascript Module
*/
var class07 = {};
class07 = (function () {
    //Privates vars
    var options = {};

    //Init Method or Constructor
    var initialize = function (opts) {
        $.extend(options, opts);
        handleClick();
    };

    //Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
    //Handler Click btn 1
    var handleClick = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function () {            
            getAttrMID();
            return false;
        });
    };

    
    return {
        init: initialize        
    }
})();


/* To me moved to module

$(function () {

    var x = 10;

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



    //Set Attributes – Type 01
    $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
        $('#mid').attr('merchantid', '10');
        getAttrMID();
        return false;
    });
    //Set Attributes – Type 02 - function
    $('#btn3').off('click.btn3').on('click.btn3', function () {
        $('#mid').attr('merchantid', function () {
            return 10 + 5;
        });
        getAttrMID();
        return false;
    });
    //Set Attributes – Type 03 - obj
    //Change merchantID and Add ContractID and print next to the merchantID
    $('button.button:last').off('click.btn4').on('click.btn4', function () {
        $('#mid').attr({
            'merchantid': '20',
            'contractid': '520'
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
    //Remove Attributes
    $('#btn4').off('click.btn4').on('click.btn4', function () {
        var $mid = $('#mid');
        $mid.removeAttr('contractid');
        $mid.siblings('span:eq(1)').remove();
        return false;
    });
    //each - GetTotalOfButtons and mark it
    $('.containerD button:last').off('click.btn6').on('click.btn6', function () {
        var $btns = $('.containerD button');
        $btns.each(function () {
            $(this).addClass('marked');
        });
        $('#lbltbtns').html($btns.length);
    });
});
*/