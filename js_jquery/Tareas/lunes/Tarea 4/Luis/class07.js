
var ACME = ACME || {};

ACME.class07 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn1HandleClick();
        btn2HandleClick();
        btn3HandleClick();
        btn4HandleClick();
        btn5HandleClick();
        btnLastHandleClick();
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

    var btn2HandleClick = function () {
        $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
            $('#mid').attr('merchantid', '920');
            getAttrMID();
            return false;
        });
    };

    var btn3HandleClick = function () {
        $('#btn3').off('click.btn3').on('click.btn3', function () {
            $('#mid').attr('merchantid', function () {
                return 520 + 10;
            });
            getAttrMID();
            return false;
        });
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
            return false;
        });
    };


    var btn5HandleClick = function () {
        $('#btn4').off('click.btn4').on('click.btn4', function () {
            var $mid = $('#mid');
            $mid.removeAttr('contractid');
            $mid.siblings('span:eq(1)').remove();
            return false;
        });
    };


    var btnLastHandleClick = function () {
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

