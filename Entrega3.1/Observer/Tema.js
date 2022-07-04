const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

class Tema extends EventEmitter {
    constructor(nom){
        super();
        this.nom = nom;
    }
    suscribe(usuari){
        this.nom.push(usuari);
    }

    missatgeRebut(missatge){
        this.emit(this.nom, missatge);
    }
}

module.exports = Tema;