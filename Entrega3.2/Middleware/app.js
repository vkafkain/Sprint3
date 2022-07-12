const Calculadora = require('./Calculadora');
const Middleware = require('./Middleware');

const input = require('./input.json')

const calculadora = new Calculadora();
const middleware = new Middleware(calculadora);

middleware.use(function (info, next){
    info.num1 = info.num1 ** 2
    console.log(`El cuadrat de ${input.num1} i ${input.num2} és igual a ${input.num1 ** 2}, ${input.num2 ** 2}`); 
    next();
});

middleware.use(function (info, next) {
    info.num1 = info.num1 ** 3
    console.log(`El cub de ${input.num1} i ${input.num2} és igual a ${input.num1 ** 3}, ${input.num2 ** 3}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`La divisió de ${input.num1} entre ${input.num2} és igual a ${input.num1 / input.num2 }`);
    next();
});

middleware.run(calculadora.suma(input));









/* console.log('\x1b[36m ********INFORMACIÓ JSON******** \x1b[0m');
console.log(`Els números que rebem des del JSON són el ${input.num1} i ${input.num2}`);
console.log('\x1b[35m ********OPERACIONS BÀSIQUES******** \x1b[0m');
console.log(`El resultat de la suma és ${calculadora.suma(input)}`);
console.log(`El resultat de la resta és ${calculadora.resta(input)}`);
console.log(`El resultat de la multiplicació és ${calculadora.multiplicacio(input)}`);
console.log('\x1b[34m ********OPERACIONS MW******** \x1b[0m');
console.log(`El resultat de la suma dels quadrats és ${}`);

 */