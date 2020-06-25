/* 2. Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : ​https://www.npmjs.com/package/fasam-imc-calc */

let rs = require('readline-sync')
let calculoDoIMC = require('fasam-imc-calc')

let peso = rs.questionFloat('\nInsira o o peso: ')
let altura = rs.questionFloat('Insira a altura: ')

const imc = new calculoDoIMC();
let resultado = imc.calc(peso, altura)

console.log(`\nIMC: ${resultado}`)


