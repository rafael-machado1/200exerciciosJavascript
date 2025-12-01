/*Usando um laço while, crie um programa que determine se um número é palíndromo ou não 
(um número é palíndromo se for igual ao seu reverso).*/
const prompt = require('prompt-sync')();
const numUsuarioStr = prompt("Digite um número inteiro: ");
const numOriginal = parseInt(numUsuarioStr);
let numero = Math.abs(numOriginal);
const numeroParaComparacao = numero;
let numReverso = 0;

while (numero > 0) {
        const digito = numero % 10;
        numReverso = numReverso * 10 + digito;
        numero = Math.floor(numero / 10);
    }
if (numeroParaComparacao === numReverso) {
  console.log(` O número ${numOriginal} é palíndromo.`);
} else {
  console.log(` O número ${numOriginal} não é palíndromo. Reverso: ${numReverso}`);
}