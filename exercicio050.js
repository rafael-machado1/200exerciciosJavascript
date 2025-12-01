// Escreva uma função que aceite uma string como argumento e retorne a string invertida
function invertida(a){
  const stringInvertida = a.split('').reverse().join('');
  console.log(`A palavra ${a} invertida é ${stringInvertida}`)
}
invertida("teste")