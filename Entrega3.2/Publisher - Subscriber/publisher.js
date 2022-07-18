const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, connection) {
    if(err){
        throw err;
    }
    connection.createChannel(function(err, channel) {
        if(err){
            throw err;
        }
        let queque = 'hello';
        let msg = 'Hello World!';
    
    channel.assertQueue(queque,{
        durable: false
    });
    channel.sendToQueue(queque, Buffer.from(msg));
    console.log(` [x] Enviat ${msg}`);
    });
});

setTimeout(function() {
    connection.close();
    process.exit(0);
}, 500);


