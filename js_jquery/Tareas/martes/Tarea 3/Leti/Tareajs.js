/*
* class07 javascript Module
*/
var Tarea = {};
Tarea = (function () {
    //Privates vars
    var options = {};

    //Init Method or Constructor
    var initialize = function (opts) {
        $.extend(options, opts);
        GetMerchant();
        SetMerchant();
        SetMerchant1();
        SetMerchant2();
        RemoveContractID();
        GetTotalOfButtons();
        clickZoila();
    };

    //Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
    //Handler Click btn 1
    var GetMerchant = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function () {            
            getAttrMID();
            return false;
        });
    };
     
    //Set Attributes – Type 01
    //Handler Click btn 2
    var SetMerchant = function () {
        
    $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
        $('#mid').attr('merchantid', '10');
        getAttrMID();
        return false;
      });
        
    };
    SetMerchant1 = function(){
     $('#btn3').off('click.btn3').on('click.btn3', function () {
        $('#mid').attr('merchantid', function () {
            return 10 + 5;
        });
        getAttrMID();
        return false;
     });
    };
    //Set Attributes – Type 03 - obj
    //Change merchantID and Add ContractID and print next to the merchantID
     var  SetMerchant2 = function () {
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
};
  //Remove Attributes
     var RemoveContractID = function () {
    $('#btn4').off('click.btn4').on('click.btn4', function () {
        var $mid = $('#mid');
        $mid.removeAttr('contractid');
        $mid.siblings('span:eq(1)').remove();
        return false;
    });
     };
//each - GetTotalOfButtons and mark it
     var GetTotalOfButtons = function () {
    $('.containerD button:last').off('click.btn6').on('click.btn6', function () {
        var $btns = $('.containerD button');
        $btns.each(function () {
            $(this).addClass('marked');
        });
        $('#lbltbtns').html($btns.length);
    });
 };
     clickZoila=function () {
         
      var x = 10;

    $('#btn5').off('click.ziola').on('click.ziola', function () {
        $('#lbltbtns').text('Hola mundo');
        // $('#lbltbtns').html('<h1>Hola mundo</h1>');
        // $('#lbltbtns').prepend('0');
       // $('#lbltbtns').append('1');
        //$('#btn1').trigger('click');
        return false;
    });
};
    return {
        init: initialize
    }
})();