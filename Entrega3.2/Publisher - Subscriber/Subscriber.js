const amqp = require('amqplib/callback_api');

class Subscriber {

    rebreMissatge() {
        amqp.connect('amqp://localhost', function(err, connection) {
            if(err){
                throw err;
            }
            connection.createChannel(function(err, channel){
                if(err){
                    throw err;
                }
                
                let queue = 'cola1';

                channel.assertQueue(queue, {
                    durable: false
                });

                console.log(" [*] Esperant missatges en %s. Per sortir introdueix CTRL+C", queue);

                channel.consume(queue, function(msg) {
                    console.log(" [x] Rebut %s", msg.content.toString());
                },  {
                    noAck: true
                });
            });
        });
    }
}

const valeria = new Subscriber();
valeria.rebreMissatge('cola1');