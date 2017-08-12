/**
 * Arquivo: restParams.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de parâmetros rest em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 * 
 * 
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Rest Parameters)
 *
 */

function meuNome(primeiroNome: string, ...sobreNomeCompleto: string[]) {
        return primeiroNome + " " + sobreNomeCompleto.join(" ");
}

let nomeFuncionario = meuNome("Glaucia", "de Souza", "Lemos", "Silva", "Ferreira", "Moreira"); //ilimitada
console.log("Nome Completo.......: ", nomeFuncionario);
