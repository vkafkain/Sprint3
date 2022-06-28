class Joc{
    constructor(nom) {
        this.nom = nom;
        this.jugador = [];
        this.puntuacio = [];
    }

    addJugador(jugador) {
        this.jugador.push(jugador);
    };
    
    //TODO afegir punts al jugador

    //TODO treure punts al jugador

};

module.exports = Joc;
