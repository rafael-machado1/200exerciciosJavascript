//Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).
let nota1 = parseFloat(prompt('Digite sua primeira nota:'));
let nota2 = parseFloat(prompt('Digite sua segunda nota:'));
let media = (nota1 + nota2) / 2
if(media < 7){
  console.log('Você foi reprovado')
} 
if(media >= 7){
  console.log('Você foi aprovado')
};