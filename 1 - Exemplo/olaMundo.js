"use strict";
/**
 * Arquivo: olaMundo.ts
 * Author: Glaucia Lemos
 * Description: Ponta pé inicial do primeiro programa em .ts
 * 1) Executar: SHIFT + CTRL + B
 * 2) No terminal executar: node (nome do arquivo)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var OlaMundo = (function () {
    function OlaMundo() {
    }
    OlaMundo.prototype.digaOlaTodos = function () {
        console.log("Fala Coders!!!");
    };
    return OlaMundo;
}());
exports.OlaMundo = OlaMundo;
var olaMundo = new OlaMundo();
olaMundo.digaOlaTodos();
//# sourceMappingURL=olaMundo.js.map