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
        reloadMarcador (){
            this.jugadors = [];
            this.puntuacions = [];
        }
        mostrarMarcador (){
            let marcador = "";
            for (let i = 0; i < this.jugadors.length; i++) {
                marcador += this.jugadors[i] + ": " + this.puntuacions[i] + "\n";
            }
            return marcador;
        }
        mostrarGuanyador (){
            let ganador = "";
            let max = 0;
            for (let i = 0; i < this.puntuacions.length; i++) {
                if (this.puntuacions[i] > max) {
                    max = this.puntuacions[i];
                    ganador = this.jugadors[i];
                }
            }
            return console.log(ganador, max);
        }
}

module.exports = Marcador;
