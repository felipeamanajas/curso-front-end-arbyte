var rs = require("readline-sync");

class alunos {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
function cadastrarAluno() {
    var primeiroAluno = new Aluno(
        this.nome = rs.question('Insira o nome do aluno: '),
        this.idade = rs.questionInt('Insira a idade do aluno: '),
    )
    console.log(primeiroAluno)
    
    var segundoAluno = new Aluno(
        this.nome = rs.question('Insira o nome do aluno: '),
        this.idade = rs.questionInt('Insira a idade do aluno: '),
    )
    console.log(segundoAluno)
    
    var terceiroAluno = new Aluno(
        this.nome = rs.question('Insira o nome do aluno: '),
        this.idade = rs.questionInt('Insira a idade do aluno '),
    )
    console.log(terceiroAluno)

    var maiorIdade = [primeiroAluno.idade, segundoAluno.idade,terceiroAluno.idade];
        maiorIdade.reduce(function(a,b,c)
        console.log(maiorIdade)
}


cadastrarAluno()



/*Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
um possuir maior idade apresentar o nome de todos os que possuem maior idade. 

Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
e inicialize essas variáveis nas propriedades do objeto.

Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
Crie o objeto do aluno e adicione em um array.

Repita esse passo para os outros alunos.

Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
com maior idade e imprimir seus nomes */