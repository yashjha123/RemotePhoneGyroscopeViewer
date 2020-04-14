var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()


app1 = https.createServer({
  key: fs.readFileSync('server/server.key'),
  cert: fs.readFileSync('server/server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

var io = require('socket.io')(app1);
// var socket = io.connect('https://localhost', {secure: true});

app.get('*', function(req, res){
  res.sendFile(__dirname + req.url);
});

io.on('connection',function(socket){
	console.log("New User Connected!")

	socket.on('news', (data) => {
  		console.log(data);
	});
	socket.on('data', (data) => {
		// phone = socket
		io.to('computer').emit('rotation',data);
		// if(computer!=undefined){
		// 	computer.emit('rotation',phone);
		// }
  		// console.log(data);
	});
	socket.on('send',(data) =>{
		socket.join('computer');
		// computer = socket
  		// console.log(data);
	});
	socket.on('disconnect',function(){
		console.log("New User is now disconnected")
	})
});


// app.listen(80,'0.0.0.0', function(){
//   console.log('listening on *:80');
// });