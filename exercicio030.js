//Usando um laço for, imprima todos os números primos de 1 a 100.
let primeNumbers = [2,3,5,7,11,13]
for(let i = 1; i <= 100; i++){
  if (i == 1 || i % 2 == 0 || i % 3 == 0|| i % 5 == 0 || i % 7 == 0 || i % 11 == 0 || i % 13 == 0){
    continue;
  }
  primeNumbers.push(i)
  console.log(primeNumbers)
}