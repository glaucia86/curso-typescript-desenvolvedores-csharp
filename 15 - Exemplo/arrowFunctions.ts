/**
 * Arquivo: arrowFunctions.ts
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

// Exemplo sem uso de Arrow Function:
var exemplo1 = function(altura: number, largura: number) {
    return altura * largura;
}

let totalCasa = exemplo1(5, 5);
console.log("O tamanho total da casa é.....: ", totalCasa + " m2");

// Exemplo com uso do Arrow Function:
var exemplo2 = (altura: number, largura: number) => altura * largura;
let totalCasa2 = exemplo2(6, 5);
console.log("O tamanho total da casa é.....: ", totalCasa2 + " m2");
