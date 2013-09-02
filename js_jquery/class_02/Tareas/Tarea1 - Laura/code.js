function Save() {
    if (document.getElementById('txtName').value == ''){
        document.getElementById('ReqName').classList.remove('requiredHidden');
        document.getElementById('txtAge').focus();
    }
    else if (document.getElementById('txtAge').value == '') {
        document.getElementById('ReqName').classList.add('requiredHidden');
        document.getElementById('ReqAge').classList.remove('requiredHidden');
        document.getElementById('txtName').focus();
    }
    else {
        if (isNaN(document.getElementById('txtAge').value)) {
            document.getElementById('ReqAge').classList.add('requiredHidden');
            document.getElementById('NumField').classList.remove('requiredHidden');            
            document.getElementById('txtAge').focus();
           
        }
        else
            window.location = "http://www.ittaleem.com/attachments/announcment-greetings/97851d1305903689-congrats-sweet-sis-abida-yours-super-15000-posts-butterflycongrats.gif"
    }
    
}

function ShowDescription() {   
    document.getElementById("divDescription").style.visibility = "visible";
    document.getElementById("divDescription").style.display = "block";
}


function HideDescription(){
    document.getElementById("divDescription").style.visibility = "hidden";
    document.getElementById("lstSons").innerHTML = "";
    document.getElementById("divDescription").style.display = "none";
}

function Add() {
    var value = document.getElementById("txtSonName").value;
    if (value != '') {
        var select = document.getElementById("lstSons");
        select.options[select.options.length] = new Option(value, value);
        document.getElementById("txtSonName").value = '';
    }
    else {
        alert('You must write a name');
    }
}

function Remove() {
    if (confirm("Are you sure to remove the element?"));
    {
        var select = document.getElementById('lstSons');
        value = select.selectedIndex;
        select.removeChild(select[value]);
    }

}

function ValidNum(e) {
    var tecla = document.all ? tecla = e.keyCode : tecla = e.which;
    return ((tecla > 47 && tecla < 58) || tecla == 46);
}