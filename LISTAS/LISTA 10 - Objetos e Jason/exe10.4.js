/* 4. Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,
caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para
que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, em vez de
serializar/deserializar o objeto será o array que possui os carros).
Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou
adicionar, caso o usuário escolha exibir deve ser exibido todos os carros cadastrados. */

const rs = require('readline-sync')
const fs = require('fs')

let carrosDb = fs.readFileSync('./data/carro.json')
let carro = JSON.parse(carrosDb)

while (true) {
    let entrada = rs.question(`\n ESCOLHA UMA OPCAO PARA CONTINUAR:  \n \n A - INSERIR: \n B - VISUALIZAR: \n C - SAIR:\n `)

    if (entrada == 'C') {
        break;
    } else if (entrada == 'A') {
        let carro = {}

        carro.marca = rs.question('Insira a marca desejada: ')
        carro.modelo = rs.question('Insira o modelo desejado: ')
        carro.cor = rs.question('Insira a cor desejada: ')

        console.log('CARRO INSERIDO:', carro)

        let carroSerializado = JSON.stringify(carro)
        let caminhoDoArquivo = './data/carro.json'
        fs.writeFileSync(caminhoDoArquivo, carroSerializado)



    } else if (entrada == 'B') {

        let caminhoDoArquivo = './data/carro.json'
        let carroDesSerializado = fs.readFileSync(caminhoDoArquivo)
        let carro = JSON.parse(carroDesSerializado)
        console.log('RESULTADOS ENCONTRADOS:', carro)

    } else {
        console.log("ESCOLHA UMA OPÇÃO VÁLIDA")
    }
}

//Descobrir porque está substituindo o carro anterior