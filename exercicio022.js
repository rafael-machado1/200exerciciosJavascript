//Escreva um programa que determina o número de dias em um mês.
let mes = parseInt(prompt('Digite o número do mes (1-12)'))

switch(mes){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
   console.log('Seu mês tem 31 dias no total')
  break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log('Seu mês tem 30 dias no total')
  break;
  
  case 2:
    console.log('Seu mês tem 28 dias ou 29 dias em ano bissexto')
  break;
}