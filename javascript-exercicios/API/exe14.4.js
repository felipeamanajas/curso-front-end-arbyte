/* (OBRIGATÓRIO)​Faça um algoritmo que receba uma CEP e diga qual é o endereço
completo (Cidade, rua, estado) deste CEP.
Utilize a API : ​https://api.postmon.com.br/v1/cep/​{CEP}
Exemplo CEP :​https://api.postmon.com.br/v1/cep/89010020 */

const axios = require("axios")
const rs = require("readline-sync")

var cep = rs.question('Insira o numero do CEP: ')
var url = ('https://api.postmon.com.br/v1/cep/'+cep) 

axios.get(url)
    .then ((retorno) => {
        var api = retorno.data
        
            console.log("\n")
            let logradouro = api.logradouro; console.log(logradouro)
            let bairro = api.bairro; console.log(bairro)
            let cidade = api.cidade; console.log(cidade)
            let estado = api.estado; console.log(estado)
            console.log("\n")

        }
)