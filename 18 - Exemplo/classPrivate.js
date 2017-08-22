/**
 * Arquivo: classPrivate.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de atributos privados em Classes no TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 *
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html (Classes)
 *
 */
//----> 1) Exemplo que dará erro:
/*class Produto {
    private nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    }
}

new Produto("Teclado").nome;

//----> 1.2) Outro exemplo:
class Teste {
    str: string = "Olá";
    private str2: string = "Não Deu!!";
}

let obj = new Teste();
console.log(obj.str);
console.log(obj.str2);*/
//---> 2) Exemplo correto:
var Carro = (function () {
    function Carro(preco) {
        this.preco = preco;
    }
    Carro.prototype.descontoValorCarro = function () {
        return this.preco - (this.preco * 0.5);
    };
    Carro.prototype.informarValorDesconto = function () {
        console.log("Valor do Desconto é......: R$ ", carro.descontoValorCarro());
    };
    return Carro;
}());
var carro = new Carro(10000);
carro.informarValorDesconto();
//# sourceMappingURL=classPrivate.js.map