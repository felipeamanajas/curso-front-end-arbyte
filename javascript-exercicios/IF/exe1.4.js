/*4. As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$
0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de
maçãs compradas, calcule e escreva o valor total da compra */

var readlineSync = require('readline-sync');

var quantidade_de_maca = readlineSync.questionInt("Informa a quantidade de macas que voce quer comprar ")

if(quantidade_de_maca < 12) {
preco = 0.30 * quantidade_de_maca

} else {
preco = 0.25 * quantidade_de_maca
}

console.log('O valor da compra e:' + preco)
