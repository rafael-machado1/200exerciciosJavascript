// Escreva um programa que imprime uma classificação baseada na nota de um aluno.
let nota = parseInt(prompt('Digite sua nota final:'))
switch(nota){
  case 7:
    console.log('Você possui uma boa nota!')
  break;

  case 8:
    console.log('Você possui uma ótima nota, parabéns!')
  break;

  case 9:
    console.log('Você possui uma belíssima nota, parabéns!')
  break;

  case 10:
    console.log('Você possui uma nota perfeia, uau!')
  break;

  case 6:
    console.log('Você conseguiu passar! Mas pode tentar uma nota melhor')
  break;
}