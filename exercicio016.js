//Escreva um programa que determina o maior entre três números.
const num1 = 30
const num2 = 20
const num3 = 40

if (num1 > num2 && num1 > num3){
  console.log(`${num1} é o maior número`)
} else if (num2 > num1 && num2 > num3){
  console.log(`${num2} é o maior número`)
} else {
  console.log(`${num3} é o maior número`)
};