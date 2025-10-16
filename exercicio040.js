//Usando um laço while, crie um programa que inverta uma string.
const prompt = require('prompt-sync')();
let string = prompt('Digite uma palavra aleatória: ')

while(true){
  const inversão = string.split('').reverse().join('')
  console.log(inversão)
  break;
}