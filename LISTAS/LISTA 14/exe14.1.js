/* (OBRIGATORIO)​ Solicite ao usuário para inserir yes ou no
Após isso utilize a API ​https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no
No final imprima se o usuário acertou ou não */

const axios = require("axios")
const rs = require("readline-sync")

var url = 'https://yesno.wtf/api'
axios.get(url)
    .then((retorno) => {
        var link = retorno.data
        resposta = link.answer
        var digaSimOuNao = rs.question("Say yes or no")
        if (digaSimOuNao == resposta) {
            console.log("You Win")
        } else console.log("You Lose")

    })