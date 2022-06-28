const Jugador =  require("./Jugador");
const Joc =  require("./Joc");

let jugador1 = new Jugador('barbara');
let jugador2 = new Jugador('magi');
let jugador3 = new Jugador('ona');
let jugador4 = new Jugador('paula');

let joc1 = new Joc('diabloII');

//TODO afegir jugadors al joc
joc1.addJugador(jugador1);
joc1.addJugador(jugador2);
joc1.addJugador(jugador3);
joc1.addJugador(jugador4);

console.log(joc1);

//TODO començar joc

