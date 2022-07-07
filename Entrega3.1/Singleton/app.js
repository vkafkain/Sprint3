const Jugador =  require("./Jugador");
const Joc =  require("./Joc");

let jugador1 = new Jugador('barbara');
let jugador2 = new Jugador('magi');
let jugador3 = new Jugador('dwarfguin');
let jugador4 = new Jugador('chaman');

const joc = new Joc();

joc.afegirJoc('diabloII');
joc.afegirJoc('starcraft');

joc.afegirJugador('starcraft', jugador2);
joc.afegirJugador('diabloII', jugador1);

/* joc.addPoints(jugador1, 13);
joc.addPoints(jugador2, 30); */

joc.marcador.mostrarPunts(jugador1, 'starcraft');
joc.marcador.mostrarPunts(jugador2, 'starcraft');


/* joc.addPoints(jugador1, 10);
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
 */
/* joc.jugadorGuanyador(); */




