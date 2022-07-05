const EventEmitter = require("events");

class Tema extends EventEmitter {
    constructor(nom){
        super();
        this.nom = nom;
        this.usuaris = [];
    };
    suscribe(usuari){
        this.usuaris.push(usuari);
    };

    missatgeNou(missatge){
        this.usuaris.forEach(usuari => {
            this.emit(usuari.nom, missatge);
            console.log(`${usuari.nom}:te un nou missatge al tema ${this.nom}`)
        })
    };
};

module.exports = Tema;