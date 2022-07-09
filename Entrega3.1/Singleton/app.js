const Jugador =  require("./Jugador");
const Joc =  require("./Joc");
const Marcador = require("./Marcador");

let jugador1 = new Jugador('barbara');
let jugador2 = new Jugador('magi');
let jugador3 = new Jugador('dwarfguin');
let jugador4 = new Jugador('chaman');

const joc = new Joc();

joc.afegirJoc('diabloII');
joc.afegirJoc('diabloIII');
joc.afegirJoc('diabloIV');  

joc.afegirJugador('diabloII', jugador1);
joc.afegirJugador('diabloII', jugador2);
joc.afegirJugador('diabloII', jugador3);
joc.afegirJugador('diabloII', jugador4);

joc.afegirJugador('diabloIII', jugador1);
joc.afegirJugador('diabloIII', jugador2);
joc.afegirJugador('diabloIII', jugador3);
joc.afegirJugador('diabloIII', jugador4);

joc.afegirJugador('diabloIV', jugador1);
joc.afegirJugador('diabloIV', jugador2);
joc.afegirJugador('diabloIV', jugador3);
joc.afegirJugador('diabloIV', jugador4);

joc.afegirPunts('diabloII', jugador1, 13);
joc.afegirPunts('diabloII', jugador2, 21);
joc.afegirPunts('diabloII', jugador3, 33);
joc.afegirPunts('diabloII', jugador4, 44);

joc.afegirPunts('diabloIII', jugador1, 99);
joc.afegirPunts('diabloIII', jugador2, 88);
joc.afegirPunts('diabloIII', jugador3, 77);
joc.afegirPunts('diabloIII', jugador4, 66);

joc.afegirPunts('diabloIV', jugador1, 55);
joc.afegirPunts('diabloIV', jugador2, 44);
joc.afegirPunts('diabloIV', jugador3, 33);
joc.afegirPunts('diabloIV', jugador4, 22);

joc.treurePunts('diabloII', jugador1, 9);
joc.treurePunts('diabloII', jugador2, 3);
joc.treurePunts('diabloII', jugador3, 13);
joc.treurePunts('diabloII', jugador4, 14);

joc.treurePunts('diabloIII', jugador1, 1);
joc.treurePunts('diabloIII', jugador2, 2);
joc.treurePunts('diabloIII', jugador3, 3);
joc.treurePunts('diabloIII', jugador4, 4);

joc.treurePunts('diabloIV', jugador1, 5);
joc.treurePunts('diabloIV', jugador2, 6);
joc.treurePunts('diabloIV', jugador3, 7);
joc.treurePunts('diabloIV', jugador4, 8);


console.log(`********PUNTUACIONS DIABLO II********`);
joc.mostrarPunts('diabloII');

console.log(`********PUNTUACIONS DIABLO III********`);
joc.mostrarPunts('diabloIII');

console.log(`********PUNTUACIONS DIABLO IV********`);
joc.mostrarPunts('diabloIV');

console.log(`********GANYADOR DIABLO II********`);
joc.mostrarGuanyador('diabloII');

console.log(`********GANYADOR DIABLO III********`);
joc.mostrarGuanyador('diabloIII');

console.log(`********GANYADOR DIABLO IV********`);
joc.mostrarGuanyador('diabloIV');


