/* 2. Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
em formato JSON.
Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
métodos da biblioteca ‘fs’ para salvar o arquivo.
Salve o json como ‘carro.json’ */

const rs = require('readline-sync')
const fs = require('fs')

let carro = {}

carro.marca = rs.question('Insira a marca desejada: ')
carro.modelo = rs.question('Insira o modelo desejado: ')
carro.cor = rs.question('Insira a cor desejada: ')

console.log('o carro criado é:', carro)

let carroSerializado = JSON.stringify(carro)
let caminhoDoArquivo = './data/carro.json'
fs.writeFileSync(caminhoDoArquivo, carroSerializado)