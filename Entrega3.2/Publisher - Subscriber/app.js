const Publisher = require('./Publisher');
const Subscriber = require('./Subscriber');

const claudia = new Publisher();
claudia.enviarMissatge(`Estic enviant un missatge per testejar Rabbitmq`);
claudia.enviarMissatge(`Perdó que no havia saludat, bon dia!!`);

const valeria = new Subscriber();
valeria.rebreMissatge('cola1');