var FirstModule = (function () {
    //Privates Vars
    var options = {};

    //Init Method
    var initialize = function (opts) {
        $.extend(options, opts);
        addDOMObjsBehaviour(); 
    };

    //Add events to the objects
    var addDOMObjsBehaviour = function () {
        $('#btn1').off('click').on('click.btn1', function () {
            getAttrMID();
        });

        $('#btn3').off('click').on('click.btn3', function () {
            setMerchantIDWithAdd();
        });

        $('#btn5').off('click').on('click.btn4', function () {
            removeContractID();
        });

        $('#btn1').siblings('button:eq(0)').off('click').on('click', function () {
            setMerchant10();
        });

        $('#btn1').siblings('button:eq(2)').off('click').on('click', function () {
            addContractID();
        });

        $('button:last').off('click').on('click', function () {
            getTotalOfButtons()
        });

    };

    //Retrieve Attributes
    var getAttrMID = function () {

        $('#lblMID').html($('#mid').attr('merchantid'));
    };


    //Set Merchant ID in 10
    var setMerchant10 = function () {
        $('#mid').attr('merchantid', function () {
            return 10;

        });
        getAttrMID();

    };

    //Set MerchantId in (10+5)
    var setMerchantIDWithAdd = function () {
        $('#mid').attr('merchantid', function () {
            return 10 + 5;

        });
        getAttrMID();
        
    };

    //Remove the contractID atribute
    var removeContractID = function () {
        $('#mid').removeAttr('contractID');
        $('#mid').siblings('span:eq(1)').remove();
       
    };

    //addContractID atribute
    var addContractID = function () {
        $('#mid').attr({
            'merchantID': 20,
            'contractID': 10
        });
        $('#mid')
        .siblings('span')
        .after('<span><label> - ContractID: ' + $('#mid').attr('contractID') + '</label></span>');
        getAttrMID();
       
    };

    //Get the total of buttons
    var getTotalOfButtons = function () {
        var $btns = $('.containerD button');
        $btns.each(function (i, val) {
            $(val).addClass('marked');
        });
        $('#lbltbtns').html($btns.length);
       
    };
   
        //Init the program
    return {
        init: initialize
    };


})();

