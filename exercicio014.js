// Escreva um programa que verifica se um ano é bissexto.
let ano = parseInt(prompt('Digite um ano para descobrir se é bissexto:'));
if(ano % 4 === 0){
  console.log('É um ano bissexto')
} else {
  console.log('Não é um ano bissexto')
}