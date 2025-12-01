//Usando um laço for, crie um programa que transforme um número binário em decimal.
const prompt = require('prompt-sync')();
const numBinario = prompt("Digite um número binário: ");
let numDecimal = 0;
const tamanho = numBinario.length;


for (let i = 0; i < tamanho; i++) {
  const digito = parseInt(numBinario[tamanho - 1 - i]);
  const potenciaDe2 = Math.pow(2, i);
  if (digito === 1) {
    numDecimal += potenciaDe2;
  }
}
console.log(`O número binário ${numBinario} em decimal é: ${numDecimal}`);