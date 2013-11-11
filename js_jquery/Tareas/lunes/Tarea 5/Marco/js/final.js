var FINALHW = FINALHW || {};

FINALHW.homework = (function(){
    
    var options = {};
        
    var initialize = function(opts){
        initsondiv();
        showSondiv();
        addson();
        genButtonsEvent();
        validateNum();
        Save();
    };
    
     var initsondiv = function () {
         $('#sondiv').hide();
     }
    var showSondiv = function () {
        
        $("input[name='optson']").change(function(e)
            {
                if ($(this).val() === 'Yes') {
                  $('#sondiv').show('slow');
                } else if ($(this).val() === 'No') {
                  $('#sondiv').hide('slow');
                } 
            });
    };
    
    var addson = function(){
        $('#Addson').off('click.Addson').on('click.Addson', function (e) {
            var newson = $('#txtsonname');
            var genre = $('#genreopt').val();
            var rgrid = $("#right table tbody");
                if (verifySonName(newson.val())) 
                {
                    var optstr = "";
                    

                    
                    optstr = "<tr>";        
                    
                    optstr += "<td class=\"butt\" ><button class=\"edit\">Edit</button></td>";
                    optstr += "<td class=\"butt\" ><button class=\"delete\">Delete</button></td>";
                    optstr += "<td class=\"txt\" ><input type=\"text\" readonly=\"true\"  value=\""+newson.val()+"\"/></td>";
                    optstr += "<td class=\"txt\" ><select disabled id=\"genreoptd\">";
                    optstr += "<option";
                    if (genre == "male") {
                        optstr += " selected";
                    }
                    optstr += " value=\"male\">Male</option>";
                    optstr += "<option";
                    if (genre == "female") {
                        optstr += " selected";
                    }
                    optstr += " value=\"female\">Female</option>";
                    optstr += "<option";
                    if (genre == "Undefined") {
                        optstr += " selected";
                    }
                    optstr += " value=\"Undefined\">Not Defined</option></select></td>"
                    optstr +="</tr>";
                    rgrid.append(optstr);
                            
                }
            newson.val("");
            e.stopPropagation();
        });
    };
    var verifySonName = function(sonname){
        var result = true;
        $('#right').find('table tbody tr td').find('input').each(function(){
            if ($(this).val() == sonname){
                alert('Son already ADDED!!!!');
                result = false;
                return false;
            }
        }); 
         if (result == true)
            return true;
    };
    
    var genButtonsEvent = function(){
    
        $("#gridtable").delegate(".edit", "click", function()
        {
                var $btnval = $(this);
                if ($btnval.text() == "Edit"){
                    $(this).closest('tr').find("input").each(function() {
                         var $thatInput = $(this);
                         $thatInput.attr("readonly", false);
                    });
                    $(this).closest('tr').find("select").each(function() {
                        var $select = $(this);
                        $select.removeAttr('disabled');
                    });
                     $btnval.text("Update");
                } else{
                    $(this).closest('tr').find("input").each(function() {
                         var $thatInput = $(this);
                         $thatInput.attr("readonly", true);
                    });
                    $(this).closest('tr').find("select").each(function() {
                        var $select = $(this);
                        $select.attr('disabled',true);
                    });
                     $btnval.text("Edit");
                }
                 
        });
        $("#gridtable").delegate(".delete", "click", function()
        {
            var didConfirm = confirm("Are you sure you want to delete?");
              if (didConfirm == true) {
                $(this).closest('tr').remove();
              }
        });
    };
    
    var validateNum = function(){
      
        $('#txtage').keydown(function(event) {
            var theEvent = event;
            var key = theEvent.keyCode || theEvent.which;
            //key = String.fromCharCode( key );
            //var regex = /[0-9]|\./;
            //if( !regex.test(key) ) {
            if ((key>=48 && key<=57) || (key==8) || (key==46) || (key>=96 && key<=105)){
                theEvent.returnValue = true;
            }else{
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            };
            
        });
            
    };
    
    var validateFields = function(){
    
        var validate  = true;
        var textage = $('#txtage').val() ;
        var textname = $('#txtname').val() ;
        var optOptions = $("input[name='optson']");
        var optsel;
        for (var i = 0, length = optOptions.length; i < length; i++) {
            if (optOptions[i].checked) {
               optsel = optOptions[i].value;
               break;
            }
        }
        if ((textage != "") && (textname != "")){
            validate = true;
        }else{
            validate = false;
        }
        if ((optsel == "Yes") && (validate)){
            var rowCount = $('#gridtable tr').length;
            if (rowCount<=1){
                validate  = false;
                alert('You did not add any son! Add at least one or click on NO option')
            }
            
        }else{
            if (!validate){
                alert('Please fill all the required fields!');
            }
        }
        if (validate)
            return true;
        else 
            return false;    
    };
    
    var Save = function(){
    
        $('#btnc').off('click.btnc').on('click.btnc', function (e) {
            if (validateFields()){
                var textage = $('#txtage').val() ;
                var textname = $('#txtname').val() ;
                var textarea = "";
                $('#gridtable').find('tbody tr td').find('input').each(function(){
                    var $inputval = $(this).val();
                    if ($inputval != 'undefined'){
                        textarea +=  $inputval + "-"; 
                    }
                    
                }); 
                
                var data = new Array();
                data[0] = textage;
                data[1] = textname;
                data[2] = textarea;
                var packed = "";
                for (i = 0; (i < data.length); i++) {
                    if (i > 0) {
                      packed += ",";
                    }
                    packed += escape(data[i]);
                  }
                  window.location = "result.html?" + packed;
            }
        });
    };
    
    return{
        init: initialize    
    };
    
})();

/*
 

        

      
        
        
*/