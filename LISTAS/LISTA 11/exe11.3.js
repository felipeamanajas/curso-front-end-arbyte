// 3. Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : ​https://www.npmjs.com/package/is-odd

let rs = require('readline-sync')
let parOuImpar = require('is-odd')

let entrada = rs.questionInt('Insira um numero: ')

let resultado = parOuImpar(entrada)

if (resultado == true) {
    console.log('é impar')
} else {
    console.log('é par')
}

