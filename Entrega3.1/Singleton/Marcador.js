class Marcador {
    constructor() {
        this.puntuacions = [];
        this.jugadors = [];
        if (typeof Marcador.instance === 'object') {
            return Marcador.instance;
        }
        Marcador.instance = this;
        return this;
    }
    mostrarPunts(jugador) {
        console.log(`${jugador.nom} te ${jugador.punts} punts.`);
    }      
}
module.exports = Marcador; 
