// Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.
function parOuImpar(a){
  if(a % 2 == 0){
    console.log(`O número ${a} é par`)
  } else {
    console.log(`O número ${a} é ímpar`)
  }
}
parOuImpar(5)