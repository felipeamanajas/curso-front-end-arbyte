// 5. Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : ​https://www.npmjs.com/package/age-calculator

let rs = require('readline-sync')
let age = require('age-calculator')

let {AgeFromDateString, AgeFromDate} = require('age-calculator')
let data = rs.question("Digite uma datano formato AAAA-MM-DD: ")
let idade = new AgeFromDateString(data)

console.log(`\n${idade.age}`)  