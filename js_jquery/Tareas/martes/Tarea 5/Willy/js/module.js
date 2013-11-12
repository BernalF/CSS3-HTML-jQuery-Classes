var willy = {};
willy = (function () {
    //Privates vars
    var options = {};

    //Init Method or Constructor
    var initialize = function (opts) {
        $.extend(options, opts);
        ShowSection();
        HideSection();
        SaveData();
        AddRowTable();
        DeleteRowTable();
        ValidateData();
    };


    var ShowSection = function () {
        $('#rdYesOption').off('click.rdYesOption').on('click.rdYesOption', function () {
            $('#newSon').show("slow");
            return false;
        });
    };

    var HideSection = function () {
        $('#rdNoOption').off('click.rdNoOption').on('click.rdNoOption', function () {
            $('#newSon').hide("slow");
            return false;
        });
    };


    var SaveData = function () {
        $('#btnSave').off('click.btnSave').on('click.btnSave', function () {
            $("#spanAlertName").css({ display: "block" });
            $("#spanAlertAge").css({ display: "block" });

            if (($("#txtSonAge").val().length != 0) && ($("#txtSonName").val().length != 0)) {
                window.location.href = "http://google.com";
                $("#spanAlertAge").css({ display: "none" });
                $("#spanAlertName").css({ display: "none" });
            }

            else if ($("#txtSonAge").val().length != 0) {
                $("#spanAlertAge").css({ display: "none" });
            }

            else if ($("#txtSonName").val().length != 0) {
                $("#spanAlertName").css({ display: "none" });
            }
        });
    };

    var AddRowTable = function () {
        $("#add").off('click').on('click', function () {
            $("#table tbody tr:eq(0)").clone().removeClass('base-row').appendTo("#table tbody");
            return false;
        });

    };

    var DeleteRowTable = function () {
        $(document).off("click", ".delete").on("click", ".delete", function () {
            if (confirm("Are you Sure?")) {
                var parent = $(this).parents().get(0);
                $(parent).remove();
                return false;
            }
            return false;
        });
    };

    var ValidateData = function () {
        $('#txtSonAge').keypress(function (event) {

            if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
                event.preventDefault();
            }
        });
    };

    return {
        init: initialize
    }
})();
