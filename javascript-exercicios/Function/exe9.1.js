/* Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R​3​).

Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado */

var readlineSync = require('readline-sync')
var Raio = readlineSync.questionFloat("Insira o tamanho do raio da esfera ")
var volume = 0

function calculoVolumeEsfera() {
    var volume = (4 / 3) * Math.PI * (Raio ** 3)
    return volume
}

console.log(calculoVolumeEsfera().toFixed(2) )

