const Marcador = require('./Marcador');

class Joc{
    constructor(nom) {
        this.nom = nom;
        this.jugadors = [];
        this.marcador = new Marcador();
    }

    addJugador(jugador) {
        this.jugadors.push(jugador);
    };
    
    addPoints(jugador, punts) {
        jugador.punts = jugador.punts + punts;
    }
    
    removePoints(jugador, punts) {
        jugador.punts = jugador.punts - punts;
    }
};

module.exports = Joc;
