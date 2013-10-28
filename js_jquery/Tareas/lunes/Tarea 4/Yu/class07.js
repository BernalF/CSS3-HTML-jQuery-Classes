var ACME = ACME || {};

// Get Merchant ID
ACME.button1 = (function () {
    var options = {};
	
    var initialize = function (opts) {
        $.extend(options, opts);
        btn1HandleClick();
    };

    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };

    var btn1HandleClick = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function (e) {
            getAttrMID();
            e.stopPropagation();
        });
    };

    return {
        init: initialize
    };
})();

// Set Merchant ID 920	
ACME.button2 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn2HandleClick();
    };

    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
	
    var btn2HandleClick = function () {
        $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
            $('#mid').attr('merchantid', '920');
            getAttrMID();
            e.stopPropagation();
        });
    };
    return {
        init: initialize
    };
})();

// Set Merchant ID 520 + 10	     :D
ACME.button3 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn3HandleClick();
    };

    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
	
    var btn3HandleClick = function () {
        $('#btn3').off('click.btn3').on('click.btn3', function () {
            $('#mid').attr('merchantid', function () {
                return 520 + 10;
            });
            getAttrMID();
            e.stopPropagation();
        });
    };
    return {
        init: initialize
    };
})();

// Set Merchant ID 570 & Contract ID 1314920
ACME.button4 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn4HandleClick();
    };

    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
	
    var btn4HandleClick = function () {
        $('button.button:last').off('click.btn4').on('click.btn4', function () {
            $('#mid').attr({
                'merchantid': '520',
                'contractid': '1314520'
            });
            getAttrMID();
            $('#mid')
                .siblings('span')
                .after(
                            '<span>ContractID:<label id="lblCID">'
                            + $('#mid').attr('contractid')
                            + '</label></span>'
                        );
            e.stopPropagation();
        });
    };
    return {
        init: initialize
    };
})();

// Remove Contract ID
ACME.button5 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn5HandleClick();
    };
	
    var btn5HandleClick = function () {
         $('#btn4').off('click.btn4').on('click.btn4', function () {
            var $mid = $('#mid');
            $mid.removeAttr('contractid');
            $mid.siblings('span:eq(1)').remove();
            e.stopPropagation();
        });
    };
    return {
        init: initialize
    };
})();

// Get Total of buttons
ACME.button6 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn6HandleClick();
    };
	
    var btn6HandleClick = function () {
        $('button:last').off('click.btn6').on('click.btn6', function () {
            var $btns = $('.containerD button');
            $btns.each(function () {
                $(this).addClass('marked');
            });
            $('#lbltbtns').html($btns.length);
        });
    };
    return {
        init: initialize
    };
})();