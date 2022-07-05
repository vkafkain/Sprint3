const Calculadora = require('./Calculadora')

const fs = require('fs');

const calculadora = new Calculadora

const input = JSON.parse(fs.readFileSync('./input.json', 'utf8'))

console.log(`El resultado de la suma és ${calculadora.suma(input)}`);
console.log(`El resultado de la resta és ${calculadora.resta(input)}`);
console.log(`El resultado de la multiplicació és ${calculadora.multiplicacio(input)}`);

