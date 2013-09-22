function validatetext(e){
    if (e.keyCode >= 48 && e.keyCode <= 57)
        return true;
    else {
        
        return false
    }

}
function showhidesonsinformation(flag) {
    if (flag == true)
        document.getElementById("sonsinformation").style.visibility = "visible";
    else 
        document.getElementById("sonsinformation").style.visibility = "hidden";
    
}

function addson() {
    var sonlist = document.getElementById("sonlist");
    var sonname = document.getElementById("sonname");
    if (sonname.value != "") {
        sonlist.options[sonlist.options.length] = new Option(sonname.value, sonlist.options.length);
        sonname.value = "";
    }
}
function removeson() {
    var sonlist = document.getElementById("sonlist");
    var selectvalue = sonlist.selectedIndex;
    sonlist.removeChild(sonlist[selectvalue]);


}

function save() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    if (name.value == "" || age.value == "")
        alert("Falta campo requerido");
    else
        window.location = "aftersave.html";

}


