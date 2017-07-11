var socket=io();
$(document).ready(function()
{
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