const Calculadora = require('./Calculadora')

const fs = require('fs');

const calculadora = new Calculadora

const input = JSON.parse(fs.readFileSync('./input.json', 'utf8'))

console.log(calculadora.suma(input));