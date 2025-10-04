//Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.
let lista = [1, 2, 3];

for (let i = 1; lista.length < 10; i++){
  let sequencia = lista[lista.length - 1] + lista[lista.length - 2]
  lista.push(sequencia)
}
console.log(lista)