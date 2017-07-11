var express=require('express');
var app=express();
var https=require('http').Server(app);
var io=require('socket.io')(https);
var ejs=require('ejs');
var path=require('path');



var route=require('./routes/index');
app.use('/',route);

//view Engine
//app.set('views',path.join(__dirname +'views'));
app.set('view engine','ejs');


//static function
app.use(express.static(path.join(__dirname,'public')));




// Socket Programming
io.on('connection',function(socket)
{
    console.log("a user is connected");
    socket.on('message',function(msg)
    {
        console.log("message:" + msg);
        io.emit('convomsg',msg);
    });
});




https.listen(8081,function()
{
    console.log("Server is Started");
});
