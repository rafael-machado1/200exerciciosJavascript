//Usando  um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador
alert('Pedra, Papel e Tesoura!');
const escolhas = [0, 1, 2]; //Pedra (0), papel (1) ou tesoura (2)

do{
  const machine = Math.floor(Math.random() * escolhas.length);
  const escolhaJogadas = parseInt(prompt('Qual jogada quer fazer?\n Digite Pedra (0)\n papel (1)\n tesoura (2)\n ou fim (3)'));
  if (machine == escolhaJogadas){
       console.log('O computador escolheu a mesma opção, empate!')
  } else if (machine == 0 && escolhaJogadas == 1){
      console.log('O computador escolheu pedra, você venceu essa!')
  } else if (machine == 0 && escolhaJogadas == 2){
      console.log('O computador escolheu pedra, você perdeu essa!')
  } else if (machine == 1 && escolhaJogadas == 0){
      console.log('O computador escolheu papel, você perdeu essa!')
  } else if (machine == 1 && escolhaJogadas == 2){
      console.log('O computador escolheu papel, você venceu essa!')
  } else if (machine == 2 && escolhaJogadas == 0){
      console.log('O computador escolheu tesoura, você venceu essa!')
  } else if (machine == 2 && escolhaJogadas == 1){
      console.log('O computador escolheu tesoura, você perdeu essa!')
  } else if (escolhaJogadas == 3) {
      break;
    } else {
      console.log('Erro!')
    }
  } while(true);