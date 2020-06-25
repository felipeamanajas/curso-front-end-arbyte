/* Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
qual é a menor idade. */ 

var rs = require('readline-sync')

var idade = 0
contador = 1

while (contador <= 8){
    idade = rs.questionInt(`Insira a ${contador}a idade: `)
    if (contador < menorIdade) {
        var menorIdade = idade
    }
    contador++
}

console.log(`Menor idade: ${idade}`)
