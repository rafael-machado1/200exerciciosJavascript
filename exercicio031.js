//Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
let limite = parseInt(prompt('Digite um número para advinhação'));
alert('Para as próximas perguntas, use somente maior, menor ou igual');
let inicio = 1;
let fim = limite;
let chute;

while(inicio <= fim){
  chute = Math.floor((inicio + fim) / 2)
  let resposta = prompt(`Seu número é ${chute}? Digite maior, menor ou igual`).toLowerCase()

  if (resposta == 'maior'){
    inicio = chute + 1
  } else if (resposta == 'menor'){
    fim = chute - 1
  } else if (resposta == 'igual'){
    alert('Acertei!')
    break;
  } else {
    alert('Digite uma resposta válida')
  }
}