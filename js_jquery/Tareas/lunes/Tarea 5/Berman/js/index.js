var ACME = ACME || {};

ACME.HomeWork = (function () {

    
    var initialize = function () {

        $("#txtName").off('blur.inputs').on({
            "blur.inputs": function () {
                validate(this);                
            }
        });

        $("#txtAge").off('blur.inputs').on({
            "blur.inputs": function () {
                if(validate(this))
                    validateNum(this);
            }
        });

        $("#btnAdd").off('click.add').on({
            "click.add": function () {
                addChildName();
            }
        });
        
        var childrens = $("#childrens");
        childrens.off("click.delete", "button[type=button]").on("click.delete", "button[type=button]:first", function () {
            if (confirm(niceAnnoy())) {
                $(this).parent().parent().remove();
            }
        });

        childrens.off("click.edit", "button[type=button]").on("click.edit", "button[type=button]:last", function () {
            if ($(this).html() == "Save") {
                $(this).html("Edit");
                $(this).parent().parent().find("input, select").attr("disabled", "disabled");
            } else {
                $(this).html("Save");
                $(this).parent().parent().find("input, select").removeAttr("disabled");                
            }
            
        });

    };

    var hideChildrensArea = function(obj) {
        if (obj.checked) {
            document.getElementById("childrensArea").className = "OneCol hide";
            document.getElementById("txtChildName").value = "";
            var sel = document.getElementById("selChildsNames");

            for (var i = sel.options.length - 1; i >= 0; i--) {
                select.remove(i);
            }

            document.getElementById("txtChildName").focus();
        }
    }

    var showChildrensArea = function(val) {
        if (val) {
            document.getElementById("childrensArea").className = "OneCol";
        } else {
            document.getElementById("childrensArea").className = "OneCol hide";
        }
    }


    var addChildName = function() {
        var txt = $("#txtChildName");

        if (txt.val().length > 0) {
            var wasAdded = false;
            var childrens = $("#childrens");
            childrens.find("input[type=text]").each(function (index) {
                if ($(this).val() == txt.val()) {
                    alert("Child Name: '" + txt.val() + "' was added.... " + annoy());
                    wasAdded = true;
                    return;
                }
            });
            
            if (!wasAdded) {
                childrens.append(tr(txt.val(), $("#selGender").val()))
                txt.val("");
                txt.focus();
            }
        } else {
            alert("Please type a valid name.... " + annoy());
        }
    }

    var tr = function (name, gender) {
        if (gender == "Male")
            return '<tr><td><button type="button" class="red">Delete</button></td><td><button type="button" class="orange">Edit</button></td><td><input type="text" value="' + name + '" class="w120px" disabled="disabled"/></td><td><select class="w120px" disabled="disabled"><option value="Male" selected="selected">Male</option><option value="Female">Female</option></select></td></tr>';
        else if (gender == "Female")
            return '<tr><td><button type="button" class="red">Delete</button></td><td><button type="button" class="orange">Edit</button></td><td><input type="text" value="' + name + '" class="w120px" disabled="disabled"/></td><td><select class="w120px" disabled="disabled"><option value="Male">Male</option><option value="Female" selected="selected">Female</option></select></td></tr>';
        else return "";
    }

    var delChildName = function() {
        var sel = document.getElementById("selChildsNames");
        if (sel.options.length > 0) {
            if (sel.selectedIndex >= 0) {
                if (confirm(niceAnnoy()))
                    sel.remove(sel.selectedIndex);
            } else {
                alert("There isn't selected item to remove... " + annoy());
            }
        } else {
            alert("There isn't available items to remove... " + annoy());
        }
    }

    var annoy = function() {
        var result = ["loser", "misfit", "defeated", "freak"];
        return "You are a " + result[Math.floor((Math.random() * 4))] + "!!";
    }

    var niceAnnoy = function() {
        var result = ["Friend", "Buddy", "Pal", "Folk", "Fellow", "Mate"];
        return result[Math.floor((Math.random() * 6))] + ", Are you sure about it?";
    }

    var validateMe = function() {
        var txtName = document.getElementById("txtName");
        var txtAge = document.getElementById("txtAge");
        if (!((txtName.value.length > 0) && (txtAge.value.length > 0))) {
            alert("Ops, There are something wrong... Validation failed :(\n\n" + annoy());
            validate(txtName);
            validate(txtAge);
            return false;
        }
        return true;
    }

    var validate = function(obj) {
        if (!obj.value.length > 0) {
            obj.className = "inputError";
            obj.focus();
            $("#" + obj.id).siblings("span").removeClass("hide").html($("#" + obj.id).attr("required-msj"));
            return false;
        } else {
            obj.className = "";
            $("#" + obj.id).siblings("span").addClass("hide").html("");
            return true;
        }

    }

    var validateNum = function (obj) {
        if (!(!isNaN(parseInt(obj.value)) && isFinite(obj.value))) {
            obj.className = "inputError";
            obj.focus();
            $("#" + obj.id).siblings("span").removeClass("hide").html($("#" + obj.id).attr("no-number-msj"));
            return false;
        } else {
            obj.className = "";
            $("#" + obj.id).siblings("span").addClass("hide").html("");
            return true;
        }

    }

    return {
        init: initialize,
        hideChildrensArea: hideChildrensArea,
        showChildrensArea: showChildrensArea,
        
        delChildName: delChildName,
        validateMe: validateMe,
        validate: validate
    };
})();