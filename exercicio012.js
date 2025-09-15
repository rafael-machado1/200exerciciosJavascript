//Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
let n1 = parseFloat(prompt('Digite sua nota:'))
let n2 = parseFloat(prompt('Digite sua outra nota:'))
let media = (n1 + n2) / 2
if (media == 10){
  console.log('Sua média é perfeita!')
} else {
  console.log('Desista')
};