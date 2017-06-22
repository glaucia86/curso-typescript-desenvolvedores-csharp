/**
 * Arquivo: optionalParams.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de parâmetros opcionais em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 *
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Optional and Default Parameters)
 *
 */
function somarParamsOpcionais(
    //Parâmetros:
    num1, num2, num3 // esse parâmetro é opcional
) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
var resultado = somarParamsOpcionais(15, 20, 35);
console.log("A Soma dos 3 números.......: " + resultado);
resultado = somarParamsOpcionais(15, 20);
console.log("A Soma de 2 n\u00FAmeros..........: " + resultado);
//# sourceMappingURL=optionalParams.js.map