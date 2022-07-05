class Usuari {
    constructor (nom) {
        this.nom = nom;
    }
    notificar(tema, missatge) {
        console.log(`${this.nom}: ${missatge} al tema ${tema.nom}`);
        tema.missatgeNou(missatge);
    }
};

module.exports = Usuari;