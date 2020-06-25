var rs = require("readline-sync");

var numero = 0;
var arrayDeNumeros = [];
var soma = 0;
function numeroPerfeito() {
    numero = rs.questionInt("Insira um numero")
    var cont = 0
    while (cont < numero) {
        if (numero % cont == 0) {
            arrayDeNumeros.push(cont)
        }
        cont++
        }
} for (var i = 0; i < arrayDeNumeros.length; i++) {
    soma = soma + arrayDeNumeros[i]
} if (soma == numero) {
    console.log(`Este e um número perfeito pois a soma de ${arrayDeNumeros} resulta em ${numero}`)
} else console.log("O numero não e perfeito")
console.log(arrayDeNumeros)

numeroPerfeito()



// Faça uma função que receba um número e retorne se é perfeito ou não.
// Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
// utilizando a função e imprimindo o resultado no final.
// OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
// igual a ele mesmo
// Exemplo 6 possui os seguintes divisores
// 1 + 2 + 3 = 6
