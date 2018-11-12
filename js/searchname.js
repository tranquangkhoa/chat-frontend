$(document).ready(function () {
    $('#textsearch').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#user').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) - 1)
        });
    });
});