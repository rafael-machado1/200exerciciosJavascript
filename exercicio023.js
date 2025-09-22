//Escreva um programa que verifica as cores de um semáforo.
let corSemáforo = ['verde', 'amarelo', 'vermelho']
let corAtual = corSemáforo[0]

switch(corAtual){

  case verde:
    console.log('O semáforo está verde, continue!')
  break;

  case amarelo:
    console.log('O semáforo está amarelo e prestes a fechar, cuidado!')
  break;

  case vermelho:
    console.log('O semáforo está vermelho, pare!')
  break;
}