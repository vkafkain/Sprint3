const Marcador = require('./Marcador');

class Joc{
    constructor() {
        this.marcador = new Marcador(); 
    };
    
    afegirJoc(nom) {
        this.marcador.slot[nom] = {};
    }

    afegirJugador(joc, jugador) {
        this.marcador.slot[joc][jugador.nom] = 0;
    }

    afegirPunts(joc, jugador, punts) {
        this.marcador.slot[joc][jugador.nom] += punts;
    }

    treurePunts(joc, jugador, punts) {
        this.marcador.slot[joc][jugador.nom] -= punts;
    }

    mostrarPunts(joc) {
        for (let jugador in this.marcador.slot[joc]) {
            console.log(`${jugador} te ${this.marcador.slot[joc][jugador]} punts en el joc ${joc}`);
        }
    }

    mostrarGuanyador(joc) {
        let guanyador = '';
        let punts = 0;
        for (let jugador in this.marcador.slot[joc]) {
            if (this.marcador.slot[joc][jugador] > punts) {
                guanyador = jugador;
                punts = this.marcador.slot[joc][jugador];
            }
        }
        console.log(`El guanyador del joc ${joc} és la ${guanyador} amb ${punts} punts.`);
    }
}
module.exports = Joc;
