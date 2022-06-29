class Marcador {
    constructor() {
        this.jugadors = [];
        this.puntuacions = [];
        
        if (typeof Marcador.instance === 'object') {
            return Marcador.instance;
        }
        Marcador.instance = this;
        return this;
    }
    mostrarPunts(jugador) {
        console.log(`${jugador.nom} te ${jugador.punts} punts.`);
    }
    jugadorMesPunts() {
        let jugadorMesPunts = this.jugadors[0];
        for (let i = 0; i < this.jugadors.length; i++) {
            if (jugadorMesPunts.punts < this.jugadors[i].punts) {
                jugadorMesPunts = this.jugadors[i];
            }
            return console.log(`El jugador ${jugadorMesPunts} és el ganyador.`);
        }
    }
}

module.exports = Marcador; 
