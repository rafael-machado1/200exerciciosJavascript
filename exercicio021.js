//Escreva um programa que determina a estação do ano com base no mês.
let mes = parseInt(prompt('Digite o seu mês em número inteiro (número de 1 a 12)'));

switch(mes){
  case 9:
  case 10:
  case 11:
    console.log('Você está na primavera')
  break;
  
  case 12:
  case 1:
  case 2:
    console.log('Você está no verão')
  break;

  case 3:
  case 4:
  case 5:
    console.log('Você está no outono')
  break;

  case 6:
  case 7:
  case 8:
    console.log('Você está no inverno')
  break;
}