/* 1. Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
objeto Carro e atribua as entradas do usuário neste objeto.
No final o programa deve imprimir as informações do carro.
Utilize a criação de objetos para resolver este problema */

const rs = require('readline-sync')

let carro = {}

carro.marca = rs.question('Insira a marca desejada: ')
carro.modelo = rs.question('Insira o modelo desejado: ')
carro.cor = rs.question('Insira a cor desejada: ')

console.log('o carro criado é:', carro)