//Escreva um programa que verifica se uma pessoa pode votar com base na idade.
let idade = parseInt(prompt('Qual é a sua idade?'));
if (idade >= 16 && idade <= 17){
  console.log('Você pode votar, mas não tem obrigatoriedade')
};
if (idade < 16){
  console.log('Você não pode votar')
};
if (idade > 18){
  console.log('Você pode e deve votar')
};