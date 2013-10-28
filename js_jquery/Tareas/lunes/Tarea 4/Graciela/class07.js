var ACME = ACME || {};
ACME.class07 = (function () {

    var options = {};
    var initialize = function (opts) {
        $.extend(options, opts);
        getMerchantID();
        setMerchantID920();
        setMerchantID530();
        setContractID();
        removeContractID();
        getTotalOfButtons();
    };

    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
    var getMerchantID = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function (e) {
            getAttrMID();
            e.stopPropagation();
        });
    };
    var setMerchantID920 = function () {
        $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
            $('#mid').attr('merchantid', '920');
            getAttrMID();
            e.stopPropagation();
        });
    };
    var setMerchantID530 = function () {
        $('#btn3').off('click.btn3').on('click.btn3', function () {
            $('#mid').attr('merchantid', function () {
                return 520 + 10;
            });
            getAttrMID();
            e.stopPropagation();
        });
    }
    var setContractID = function () {
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
    }
    var removeContractID = function () {
        $('#btn4').off('click.btn4').on('click.btn4', function () {
            var $mid = $('#mid');
            $mid.removeAttr('contractid');
            $mid.siblings('span:eq(1)').remove();
            return false;
        });
    }
    var getTotalOfButtons = function () {
        $('.containerD button:last').off('click.btn6').on('click.btn6', function () {
            var $btns = $('.containerD button');
            $btns.each(function () {
                $(this).addClass('marked');
            });
            $('#lbltbtns').html($btns.length);
        });
    }
    return {
        init: initialize
    };
})();



 
    



        