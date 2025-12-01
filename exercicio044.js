//Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.
const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
const linhas = matrizA.length;
const colunas = matrizA[0].length;  
const matrizC = []; 
let i = 0; 

do {
    matrizC[i] = [];
    
    let j = 0;
    do {
        matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
        j++;
    } while (j < colunas);
    i++;
} while (i < linhas);

console.log(matrizA);
console.log(matrizB);
console.log(matrizC);