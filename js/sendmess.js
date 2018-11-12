
function receive() {
    var now = new Date();
    $('#show_mess').append("<br/>"
        + "<div id='form_nhan'>" +
        "<div id='form_avatar_nhan'>" +
        "<img id='img_nhan' src='https://ptetutorials.com/images/user-profile.png' alt='me:'>" + "</div>" +
        "<div id='form_mess_nhan'>" +
        "<div id='mess_nhan'>" + $('#text').val() + "</div>" +
        "<div id='gettime'>" + now.getHours() + 'h:' + now.getMinutes() + 'p:' + now.getSeconds() + 's' + "</div>" +
        "</div>" +
        "</div>");
    $("#text").val('');
};

//send by click
function send() {
    var now = new Date();
    $('#show_mess').append("<div id='form_gui'>" +
        "<div id='form_avatar_gui'>" +
        "<img id='img_gui' src='https://ptetutorials.com/images/user-profile.png' alt='me:'>" + "</div>" +
        "<div id='form_mess_gui'>" +
        "<div id='mess_gui'>" + $('#text').val() + "</div>" +
        "<div id='gettime'>" + now.getHours() + 'h:' + now.getMinutes() + 'p:' + now.getSeconds() + 's' + "</div>" +
        "</div>" +
        "</div>");
    $("#text").val('');
};

//send bang enter
$('#text').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        var now = new Date();
        $('#show_mess').append("<div id='form_gui'>" +
            "<div id='form_avatar_gui'>" +
            "<img id='img_gui' src='https://ptetutorials.com/images/user-profile.png' alt='me:'>" + "</div>" +
            "<div id='form_mess_gui'>" +
            "<div id='mess_gui'>" + $('#text').val() + "</div>" +
            "<div id='gettime'>" + now.getHours() + 'h:' + now.getMinutes() + 'p:' + now.getSeconds() + 's' + "</div>" +
            "</div>" +
            "</div>");
        $("#text").val('');
    }
});
/*
//window.onload=toBottom;
$('#show_mess').onload=toBottom;
function toBottom()
{
alert("Scrolling to bottom ...");
//window.scrollTo(0, document.body.scrollHeight);
$(document).scrollTo('#show_mess');
}*/
$("#show_mess").scrollTop($("#show_mess")[0].scrollHeight);
