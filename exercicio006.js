//Declare duas variáveis e atribua valores booleanos a elas. Use os operadores lógicos AND, OR e NOT para realizar operações lógicas entre as variáveis. Imprima os resultados.
const always = true;
const never = false;
if(always === true|| never === true){
  console.log('Verdadeiro')
}
if(always === true && never === false){
  console.log('Verdadeiro')
}
if(~always === false && ~never === true){
  console.log('Verdadeiro')
}
if(~always === false || ~never === false){
  console.log('Verdadeiro')
}