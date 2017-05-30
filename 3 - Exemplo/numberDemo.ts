/**
 * Arquivo: numberDemo.ts
 * Author: Glaucia Lemos
 * Description: Exemplo sobre uso de tipos em Typescript - Number
 * Data: 30/05/2017
 * Comando para executar: 
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 * 
 * LINK: https://www.typescriptlang.org/docs/handbook/basic-types.html
 */

function exemploNumber(idade: number, tempoDeEmpresa: number) {
    console.log(`Você tem ${idade} anos de idade. 
    E trabalha aqui há ${tempoDeEmpresa} anos na empresa`);
}

exemploNumber(30, 4.5);