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

// Exemplo: If-Else:
function dirigirCarro(idade: number) {
    if(idade >= 18) {
        console.log("Parabéns! Você tem permissão para dirigir!!!");
    } else {
        console.log("Não tem permissão para dirigir!!!");
    }
}

dirigirCarro(27);

// Exemplo: ? : (ternário)
function velocidadeMaxima(velocidade: number) {
    let velocidadePermitida = (velocidade > 80)
        ? console.log("Ultrapassou a velocidade permitida!")
        : console.log("Está abaixo da velocidade permitida!!!");
}

velocidadeMaxima(55);

//Exemplo: Switch
function comboFood(tipoComida: number) {
    switch(tipoComida) {
        case 1:
            console.log("Hamburguer - R$ 7,90");
            break;
        case 2:
            console.log("Cachorro-quente - R$ 4,50");
            break;
        case 3:
            console.log("Pizza Gigante - R$ 49,90");
            break;
        default:
            console.log("Desculpe. Combo inexistente. Escolha outra opção!");
    }
}

comboFood(5);