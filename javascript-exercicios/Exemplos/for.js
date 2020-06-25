// let contador = 1 // declaração varial
// while(contador <=10){ // expresão ou condição metemática
//     console.log(`contador = ${contador}`)
//     contador++ // incremento
// }

// for (let i = 1; i <= 10; i++){
//     console.log(`i = ${i}`)
// }

// // como percorrer um Array 

// const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// for (i = 0; i <notas.length; i++){
//     console.log(`nota = ${notas[i]}`)
// }


//----------------------------------------------

// const carros = [
//     { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
//     { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
//     { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
//     { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
//     { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 }
//   ]
   
//   let total = 0
   
//   for (const carro of carros) {
//     total += carro.preco
//   }
   
//   // converte o número para o padrão monetário
//   const valorFinal = Number(total).toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   })
   
//   console.log(valorFinal) // R$ 76,000.00


  //---------------------

  let alunos = [
    { nome: 'Joana', nota1: 7, nota2: 9, nota3: 5 },
    { nome: 'Evelyn', nota1: 5, nota2: 9, nota3: 10 },
    ];
  for (let i = 0; i < alunos.length; i++) {
    let media = ( alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3 ) / 3;
    console.log('Nome: ' + alunos[i].nome + '. Média: ' + media);
  }