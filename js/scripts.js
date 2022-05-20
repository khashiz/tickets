jQuery(document).ready(function () {
    jQuery('.birthdate').datepicker({
        dateFormat: 'yy/mm/dd',
        changeMonth: true,
        changeYear: true,
        maxDate: '-17y'
    });
});