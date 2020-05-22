/* (OBRIGATÓRIO) ​Escreva um programa que pedirá para o usuário dois números entre 1 e 100. 

O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. 

Caso o número seja divisível por 5, o programa deve imprimir “Pong”. Caso o número seja divisível  por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. 

Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro */

let rs = require('readline-sync')

let primeiroNumero = rs.questionInt('Insira o primeiro numero entre 1 e 100: ')
let segundoNumero = rs.questionInt('Insira o segundo numero entre 1 e 100: ')
let maiorNumero = 0
let menorNumero = 0

if (primeiroNumero > segundoNumero) {
    maiorNumero = primeiroNumero
    menorNumero = segundoNumero
} else {
    maiorNumero = segundoNumero
    menorNumero = primeiroNumero
}

if (primeiroNumero <= 100 && segundoNumero <= 100) {
    var contador = menorNumero

    while (contador <= maiorNumero) {
        if (contador % 7 == 0 && contador % 5 == 0) {
            console.log('PING PONG')

        } else if (contador % 7 == 0) {
            console.log('PING')

        } else if (contador % 5 == 0) {
            console.log('PONG')

        } else {
            console.log(contador)
        }
        contador++
    }
}