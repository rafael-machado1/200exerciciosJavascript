//Escreva um programa que verifica as cores de um semáforo.
let corSemáforo = ['verde', 'amarelo', 'vermelho']

for(let i = 0; i < corSemáforo.length; i++){
  if (corSemáforo[i] == 'verde'){
    console.log('O sinal está verde, você pode continuar!')
  } else if ( corSemáforo[i] == 'amarelo'){
    console.log('O sinal está amarelo, cuidado!')
  } else {
    console.log('O sinal está vermelho, pare e espere!')
  }
}