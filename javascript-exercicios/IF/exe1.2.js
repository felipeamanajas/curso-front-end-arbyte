/* 2. Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar. */

var readlineSync = require('readline-sync');

var numero = readlineSync.questionInt("Informe um numero, e descubra se ele e par ou impar")

if(numero % 2 == 0){
    console.log("O numero e PAR")
}else {
    console.log("O Numero e IMPAR")
}