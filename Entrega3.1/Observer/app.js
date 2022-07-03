const Usuari = require('./Usuari')
const Tema = require('./Tema')

eventEmitter.on('start', () => {
    console.log('started')
})

eventEmitter('start')


