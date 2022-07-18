const amqp = require('amqplib/callback_api');

class Publisher {

    enviarMissatge(msg) {
        amqp.connect('amqp://localhost', function(err, connection) {
        if(err){
            throw err;
        }
        connection.createChannel(function(err, channel) {
            if(err){
                throw err;
            }
            let queue = 'hello';
                
        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(` [x] Enviat %s`, msg);
            });
        })
    }
}

module.exports = Publisher

