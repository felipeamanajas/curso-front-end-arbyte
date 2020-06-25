/* 3. Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o
arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.
Após isso imprima os valores lidos do json do arquivo.

OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo
mudados a cada execução. */

const fs = require('fs')

let caminhoDoArquivo = './data/carro.json'
let carroDesSerializado = fs.readFileSync(caminhoDoArquivo)
let carro = JSON.parse(carroDesSerializado)
console.log(carro)