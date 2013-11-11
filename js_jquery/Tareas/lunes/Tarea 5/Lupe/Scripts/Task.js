
var ACME = ACME || {};

ACME.Task = (function () {

    var options = {};

    var initialize = function (opts) {
        $.extend(options, opts);
        btn1HandleClick();
        $('#btnAddSon').off('click.btnAddSon').on('click.btnAddSon', createSon);
        $('#btnSave').off('click.btnSave').on('click.btnSave', saveAll);
    };

    var btn1HandleClick = function () {

        var cbxSons = document.getElementById('cbxSons');
        cbxSons.addEventListener('change', function () {
            toggleSonsVisibility(true);
        }, false);

        var cbxSons = document.getElementById('cbxNoSons');
        cbxSons.addEventListener('change', function () {
            toggleSonsVisibility(false);
        }, false);

        function toggleSonsVisibility(visible) {
            var sonsContainer = document.getElementById('sonsContainer');
            sonsContainer.style.display = visible ? 'block' : 'none';

            var details = document.getElementById('header');
            details.style.display = visible ? 'block' : 'none';
        }
    };

    return {
        init: initialize
    };

})();

ACME.TaskF = (function () {

    var initialize = function () {
       $("#p1").show('slow');
        $("#img1").show(4000);
    };
    return {
        init: initialize
    };

})();

var itemCount = 0;


  //ADD NEW SON
  function createSon() {
      var name = document.getElementById('txtSonName').value;
      var genre = document.getElementById('ddlsonGen').value;

      if (!Duplicates(name)) {
          itemCount++;

          $("#detail").append("<li><input type='button' id='btnEdit" + itemCount + "' value='Edit' /><input type='button' visible='false' class='tab' id='btnSave" + itemCount + "' value='Save' /><input type='button'  id='btnDelete" + itemCount + "' value='Delete'><input enabled='false' type='text' class='tab' id='txtName" + itemCount + "' value='" + name + "' disabled /><select class='tab' id='ddlgenre" + itemCount + "' disabled value='" + genre + "'><option value='Male'>Male</option><option value='Female'>Female</option></select></li>");
       
          $("#ddlgenre" + itemCount + " option[value="+genre+"]").attr("selected",true); 
          $("#btnSave" + itemCount).hide();
                   
          // The edit button click
          $("#btnEdit" + itemCount).click(function () {
              var rowId = $(this).attr('id').replace("btnEdit", "");
              $("#txtName" + rowId).attr("disabled", false);
              $("#ddlgenre" + rowId).attr("disabled", false);
              $("#btnSave" + rowId).show();
              $(this).hide();
          });

          // The Save button click
          $("#btnSave" + itemCount).click(function () {
              var rowId = $(this).attr('id').replace("btnSave", "");
              $("#txtName" + rowId).attr("disabled", true);
              $("#ddlgenre" + rowId).attr("disabled", true);
              $(this).hide();
              $("#btnEdit" + rowId).show();
          });
          
          // The remove button click
          $("#btnDelete" + itemCount).click(function () {
              alert(itemCount);
              if (confirm("Are you sure you want to delete selected item?")) {
                  $(this).closest('li').remove();
              }
              return false;
          });
      }

      // Initialize the Add section
      $('#txtSonName').val('');
      $("#ddlsonGen option[value=Male]").prop('selected', 'true');
  }

  //Verify if son name exist
    function Duplicates(ltext) {
            var duplicates = false;

            $("#detail li").each(function () {
                var current = $(this);

                if (current.children().eq(3).val() == ltext) {
                    duplicates = true;
                }
            });

            if (duplicates)
                alert("There are duplicates.");

            return duplicates;
        }


