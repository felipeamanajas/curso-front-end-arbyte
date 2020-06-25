// 4. Faça um algoritmo que receba um número e diga se ele é primo ou não

let rs = require('readline-sync')
let ePrimo = require('isprime')

let entrada = rs.questionInt('Insira um numero: ')

let resultado = ePrimo(entrada)

if (resultado == true) {
    console.log('é primo')
} else {
    console.log('não é primo')
}

