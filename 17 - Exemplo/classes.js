/**
 * Arquivo: classes.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de classes em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 *
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html (Classes)
 *
 */
var Cliente = (function () {
    function Cliente(codigo, nome, endereco, cidade, estado, telefone, email, idade) {
        this.codigo = codigo;
        this.nome = nome;
        this.cidade = cidade;
        this.endereco = endereco;
        this.estado = estado;
        this.telefone = telefone;
        this.email = email;
        this.idade = idade;
    }
    //Método:
    Cliente.prototype.dadosCliente = function () {
        console.log("====== Dados do Cliente ======");
        console.log("Id do Cliente.......................: " + this.codigo);
        console.log("Nome do Cliente.....................: " + this.nome);
        console.log("Endereço............................: " + this.endereco);
        console.log("Cidade..............................: " + this.cidade);
        console.log("Estado..............................: " + this.estado);
        console.log("Telefone............................: " + this.telefone);
        console.log("Idade...............................: " + this.idade);
        console.log("E-mail..............................: " + this.email);
        //console.log(`Email...............................: ${this.email}`);
    };
    return Cliente;
}());
var cliente = new Cliente(1, "Glaucia Lemos", "Rua: Nossa Senhora de Copacabana, 99999", "Rio de Janeiro", "RJ", "(21) 99999-9999", "teste@gmail.com", 31);
cliente.dadosCliente();
//# sourceMappingURL=classes.js.map