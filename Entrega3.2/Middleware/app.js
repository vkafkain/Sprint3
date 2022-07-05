const Calculadora = require('./Calculadora')

const fs = require('fs');

const calculadora = new Calculadora

const input = JSON.parse(fs.readFileSync('./input.json', 'utf8'))

console.log(`El resultat de la suma és ${calculadora.suma(input)}`);
console.log(`El resultat de la resta és ${calculadora.resta(input)}`);
console.log(`El resultat de la multiplicació és ${calculadora.multiplicacio(input)}`);

