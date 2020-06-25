/* Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. */

//--------------------------------------------------------------------------------------


//criar uma class com nome, modelo e cor no constructor e inicializar as propriedades com estes valores

var rs = require("readline-sync");

nome = rs.question("Insira o nome do carro")
modelo = rs.question("Insira o modelo do carro")
cor = rs.question("Insira o cor do carro")

class Carro0 {
    constructor(nome, modelo, cor){
        this.nome = nome;
        this.modelo = modelo;
        this.cor = cor;
    }
}

var Carro0 = new Carro0("Carro");
console.log(carro.nome)


//pedir para o usuário cadastrar um carro

//pedi para o usuário o segundo carro

//comparar os carros 
