/**
 * Arquivo: arrowFunctions_2.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de arrow functions em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 * 
 * 
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Arrow Functions)
 *
 */

// Exemplo sem uso do Arrow Function
var multiplicar = function(numero1: number, numero2: number) : number {
    return numero1 * numero2;
}


// Exemplo com uso do Arrow Function
var multiplicarNumeroLambda = (numero1: number, numero2: number) => numero1 * numero2;

//Situação diferente entre uso e sem uso de Arrow Function:
lerPrimeiroNumero = function(primeiroNumero: number) {
    console.log(primeiroNumero);
}

console.log("Multiplicando números sem Lambda.....: ", multiplicar(5, 7));
console.log("Multiplicando número com Lambda......: ", multiplicarNumeroLambda(5,7));
lerPrimeiroNumero(35);


