const Jugador =  require("./Jugador");
const Joc =  require("./Joc");

let jugador1 = new Jugador('barbara');
let jugador2 = new Jugador('magi');
let jugador3 = new Jugador('dwarfguin');
let jugador4 = new Jugador('chaman');

const joc = new Joc('diabloII');
const joc2 = new Joc('diabloIII');

joc.addJugador(jugador1);
joc.addJugador(jugador2);
joc.addJugador(jugador3);
joc.addJugador(jugador4);

joc.addPoints(jugador1, 10);
joc.addPoints(jugador2, 55);
joc.addPoints(jugador3, 31);
joc.addPoints(jugador4, 94);

joc.removePoints(jugador1, 4);
joc.removePoints(jugador2, 2);
joc.removePoints(jugador3, 21);
joc.removePoints(jugador4, 34);

joc.marcador.mostrarPunts(jugador1);
joc.marcador.mostrarPunts(jugador2);
joc.marcador.mostrarPunts(jugador3);
joc.marcador.mostrarPunts(jugador4);

joc.jugadorGuanyador();




