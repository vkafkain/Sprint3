const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

class Tema extends EventEmitter {
    constructor(nom){
        super();
        this.nom = nom;
        this.usuaris = [];
    }
    suscribe(usuari){
        this.usuaris.push(usuari);
    }

    missatgeRebut(missatge){
        this.emit(this.nom, missatge);
    }
}

module.exports = Tema;