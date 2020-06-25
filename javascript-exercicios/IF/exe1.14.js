/* // Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B. */

var rs = require("readline-sync")

var numeroA = rs.questionInt ("Insira primeiro numero: ")
var numeroB = rs.questionInt ("Insira o segundo numero: ")


if(numeroA >= numeroB && numeroB != 0) {
    console.log(`O número ${numeroA} é divisível pelo número ${numeroB}`)   
} else {
    console.log(`O número ${numeroA} não é divisível pelo número ${numeroB}`)   
}
