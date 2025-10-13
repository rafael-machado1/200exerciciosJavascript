//Usando um laço for, crie um programa que calcule o fatorial de um número.
const prompt = require('prompt-sync')();
const valorInicial = parseInt(prompt('Digite um número para cálculo de fatorial: '))
let a = 1

for (let i = valorInicial; i > 1; i--){
  a = a * i
};
console.log(a)