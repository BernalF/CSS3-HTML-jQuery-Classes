
var class07 = {};
class07 = (function () {
    //Privates vars
    var options = {};

    //Init Method or Constructor
    var initialize = function (opts) {
        $.extend(options, opts);
        handleClickbtn1();
        handleClickSetMID();
        handleClickbtn3();
        handleClickSumMID();
        handleClickbnt4();
        handleSelect();
        handlerClickBtn5();
    };

    //Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
    //Handler Click btn 1
    var handleClickbtn1 = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function () {
            getAttrMID();
            return false;
        });
    };
    //Handler Click set MID
    var handleClickSetMID = function () { 
        $('.containerD button:eq(1)').off('click.btn10').on('click.btn10', function () {
            $('#mid').attr('merchantID', '10');
            getAttrMID();
            return false;
        });
    };
    //Handler Click bnt3
    var handleClickbtn3 = function () {
        $("#btn3").off('click.btn3').on('click.btn3', function () {
            $('#mid').attr('merchantID', function () {
                return 10 + 5;
            });
            getAttrMID();
            return false;
        });
    }
    //Handler Click Add MID
    var handleClickSumMID = function () {
        $('.containerD button:eq(3)').click(function () {
            $('#mid').attr({
                'merchantID': 20,
                'contractID': 10
            });
            $('#mid')
                .siblings('span')
                .after('<span><label> - ContractID: ' + $('#mid').attr('contractID') + '</label></span>');
            getAttrMID();
            return false;
        });
    }
    //Handler Click bnt4
    var handleClickbnt4 = function () {
        $("#btn4").off('click.btn4').on('click.btn4', function () {
            $('#mid').removeAttr('contractID');
            $('#mid').siblings('span:eq(1)').remove();
            return false;
        });
    }
    //Handler Click bnt Select buttons
    var handleSelect = function () {
        $('.containerD button:eq(5)').off('click.btn15').on('click.btn15', function () {
            var $btns = $('.containerD button');
            $btns.each(function (i, val) {
                $(val).addClass('marked');
            });
            $('#lbltbtns').html($btns.length);
            return false;
        });
    }
    //Handler Click bnt5
    var handlerClickBtn5 = function () {
        $('#btn5').off('click.ziola').on('click.ziola', function () {
            //$('#lbltbtns').text('<h1>Hola mundo</h1>');
             $('#lbltbtns').html('<h1>Hola mundo</h1>');
            //$('#lbltbtns').prepend('0');
            //$('#lbltbtns').append('1');
            //$('#btn1').trigger('click');
            return false;
        });
    }

    return {
        init: initialize
    }
})();
