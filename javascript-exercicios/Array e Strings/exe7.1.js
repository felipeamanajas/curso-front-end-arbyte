/* 1.	(OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. 
Primeiro para o jogador A e depois para o jogador B. Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números 
iguais que o jogador A e B colocaram em comum.

EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3 
Esse é um problema classicamente conhecido como Inner Join */

let rs = require("readline-sync")

let jogador = []
let pontuacao = []

for (let i = 0; i < 2; i++) {
    jogador.push(rs.question("INSIRA O NOME DO JOGADOR: "))

    for (let i = 0; i < 5; i++) {
        pontuacao.push(rs.questionFloat("\nINSIRA O AS PONTUACOES: "))
        console.log(pontuacao)
    }
}

let nomePrimeiroJogador = jogador[0]
let pontuacaoPrimeiroJogador = pontuacao.splice(0, 5)
console.log(`JOGADOR ${nomePrimeiroJogador} OBTEVE: ${pontuacaoPrimeiroJogador} \n`)

let nomeSegundoJogador = jogador[1]
let pontuacaoSegundoJogador = pontuacao.splice(0, 5)
console.log(`JOGADOR ${nomeSegundoJogador} OBTEVE: ${pontuacaoSegundoJogador} \n`)

var pontuacaoEmComum = []

pontuacaoPrimeiroJogador.filter((i) => {
    if (pontuacaoSegundoJogador.includes(i)) {
        pontuacaoEmComum.push(i)
    }
})
console.log(`PONTUAÇÃO EM COMUM: ${pontuacaoEmComum} \n`)