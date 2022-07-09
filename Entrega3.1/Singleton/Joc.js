const Marcador = require('./Marcador');
const Jugador = require('./Jugador');

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
        let ganador = '';
        let punts = 0;
        for (let jugador in this.marcador.slot[joc]) {
            if (this.marcador.slot[joc][jugador] > punts) {
                ganador = jugador;
                punts = this.marcador.slot[joc][jugador];
            }
        }
        console.log(`El ganyador del joc ${joc} és ${ganador}`);
    }
}
module.exports = Joc;
