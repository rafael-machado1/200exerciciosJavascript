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