/* 1. Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
média no final. */

// Utilize o pacote : ​https://www.npmjs.com/package/median

let rs = require('readline-sync')
let median = require('median')


let nota1 = rs.questionInt('\nInsira a primeira nota: ')
let nota2 = rs.questionInt('Insira a segunda nota: ')
let nota3 = rs.questionInt('Insira a terceira nota: ')
let nota4 = rs.questionInt('Insira a quarta nota: ')

notas = [nota1, nota2, nota3, nota4]

let resultado = median(notas)


console.log(` \nA média das notas é: ${resultado} \n `)



