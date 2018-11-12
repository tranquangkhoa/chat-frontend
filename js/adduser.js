var ten = $('#textadduser').val();
function add() {

    $('#list_user').append("<div id='user'>" + $('#textadduser').val() + "</div>");
    $('#textadduser').val('');
    $('#user').click(function () {
        $('#showmess').fadeToggle('linear');
    });
};


$('#textadduser').keypress(function (event) {
    var ten = $('#textadduser').val();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $('#list_user').append("<div id='user'>" + ten + "</div>");
        $('#textadduser').val('');
    }
});
