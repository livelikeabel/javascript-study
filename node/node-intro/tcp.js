var net = require('net');
var server = net.createServer(function(c){
	console.log('client connected');
	c.on('data', function(d){
		console.log('data received: ' + d.toString());
	});
	c.on('end', function(){
		console.log('client disconnected');
	});
});

server.listen(3000, function(){
	console.log('server started');
});
