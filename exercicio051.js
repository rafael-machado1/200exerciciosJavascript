// Escreva uma função que calcule o n-ésimo número de Fibonacci.
function calcularFibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let anterior = 0
    let atual = 1;
    let proximo = 1;  

    for (let i = 2; i <= n; i++) {
        proximo = anterior + atual; 
        anterior = atual; 
        atual = proximo;  
    }
    return proximo;
}
const n1 = 6;
const fib1 = calcularFibonacci(n1); 
console.log(`O ${n1}-ésimo número de Fibonacci é: ${fib1}`);

const n2 = 10;
const fib2 = calcularFibonacci(n2);
console.log(`O ${n2}-ésimo número de Fibonacci é: ${fib2}`);
