const Usuari = require('./Usuari')
const Tema = require('./Tema')

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started')
})

eventEmitter('start')


