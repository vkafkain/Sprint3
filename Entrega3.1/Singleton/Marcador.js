class Marcador {
    constructor(punts) {
        this.punts = punts;

        if (typeof Marcador.instance === 'object') {
            return Marcador.instance;
        }
        Marcador.instance = this;
        return this;
        }
}