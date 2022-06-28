class Joc{
    constructor(nom) {
        this.nom = nom;
        this.jugador = [];
        this.puntuacio = [];
    }

    addJugador(jugador) {
        this.jugador.push(jugador);
    };
    puntuacioMes(puntuacio){
        this.puntuacio.push(puntuacio);
    };
    puntuacioMenys(puntuacio){
        this.puntuacio.push(puntuacio);
    }
};

module.exports = Joc;
