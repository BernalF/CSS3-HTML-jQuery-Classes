
var class07 = {};

class07 = (function () {

	// Privates Vars
    var options = {};
	
	//Init Method
    var initialize = function (opts) {
        $.extend(options, opts);
        GetMerchant();
		SetMerchant();
		SetMerchantTwo();
		SetMerchantAndContract();		
    };

    // Retrieve Attributes
    var getAttrMID = function () {
        var mid = $('#mid').attr('merchantid');
        $('#lblMID').html(mid);
    };
	
    // Get MerchantID
    var GetMerchant = function () {
        $('#btn1').off('click.btn1').on('click.btn1', function () {            
              getAttrMID();
              return false;
            });
    }; 
    	
	
	// Set MerchantID 10
	var SetMerchant = function () {
    	$('button.button:eq(0)').off('click.btn2').on('click.btn2', function () {
	       $('#mid').attr('merchantid','10');
		   getAttrMID();
           return false;	
	     });
	 };
	
	
	// Set MerchantID 10 + 5
	var SetMerchantTwo = function () {
	   $('#btn3').off('click.btn3').on('click.btn3', function () {
		  $('#mid').attr('merchantid', function () {
		  return  10 + 5;
		});
		  getAttrMID();
          return false;				
		});	
	};
	
	
	//Set MerchantID 20 and Add contractID 10
	var SetMerchantAndContract = function () {
	    $('button.button:last').off('click.btn4').on('click.btn4',function () {
			 $('#mid').attr({'merchantid':'20','contractid':'520'});
			 getAttrMID();
			 $('#mid').siblings('span').after('<span>ContractID:<label id="lblCID">'+ $('#mid').attr('contractid')+ '</label></span>');
             return false;													  
		  });
	 };
	
	
	//Remove contractID stady
	$('#btn4').off('click.btn4').on('click.btn4', function () {
	    var RemoveContract = $('#mid');
	    RemoveContract.removeAttr('contractid');
	    RemoveContract.siblings('span:eq(1)').remove();
	    return false;	  
	 });
	
	
	// Funtion ziola
	  $('#btn5').off('click.ziola').on('click.ziola', function () {
      $('#lbltbtns').html('<h1>Hola mundo</h1>');     
       return false;
    });
	
	
	// Get Total Of Buttons
	$('.containerD button:last').off('click.btn6').on('click.btn6', function () {
	 	var $btns = $('.containerD button');
		$btns.each(function () {
		  $(this).addClass('marked');					
		});
	    $('#lbltbtns').html($btns.length);
	 });
	
	
   //Init the program
    return {
        init: initialize
    }
})();
