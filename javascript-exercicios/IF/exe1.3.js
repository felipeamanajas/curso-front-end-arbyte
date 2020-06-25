/* 3 . Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
A senha válida é o número 1234.
Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha seja inválida */

var readlineSync = require('readline-sync');
const senha_correta = 1234
var senha_digitada = readlineSync.questionInt("Informe sua senha!")

if(senha_digitada == senha_correta){
    console.log("Acesso permitido")
}

else {
    console.log("Acesso negado")
}

