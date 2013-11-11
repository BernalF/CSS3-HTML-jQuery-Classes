var ACME= ACME || {};

ACME.HomeWork = (function(){
    var options = {};
    var con=0;
    var initialize = function(opts){
        $.extend(options,opts);
        btn1HandleClick();	 
        btn2HandleClick();
        btn3HandleClick();
        btn4HandleClick();
        btn5HandleClick();
        btn6HandleClick();
    };
    
    
    var btn1HandleClick = function(){                  
        $('input[name="sRadio"]').off('click.sRadio').on('click.sRadio', function(e){
            $("#yRadio").is(":checked") ? $("#inv").fadeIn() : $("#inv").fadeOut();
            e.stopPropagation();
        });       
    };
    
    
    var btn2HandleClick = function(e){  
        $('#tNameE').off('click.btnA').on('click.btnA', function (e) {
            var a = $("#tname1").val();
            var b = $("#genre").val();
            var cnt = [];
            
            if(a == ""){
                $("#tname1").siblings('span').text('Please insert name').show();
                e.stopPropagation();       
            }
            else{
                con=con+1;
                
                cnt.push('<tr><td>');
                cnt.push('<input type="text" id="inpuN" value="'+a+'" disabled="disabled">');
                cnt.push('</td><td>');
                cnt.push('<select id="inpuG" name="'+con+'" disabled="disabled"><option value="Male">'); 
                cnt.push('Male</option><option value="Female">'); 
                cnt.push('Female</option></select>');
                cnt.push('</td><td>');
                cnt.push('<input type="button" id="Edit" value="Edit">');
                cnt.push('</td><td>');
                cnt.push('<input type="button" value="Delete">');
                cnt.push('</td></tr>');
                
                $("#table").append(cnt.join(''));
                $('[name="'+con+'"] option[value="'+ b +'"]').attr("selected",true);
                $("#tname1").siblings('span').fadeOut();
                e.stopPropagation();
            }
        });
    };
    
    var btn3HandleClick = function(){  
        $('#table').on('click', 'input[value="Delete"]', function(e){
            $(this).closest('tr').remove();
            e.stopPropagation();
        });
    };
    
    var btn4HandleClick = function(){  
        $('#table').on('click', 'input[value="Edit"]', function(e){
            $(this).closest('tr').find('#inpuN').attr("disabled",false);
            $(this).closest('tr').find('#inpuG').attr("disabled",false);
            $(this).attr("value","Save");
            
            e.stopPropagation();
        });
        
        $('#table').on('click', 'input[value="Save"]', function(e){
            $(this).closest('tr').find('#inpuN').attr("disabled",true);
            $(this).closest('tr').find('#inpuG').attr("disabled",true);
            $(this).attr("value","Edit");
            
            e.stopPropagation();
        });      
    };
    
    
    var btn5HandleClick = function(){
        $('#save').click(function(e){
            var name= $('#tname');
            var add= $('#tadd');
            var email = $('#temail');
            var telephone = $('#telephone');
            var radioy = $('#yRadio');
            var name1 = $('#tname1');
            
            //Validation Name
            if(name.val()==""){
                name.siblings('span').show();
                e.preventDefault();
            }
            else{
                var f=Letter(name.val());
                if(f != false){
                    e.preventDefault();
                    name.siblings('span').fadeOut();
                }
                else{
                    name.siblings('span').text('Please insert only letters').show();
                    e.preventDefault();
                }
            }
            
            //Validation Address
            if(add.val()==""){
                add.siblings('span').show();
                e.preventDefault();
            }
            else{
                e.preventDefault();
                add.siblings('span').fadeOut();
            }
            
            //Validation E-mail
            if(email.val()==""){
                email.siblings('span').show();
                e.preventDefault();
            }
            else{
                var em = Email(email.val());
                if(em != false){
                    e.preventDefault();
                    email.siblings('span').fadeOut();
                }
                else{
                    email.siblings('span').text('Insert the email correctly please').show();
                    e.preventDefault();
                }
            }
            
            //Validation Telephone
            if(telephone.val()==""){
                telephone.siblings('span').show();
                e.preventDefault();
            }
            else{
                var tel = Telephone(telephone.val());
                if(tel != false){
                    e.preventDefault();
                    telephone.siblings('span').fadeOut();
                }
                else{
                    telephone.siblings('span').text('Insert the telephone correctly please').show();
                    e.preventDefault();
                }
            }
            
            if(radioy.is(":checked")&&(name1.val()=="")){
                name1.siblings('span').show();
                e.preventDefault();
            }       
        });
    };
    
    var Letter = function(f){
        this.ck_name = /^[a-zA-Z\s]+$/;
        if(this.ck_name.test(f)){
            return(true);
        }
        else{
            return(false);
        }
    };
    
    
    var Email = function(g){
        this.ck_email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
        if(this.ck_email.test(g)){
            return(true);
        }
        else{
            return(false);
        }
    };
    
    var Telephone = function(t){
        this.ck_tel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if(this.ck_tel.test(t)){
            return(true);
        }
        else{
            return(false);
        }
    };
    
    
    var btn6HandleClick = function(){  
        var cnt = [];
        for(var i=0;i<=10;i++){
            cnt.push('<option  id="'+i+'"');
            cnt.push(i);
            cnt.push('</option>')
        }
        
        $("#age").append(cnt.join(''));
        
        
    };
    
    
    return{
        init:initialize
    };
    
})();

