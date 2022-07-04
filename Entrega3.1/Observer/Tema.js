const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

class Tema extends EventEmitter {
    constructor(nom){
        this.nom = nom;
        this.usuaris = [];
    }

    suscribe(usuari) {
        this.usuaris.push(usuari);
        this.emit("usuariSuscrit", usuari);
        return this;
    }

    unsuscribe(usuari) {
        const unsuscribeUsuari = this.usuaris.indexOf(usuari);
        if(unsuscribeUsuari !== -1) {
            this.usuaris.splice(unsuscribeUsuari, 1);
            this.emit('usuariUnsuscribe', usuari);
        } else {
            this.emit('errorUnsuscribeUsuari', usuari);
        }
        return this;
    }

    missatgeTema(missatge) {
        this.ususaris.forEach(usuaris => usuaris(missatge));
    }
}

module.exports = Tema;