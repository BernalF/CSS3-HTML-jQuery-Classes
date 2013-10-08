
    function AddText() { 
       var v = document.getElementById("nametext").value
        if (v!=null || v!="")
        {
        
            var x = document.getElementById('texta').value+=v+"\n";
            document.getElementById("nametext").value="";
        }
    } 
 
function Visible(){
    
    document.getElementById('texta').style.display ='block';
    document.getElementById('removebtn').style.display = 'block';
}
function Invisible(){
    document.getElementById('texta').style.display = 'none';
    document.getElementById('removebtn').style.display = 'none';
}
function removeElement(){
     var r=confirm("Do you like remove this name?");
if (r==true)
  {
    var elements = document.getElementById('texta').value="";
  }    
    
}
function formSubmit(){
 var data = new Array();
 var age=document.getElementById('age').value;
 var name= document.getElementById('name').value;
 var textarea =document.getElementById('texta').value;
if(name!=null && age!=null && textarea!=null) {
   data[0]=name;
    data[1]=age;
    data[2]=textarea;
    alert("Name:"+data[0]+"\n"+"Age:"+data[1]+"\n"+"Sons:"+data[2]+"\n");
}
}
var nav4 = window.Event ? true : false;

function IsNumber(evt){

var key = nav4 ? evt.which : evt.keyCode;
return (key <= 13 || (key >= 48 && key <= 57) || key == 46);
}

