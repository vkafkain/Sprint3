const Calculadora = require('./Calculadora');
const Middleware = require('./Middleware');

const input = require('./input.json')

const calculadora = new Calculadora();
const middleware = new Middleware(calculadora);

middleware.use((data, next) => {
    data.num1 **= 2;
    data.num2 **= 2;
    console.log("primer middleware", data);
    next();
});

middleware.use((data, next) => {
    data.num1 **= 3;
    data.num2 **= 3;
    console.log("segon middleware", data);
    next();
});

middleware.use((data, next) => {
    data.num1 /= 2;
    data.num2 /= 2;
    console.log("tercer middleware", data);
    next();
});

console.log('\x1b[34m ********INFORMACIÓ JSON******** \x1b[0m');
console.log(`Els números que rebem des del JSON són el ${input.num1} i ${input.num2}`);
console.log('\x1b[34m ********OPERACIONS BÀSIQUES******** \x1b[0m');
console.log(`El resultat de la suma és ${calculadora.suma(input)}`);
console.log(`El resultat de la resta és ${calculadora.resta(input)}`);
console.log(`El resultat de la multiplicació és ${calculadora.multiplicacio(input)}`);
console.log('\x1b[34m ********OPERACIONS MW******** \x1b[0m');
console.log(`\x1b[36m SUMA ${middleware.suma(input)} \x1b[0m`);
console.log(`\x1b[31m RESTA ${middleware.resta(input)} \x1b[0m`);
console.log(`\x1b[32m MULTIPLICACIÓ ${middleware.multiplicacio(input)} \x1b[0m`);