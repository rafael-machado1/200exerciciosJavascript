//Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz".
//Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).
let i = 1

while (i <= 99){
  i++
  if(i % 15 == 0){
    console.log(`${i} = FizzBuzz`)
  } else if (i % 5 == 0){
    console.log(`${i} = Buzz`)
  } else if (i % 3 == 0){
    console.log(`${i} = Fizz`)
  } else {
    console.log(i)
  }
}