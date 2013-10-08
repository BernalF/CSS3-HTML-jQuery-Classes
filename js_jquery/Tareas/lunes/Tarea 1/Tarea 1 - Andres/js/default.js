//Fill the ComboBox with numbers
function ageCombo() {
    var sel = document.getElementById('age');    
    for(var i = 1; i <= 100; i++) {
     var opt = document.createElement('option');
     opt.innerHTML = i;
     opt.value = i;
     sel.appendChild(opt);
    }
}

//Appears and Dissapears Radio Buttons
function radioClick(obj){
   var a = document.getElementById("yRadio");
   var b = document.getElementById("inv");

  if(a.checked == false){
    b.style.display = "none"
  } 
    else{if(a.checked == true)
    b.style.display = "block"
  }
}

function validation(){
  var a = document.getElementById("tname").value;
   
// Fields Required validation
//Name    
 if( a == null || a.length == 0 || /^\s+$/.test(a))
 {
    alert('The Name is Required');
    return false;
  }
    
//Age   
 var ind = document.getElementById("age").selectedIndex;
 if( ind == null || ind == 0 ) 
 {
   alert('The Age is Required');
   return false;
 }
    
//Address
 var ad = document.getElementById("tadd").value;
 if( ad == null || ad.length == 0 || /^\s+$/.test(ad))
 {
    alert('The Address is Required');
    return false;
  }
 
//Email
 var em = document.getElementById("temail").value;
 if( em == null || em.length == 0 || /^\s+$/.test(em))
 {
    alert('The Email is Required');
    return false;
  }    

//Email validation    
 if( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(em)) ) 
 {
   alert('Error: The email ' + em + ' is incorrect.');
   return false;
 } 
    
//Telephone
 var tel = document.getElementById("telephone").value;
 if( tel == null || tel.length == 0 || /^\s+$/.test(tel))
 {
    alert('The Telephone is Required');
    return false;
  }  
 
    
//Telephone Validation
 if( !(/^\d{8}$/.test(tel)) )
 {
   alert('Error: The telephone only accepts numbers without blanks or -');
   return false;
 }         
    
var z = document.getElementById("yRadio"); 

if(z.checked == true) {
    var y = document.getElementById("selecta");
    if(y.children.length==0){
    alert('You need to digit sons');
    return false;
    }
}

    
    
    
}    

var arraye = [];

//Add Elements
function addEle(){
   addElements();
   document.getElementById("tname1").value= "";
}

//Fill the array
function addElements(){
var a = document.getElementById("tname1").value;

//validate the add name    
 if( a == null || a.length == 0 || /^\s+$/.test(a))
 {
    alert('The Name of the Sons is Required');
    return false;
  }    
    
    
if(arraye.length != 0){
 for (var i = 0; i <= arraye.length; i++) {
    if(a == arraye[i])
    {   
        alert('This element is inserted previusly');
         return false;
       }
  } 
}
    arraye.push(a);
    addSelect(a);  
}

function addSelect(a){
    var para = document.createElement("option"); //<option></option>
    para.setAttribute('value', a); //<option id="value"></option>
    var node = document.createTextNode(a); // a = "texto"
    para.appendChild(node); //<option id="value">texto</option>
    
    var element = document.getElementById("selecta");
    element.appendChild(para);
}
 
//Delete Elements
function deleteElem(){
    var x = document.getElementById("selecta");
    var y =confirm("Are you sure to delete it");
    
    
    if(y == true)
    {    
    if(x.selectedIndex != -1)
    {    
    for (var i = 0; i < arraye.length; i++){
        if(arraye[i]==x.value){
          //arraye.indexOf(x.selectedIndex);
          arraye.splice(i,1)
          i--;
        }
    }          
        x.remove(x.selectedIndex);  
    }
        
   else{
      alert("Please select a option or insert one to delete it");
      return false;
    }
    
    }
    
    
    
    
}
ageCombo();
    
