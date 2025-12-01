//Usando um laço do-while, crie um programa que transforme um número decimal em binário.
const prompt = require('prompt-sync')();
let numUser = parseInt(prompt("Digite um número: "));
let binario = ""

if (numUser == 0){
  binario = "0"
} else {
  do {
    const restoDivisao = numUser % 2
    binario = restoDivisao.toString() + binario
    numUser = Math.floor(numUser / 2)
  } while (numUser > 0)
    console.log(`O número ${numUser} em binário é ${binario}`)
}