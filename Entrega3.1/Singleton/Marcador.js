
class Marcador {
    constructor(jocs, jugador) {
        this.jocs = jocs;
        this.jugadors = jugador;
        if (typeof Marcador.instance === 'object') {
            return Marcador.instance;
        }
        Marcador.instance = this;
        return this;
    }
    mostrarPunts(jugador, joc) {
        
        console.log(`${jugador.nom} te ${jugador.punts} punts en el joc ${joc}`);
    }
}
module.exports = Marcador; 
