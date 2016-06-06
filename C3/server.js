var mongo = require('mongodb').MongoClient,
	client = require('socket.io').listen(8080).sockets;

client.on('connection',function(socket){
	console.log('someone has connected');
});