//Escreva um programa que verifica se um número está dentro de um determinado intervalo.
while(true){
let num1 = parseInt(prompt('Digite um número:'))

if (num1 >= 18 && num1 <= 50){
  console.log('Seu número faz parte do intervalo supremo')
  break;
} else {
  console.log('Seu número NÃO faz parte do intervalo supremo, tente novamente')
  }
}