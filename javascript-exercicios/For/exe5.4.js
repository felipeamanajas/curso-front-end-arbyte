/* Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7 */

let rs = require('readline-sync')

for(i = 1 ; i <= 5; i++) {
    
    let nomeAluno = rs.question("Insira o nome do aluno: ")
    let notaA = rs.questionFloat("Insira a nota A: ")
    let notaB = rs.questionFloat("Insira a nota B: ")

    let grauA = notaA * 0.30
    let grauB = notaB * 0.70
    let media = grauA + grauB

    console.log(`O aluno ${nomeAluno} tem uma média: ${media.toFixed(2)}`)   

}