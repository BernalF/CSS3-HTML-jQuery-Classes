var ACME = ACME || {};

ACME.class07 = (function(){
    
    var options = {};
        
    var initialize = function(opts){
        $.extend(options,opts);    
        btn1HandlerClick();
        btn2HandlerClick();
        btn3HandlerClick();
        btn4HandlerCLick();
        btn5HandlerClick();
        btn6HandlerClick();
    };
    
    //Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
    
    var btn1HandlerClick = function(){
        
        $('#btn1').off('click.btn1').on('click.btn1', function (e) {
            getAttrMID();
            e.stopPropagation();
        });
    
    };
    
    var btn2HandlerClick = function(){
          $('button.button:eq(0)').off('click.btn2').on('click.btn2', function (e) {
            $('#mid').attr('merchantid', '920');
            getAttrMID();
            e.stopPropagation();
        });

    };
    
    var btn3HandlerClick = function(){
        $('#btn3').off('click.btn3').on('click.btn3', function (e) {
            $('#mid').attr('merchantid', function () {
                return 520 + 10;
            });
            getAttrMID();
            e.stopPropagation();
        });
        
    };
    
    var btn4HandlerCLick = function(){
    
          $('button.button:last').off('click.btn4').on('click.btn4', function (e) {
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
            
        });
    
    };
    
    var btn5HandlerClick= function(){
    
        $('#btn4').off('click.btn4').on('click.btn4', function (e) {
            var $mid = $('#mid');
            $mid.removeAttr('contractid');
            $mid.siblings('span:eq(1)').remove();
            e.stopPropagation();
        });
        
    };
    
    var btn6HandlerClick = function(){
    
        $('button:last').off('cick.btn6').on('click.btn6', function () {
            var $btns = $('.containerD button');
            $btns.each(function () {
                $(this).addClass('marked');
            });
            $('#lbltbtns').html($btns.length);
        });
    };
    
    return{
        init: initialize
    };

    
})();

/*
 

        

      
        
        
*/