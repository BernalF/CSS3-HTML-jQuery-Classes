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
        editHandler();
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
        $('tbody').off('click.tbody', 'button[del]').on('click.tbody', 'button[del]', function (e) {
            e.preventDefault();
            $(this).closest('tr').remove();
            e.stopPropagation();
        });
    };
    //edit Handler
    var editHandler = function () {
        $('tbody').off('click.tbody', 'button[edit]').on('click.tbody', 'button[edit]', function (e) {
            e.preventDefault();

            var $self = $(this);
            var $spanName = $self.closest('tr').find('td').find('span[name]');
            var $spanGenre = $self.closest('tr').find('td').find('span[genre]');
            if ($spanName.is(':visible')) {
                $spanName.hide().siblings('input').show().val($spanName.text());
                $spanGenre.hide().siblings('select').show().find('option[value=' + $spanGenre.attr('sval') + ']').attr('selected', 'selected');
                $self.attr('value', 'Save').text('Save');
            }
            else {
                $self.attr('value', 'Edit').text('Edit');
                $spanName.show().text($spanName.siblings('input').val()).siblings('input').hide();
                $spanGenre.show().text($spanGenre.siblings('select').find('option:selected').text()).siblings('select').hide();
            }
            e.stopPropagation();
        });
    };
    //Add to grid
    var addAction = function () {
        $('#btnAdd').off('click.tbody').on('click', function () {
            var tr = [];
            var $nameVal = $('#txtNameI')
            var $genreVal = $('#genreSelect').find('option:selected');
            tr.push('<tr><td><button edit>Edit</button></td><td><button del>Delete</button></td><td>');
            tr.push('<span name>' + $nameVal.val() + '</span><input style="display:none;" type="text" name/>');
            tr.push('</td><td>');
            tr.push('<span genre sval="');
            tr.push($genreVal.val());
            tr.push('">');
            tr.push($genreVal.text());
            tr.push('</span><select style="display:none;width: 90px;"><option value="M">Male</option><option value="F">Female</option></select>');
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
