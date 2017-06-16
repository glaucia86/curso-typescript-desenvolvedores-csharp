/**
 * Arquivo: controlFlow.ts
 * Author: Glaucia Lemos
 * Description: Nesse arquivo estamos vendo alguns exemplos práticos
 * do uso dos principais controles de fluxo em TypeScript
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */
//Exemplo: While | Do ... While
/*function executarNumeroDesc(numero: number) {
    do {
        console.log(numero);
        numero--;
    } while(numero >= 0)
}

executarNumeroDesc(10);*/
//Exemplo: For
function executarNumeroCresc(numero) {
    for (numero = 0; numero <= 10; numero++)
        console.log(numero);
}
executarNumeroCresc(10);
//Exemplo: For in (foreach)
function cidadesTuristicas(cidade1, cidade2, cidade3) {
    var listaCidades = {
        cidade1: "Rio de Janeiro",
        cidade2: "Paris",
        cidade3: "Los Angeles"
    };
    for (var key in listaCidades) {
        console.log(key + ' = ' + listaCidades[key]);
    }
}
cidadesTuristicas("Rio de Janeiro", "Paris", "Los Angeles");
//# sourceMappingURL=controlFlow2.js.map