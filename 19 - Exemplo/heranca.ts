/**
 * Arquivo: heranca.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de herança em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 * 
 * 
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html (Herança)
 *
 */

///---> Exemplo 1)

/*class Tamanho {
    area: number;

    constructor(area: number) {
        this.area = area;
    }
}

class Circulo extends Tamanho {
    constructor(area: number) {
       super(area); 
    }

    tamanhoTotalArea() {
        console.log("A área total do círculo é....: " + this.area);
    }
}

let circulo = new Circulo(250);
circulo.tamanhoTotalArea();*/


///---> Exemplo 2)

class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        private idade: number
    ){}

    apresentarPessoa() {
        console.log("Seja Bem-Vindo(a) " + this.nome);
    }
}

class Estudante extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        email: string,
        idade: number,
        private periodo: number,
        private tipoGraduacao: string
    ){
        super(nome, sobrenome, email, idade)
    }

    apresentarEstudante() {
        super.apresentarPessoa();
        console.log("Me chamo " + this.nome + " e estou cursando " + this.tipoGraduacao + ". E estou no " + this.periodo + "º período da Faculdade.");
    }
}

let estudante = new Estudante("Glaucia", "Lemos", "teste@gmail.com", 31, 8, "Análise de Sistemas");
estudante.apresentarEstudante();