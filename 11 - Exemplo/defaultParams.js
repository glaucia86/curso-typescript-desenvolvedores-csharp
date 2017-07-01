/**
 * Arquivo: defaultParams.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de parâmetros default em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 *
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Optional and Default Parameters)
 *
 */
function calcularValorDesconto(preco, taxa) {
    if (taxa === void 0) { taxa = 0.50; }
    var desconto = preco * taxa;
    console.log("O Valor de Desconto da taxa aplicada é.....: ", desconto);
}
calcularValorDesconto(1000); //0.50 (segundo parâmetro)
calcularValorDesconto(1000, 0.30);
//# sourceMappingURL=defaultParams.js.map