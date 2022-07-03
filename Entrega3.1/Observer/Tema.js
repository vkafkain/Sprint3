const Usuari = require('./Usuari')

class Tema {
    constructor(nom){
        this.nom = nom;
        this.usuaris = [];
    }

    suscribe(element) {
        this.usuaris.push(element);
    }

    unsuscribe(element) {
        this.usuaris = this.usuaris.filter(suscriber => suscriber !== element);
    }

    notificacioSuscriptors(missatge) {
        this.ususaris.forEach(usuaris => usuaris(missatge));
    }
}

module.exports = Tema;