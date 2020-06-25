/* (OBRIGATORIO)​Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
também seu autor
Utilize a API : ​https://breaking-bad-quotes.herokuapp.com/v1/quotes */

const axios = require("axios")

var url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"

axios.get(url)
    .then((retorno) => {
        var link = retorno.data
        
        for (const frase of link) {
          var fala = frase.quote
        }
        console.log(fala)

        for (const frase of link) {
            var autorFrase = frase.author
          }
          console.log('-', autorFrase)

    })
