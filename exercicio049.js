// Escreva uma função que aceite três números como argumentos e retorne o maior deles.
function maior(a, b, c){
  if (a >= b && a >= c) {
    console.log(a)
    } else if (b >= a && b >= c) {
    console.log(b)
  } else {
    console.log(c)
  }
}
maior(4,3,2)