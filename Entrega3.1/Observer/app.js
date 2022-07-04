const Usuari = require('./Usuari')
const Tema = require('./Tema')

const tema1 = new Tema('Cinema');
const tema2 = new Tema('Música');

const user1 = new Usuari('Juan');
const user2 = new Usuari('Pedro');
const user3 = new Usuari('Maria');
const user4 = new Usuari('Pepito');

tema1.suscribe(user1);
/* user2.suscribe(tema1);
user3.suscribe(tema2);
user4.suscribe(tema2); */

user1.notificar(tema1, `Hola, molt interesant la ultima pelicula de Gru`);
user3.notificar(tema2, `Comparteixo l'últim disc que he escoltat,The Dark Side of the Moon de Pink Floyd`);