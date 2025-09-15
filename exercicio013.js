//Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e
//imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
let peso = parseFloat(prompt('Digite seu peso em kg:'));
let altura = parseFloat(prompt('Digite sua altura em metros'));
let imc = peso / altura **2
if (imc < 18.5){
  console.log('Você está abaixo do peso ideal')
} else if(imc >= 18.5 && imc < 25){
  console.log('Você está com o peso ideal')
} else if(imc >= 25 && imc < 30){
  console.log('Vocẽ está com sobrepeso')
} else {
  console.log('Você está com obesidade')
};