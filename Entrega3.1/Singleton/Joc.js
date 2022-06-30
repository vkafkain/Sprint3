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
    jugadorGuanyador() {
        let guanyador = 0;
        let nomGuanyador = null;
        for (let i = 0; i < this.jugadors.length; i++) {
            if (this.jugadors[i].punts > guanyador) {
                guanyador = this.jugadors[i].punts;
                nomGuanyador = this.jugadors[i].nom;
            }
        }
        this.marcador.puntuacions = guanyador;
        this.marcador.guanyador = nomGuanyador;
        
        console.log(`El jugador ${this.marcador.guanyador} ha guanyat el joc ${this.nom} amb ${this.marcador.puntuacions} punts.`);
    }
}

module.exports = Joc;
