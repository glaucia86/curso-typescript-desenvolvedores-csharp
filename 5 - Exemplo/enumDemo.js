/**
 * Arquivo: enum.ts
 * Author: Glaucia Lemos
 * Description: Exemplo sobre uso de tipos em Typescript - Enum
 * Data: 30/05/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 * LINK: https://www.typescriptlang.org/docs/handbook/basic-types.html
 */
function exemploEnum() {
    var campeoesCampeonatoBrasileiro;
    (function (campeoesCampeonatoBrasileiro) {
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Vasco"] = 0] = "Vasco";
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Flamengo"] = 1] = "Flamengo";
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Botafogo"] = 2] = "Botafogo";
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Fluminense"] = 3] = "Fluminense";
    })(campeoesCampeonatoBrasileiro || (campeoesCampeonatoBrasileiro = {}));
    ;
    var titulos = campeoesCampeonatoBrasileiro.Vasco;
    switch (titulos) {
        case campeoesCampeonatoBrasileiro.Vasco:
            console.log("Vasco: Títulos: 4 | Temporadas: 1974, 1989, 1997 e 2000");
            break;
        case campeoesCampeonatoBrasileiro.Flamengo:
            console.log("Flamengo: Títulos: 5 | Temporadas: 1980, 1982, 1983 e 2009");
            break;
        case campeoesCampeonatoBrasileiro.Botafogo:
            console.log("Botafogo: Títulos: 2 | Temporadas: 1968 e 1995");
            break;
        case campeoesCampeonatoBrasileiro.Fluminense:
            console.log("Fluminense: Títulos: 4 | Temporadas: 1970, 1984, 2010 e 2012");
            break;
    }
}
exemploEnum();
//# sourceMappingURL=enumDemo.js.map