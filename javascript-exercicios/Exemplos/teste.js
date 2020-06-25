// 1 == '1'
// console.log(1 == true)
// console.log(1 ==true)
// console.log(Boolean(1))
// console.log(!Boolean(0))
// console.log(Boolean('a'))


let alunos = [
    { nome: 'Joana', nota1: 7, nota2: 9, nota3: 5 },
    { nome: 'Evelyn', nota1: 5, nota2: 9, nota3: 10 },
];


for (let i = 0; i < alunos.length; i++) {
    let media = ( alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3 ) / 3;
    console.log('Nome: ' + alunos[i].nome + '. Média: ' + media);   
}

carro = "monza"

console.log(typeof(carro))
