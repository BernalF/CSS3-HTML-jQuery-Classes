// creating the module

// Variable global to access the module
var class07 = {};

class07 = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);

        // Remove the onclick event
        var $allButtons = $('.containerD #btn1').siblings()
        $allButtons.each(function () {
            $(this).removeAttr('onclick')
        });

        // Add ID's to each button
        $($allButtons.get(0)).attr('id', 'btnsetAttrMID1');
        $($allButtons.get(2)).attr('id', 'btnsetAttrMID3');
        $($allButtons.get(4)).attr('id', 'btngetTotalBtns');

        // Handle Events
        handleClick();
    };

    var getAttrMID = function () {
        var $mid = $('#mid').attr('merchantid');
        $('#lblMID').html($mid);
    };

    var handleClick = function () {


        //Handler Click btn 1
        $('#btn1').off('click.btn1').on('click.btn1', function () {
            getAttrMID();
            return false;
        });

        // Implement the onclick event
        $('#btnsetAttrMID1').off('click.btnsetAttrMID1').on('click.btnsetAttrMID1', function () {
            $('#mid').attr('merchantid', '10');
            getAttrMID();
            return false;
        });

        $('#btn3').off('click.btn3').on('click.btn3', function () {
            $('#mid').attr('merchantid', function () {
                return 10 + 5;
            });
            getAttrMID();
            return false;
        });

        $('#btnsetAttrMID3').off('click.btnsetAttrMID3').on('click.btnsetAttrMID3', function () {
            $('#mid')
                .attr({
                    'merchantid': '20',
                    'contractid': '520'
                })
                .siblings('span')
                .after('<span>ContractID:<label id="lblCID">' +
                        $('#mid').attr('contractid') +
                        '</label></span>');

            getAttrMID();
            return false;
        });

        $('#btn4').off('click.btn4').on('click.btn4', function () {

            $('#mid')
                .removeAttr('contractid')
                .siblings('span:eq(1)').remove();

        });


        $('#btngetTotalBtns').off('click.btngetTotalBtns').on('click.btngetTotalBtns', function () {

            var $butt = $('.containerD button');

            $butt.each(function () {
                $(this).addClass('marked');
            });
            $('#lbltbtns').html($butt.length);
        });


    };



    return {
        init: initialize
    }
})();


