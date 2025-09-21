//Escreva um programa que verifica se uma palavra é um palíndromo.
let palavra = prompt('Digite uma palavra:').toLowerCase()
let arrayComparativa = palavra.split('').reverse().join('');

if (palavra == arrayComparativa){
  console.log(`${palavra} é um palíndromo`)
} else {
  console.log(`${palavra} NÃO é um palíndromo`)
}