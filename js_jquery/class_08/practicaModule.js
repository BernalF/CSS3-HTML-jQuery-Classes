// Namespace for the library
var practicaModule = {};

// Library definition
practicaModule = (function () {
    //Privates Vars  / properties
    var options = {};

    //Init Method
    var initialize = function (opts) {
        $.extend(options, opts);

        cleanFocus();
        saveAction();
        addAction();
        deleteHandler();
        radioHandler();
    };
    //Validate numbers on input
    var justNbrs = function (el) {
        return isNaN(el.val()) ? false : true;
    };
    //Radio button Check handler
    var radioHandler = function () {
        $('input:radio[name=child]').off('change.child').on('change.child', function () {
            if ($(this).val() == 'No')
                $('.sideCtiner').hide();
            else
                $('.sideCtiner').show();
            return false;
        });
    };
    //delete Handler
    var deleteHandler = function () {
        $('tbody').off('click.tbody', 'button').on('click.tbody', 'button', function () {
            $(this).closest('tr').remove();
            return false;
        });
    };
    //Add to grid
    var addAction = function () {
        $('#btnAdd').off('click.tbody').on('click', function () {
            var tr = [];
            var $nameVal = $('#txtNameI')
            var $genreVal = $('#genreSelect').find('option:selected');
            tr.push('<tr><td><button>Delete</button></td><td>');
            tr.push($nameVal.val());
            tr.push('</td><td>');
            tr.push($genreVal.text());
            tr.push('</td></tr>');
            $('#tbody').append(tr.join(''));
            $nameVal.val('');
            return false;
        });
    };
    //clean onfocus
    var cleanFocus = function () {
        $('#txtName, #txtAge').off('focus').on('focus', function () {
            $(this).siblings('label').text('');
            return false;
        });
    };
    //Save Action
    var saveAction = function () {
        $('#btnDone').off('click.btnDone').on('click.btnDone', function () {
            var $txtName = $('#txtName');
            var $txtAge = $('#txtAge');
            if (!$txtName.val()) {
                $('#msj1').text('The Name is required').show().addClass('block');
            }
            else if (!$txtAge.val()) {
                $('#msj2').text('The Age is required').show().addClass('block');
            }
            else if (!justNbrs($txtAge)) {
                $('#msj2').text('Please enter just Numbers').show().addClass('block');
            }
            else {
                $('#msj1').text('').removeClass('block').hide();
                $('#msj2').text('').removeClass('block').hide();
                $('#myForm').submit();
            }
            return false;
        });
    };
    // Public API - metodos publicos
    return {
        init: initialize
    };
})();
