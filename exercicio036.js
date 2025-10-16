/*Usando um laço for, imprima todos os números perfeitos de 1 a 100 
/*um número é perfeito se a soma de seus divisores,  1 mas não ele mesmo, é igual ao próprio número.*/
function divisores(a){
  let divisoresEncontrados = []
  for( let b = 1; b < a; b++){
    if (a % b == 0){
      divisoresEncontrados.push(b)
    }    
  }
  return divisoresEncontrados
}

for(let i = 1; i <= 100; i++){  
  const divisores1 = divisores(i)
  const somaDeDivisores = divisores1.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 0);
if (somaDeDivisores == i){
  console.log(`O número ${i} é perfeito!`)
}
}