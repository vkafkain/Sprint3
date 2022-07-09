class Marcador {
    constructor() {
        this.slot = [];
                
        if (typeof Marcador.instance === 'object') {
            return Marcador.instance;
        }
        Marcador.instance = this;
        return this;
    }
}

module.exports = Marcador; 
