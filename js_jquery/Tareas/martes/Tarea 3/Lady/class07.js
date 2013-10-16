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
    
    var zoila = function (){
	   $('#lbltbtns').append('1');
	   $('#btn1').trigger('click');
    };
    
    var setMerchantid10 =  function (){
	    $('#mid').attr('merchantid', '10');
	    getAttrMID();
    };
    
    var setMerchantid15 = function(){
	    $('#mid').attr('merchantid', function () {
	            return 10 + 5;
	        });
	        getAttrMID();
	};
	
	var setMerchantIdAndContractID  = function (){
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
	};
	
	var removeCntId = function(){
		var $mid = $('#mid');
	        $mid.removeAttr('contractid');
	        $mid.siblings('span:eq(1)').remove();
	};
	
	var getTotalOfButtons = function(){
		 var $btns = $('.containerD button');
	        $btns.each(function () {
	            $(this).addClass('marked');
	        });
	        $('#lbltbtns').html($btns.length);
	};
    
    //Handler Click
    var handleClick = function () {
    	//getting the value of mid
    	$('#btn1').off('click.btn1').on('click.btn1', function(){
	    	getAttrMID();
    	});
    	//Appending 1 and triggering the click action
    	$('#btn5').off('click.ziola').on('click.ziola', function () {
	        zoila();
	        return false;
	    });
	    //Set Attributes – Type 01
	    $('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
	    	setMerchantid10();    
	        return false;
	    });
	    //Set Attributes – Type 02 - function
	    $('#btn3').off('click.btn3').on('click.btn3', function () {
	        setMerchantid15();
	        return false;
	    });
	    //Set Attributes – Type 03 - obj
	    //Change merchantID and Add ContractID and print next to the merchantID
	    $('button.button:last').off('click.btn4').on('click.btn4', function () {
	        setMerchantIdAndContractID();
	        return false;
	    });
	    //Remove Attributes
	    $('#btn4').off('click.btn4').on('click.btn4', function () {
	        removeCntId();
	        return false;
	    });
	    //each - GetTotalOfButtons and mark it
	    $('.containerD button:last').off('click.btn6').on('click.btn6', function () {
	       getTotalOfButtons();
	       return false;
	    });
    };
    
    //Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#'+options.hidden_field).attr(options.attribute_name);
        $('#'+options.label).html(mid);
    };

    return {
        init: initialize
    }
})();