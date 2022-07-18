const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, connection) {
    if(err){
        throw err;
    }
    
    connection.createChannel(function(err, channel){
        if(err){
            throw err;
        }
        let queque = 'hello';

        channel.assertQueue(queque, {
            durable: false
        });
    });
});