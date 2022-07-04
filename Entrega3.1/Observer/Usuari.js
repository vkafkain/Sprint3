class Usuari {
    constructor (nom) {
        this.nom = nom;
    }
    suscribe(tema) {
        tema.suscribe(this);
    }
    notificar(tema, missatge) {
        console.log(`${this.nom}: ${missatge} al tema ${tema.nom}`);
        tema.missatgeRebut
    }
};
module.exports = Usuari;