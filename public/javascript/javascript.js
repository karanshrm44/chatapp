//var socket=io();
var socket = io.connect();

$(document).ready(function()
{
    socket.on('connect',function()
{
    nickname=prompt("What is your name");
    socket.emit('join',nickname);

});


$('form').on('submit',function()
{
    msg=$('#m').val();
    socket.emit('message',msg);
    $('#m').val('');
    return false;

});
socket.on('convomsg',function(msg)
{
   
        $('#messages').append($('<li>').text(msg));
    
});



});