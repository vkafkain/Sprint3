const Calculadora = require('./Calculadora');
const Middleware = require('./Middleware');

const fs = require('fs');

const calculadora = new Calculadora;

const middleware = new Middleware(calculadora);

const input = JSON.parse(fs.readFileSync('./input.json', 'utf8'));

middleware.use((dades, next) => {
    console.log(dades);
    next();
})

console.log(`El resultat de la suma és ${calculadora.suma(input)}`);
console.log(`El resultat de la resta és ${calculadora.resta(input)}`);
console.log(`El resultat de la multiplicació és ${calculadora.multiplicacio(input)}`);





/* app.suma(data);
app.resta(data);
app.multiplicacio(data) */;
