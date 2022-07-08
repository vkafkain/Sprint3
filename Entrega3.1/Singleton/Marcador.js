
class Marcador {
    constructor() {
        this.slot = [];
        
        if (typeof Marcador.instance === 'object') {
            return Marcador.instance;
        }
        Marcador.instance = this;
        return this;
    }
    
/*     mostrarPunts(jugador, joc) {
        console.log(`${jugador.nom} te ${jugador.punts} punts en el joc ${joc}`); */
}
module.exports = Marcador; 
