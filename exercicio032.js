//Usando  um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador
alert('Pedra, Papel e Tesoura!')
const escolhas = [1, 2, 3];
const machine = Math.floor((Math.random) * escolhas.length)
const escolhaJogadas = parseInt(prompt('Digite quantas jogos quer ter (Máximo de 100 jogos):'));

if(escolhaJogadas < 2 || escolhaJogadas === isNaN){
  console.log('Digite um número válido')
} else {
  do{
    
  } while(escolhaJogadas <= 100)
}