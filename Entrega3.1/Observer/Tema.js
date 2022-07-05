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

    missatgeNou(missatge){
        this.emit(this.nom, missatge);
        this.usuaris.forEach(usuari => {
            eventEmitter.emit(usuari.nom, missatge);
            console.log(`${usuari.nom}:te un nou missatge al tema ${this.nom}`)
        });
    } 
}

module.exports = Tema;