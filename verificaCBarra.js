let cod_barra = 5601234567892 
let paisOrigem = ""

function verificaCBarra(){
    //Definindo variáveis
    let cod_barraMap, soma = 0, mult = 0, digVerificador = 0
    let cod_Fabricante = "", cod_prod = ""
    
    //Verificando o tamanho do código
    if(cod_barra.toString().length === 13){
        //Dividindo o código em um mapa
        cod_barraMap = cod_barra.toString().split("").map(Number)
        digVerificador = cod_barraMap[12]
        for(i = 0; i < 12; i++){
            //Multiplicando números nas posições pares e impares
            if(i % 2 === 0){
                mult = cod_barraMap[i] * 3
            }else{
                mult = cod_barraMap[i] * 1
            }
            //Somando os números multiplicados
            soma+=mult
        }
        /*Fazendo calculo para descobrir se o código de barras calculado
        é igual ao número verificador */
        soma += cod_barraMap[12]
        const digitoCalculado = (10 - (soma % 10)) % 10;
        
        //Vendo se o número é múltiplo de 10
        if(digitoCalculado === digVerificador){
            for(i = 0; i < 13; i++){
                if(i < 3){
                    paisOrigem += cod_barraMap[i].toString()
                }else if(i < 7){
                    cod_Fabricante+= cod_barraMap[i].toString()
                }else{
                    cod_prod+= cod_barraMap[i].toString()
                }
            }
            console.log("Código Válido" + "\nO digito verificador é: " + digVerificador + "\nPaís de origem: " + descobrePais() + "\nFabricante: " + cod_Fabricante + "\nProduto: " + cod_prod)
        }else{
            console.log("Código Falso")
        }
    }else {
        console.log("Código de barra inválido")
    }


}

function descobrePais(){
    // Tabela de códigos de país
    const cod_paises = {
        "000-019": "Estados Unidos e Canadá",
        "030-039": "Estados Unidos (farmacêuticos)",
        "060-139": "Estados Unidos e Canadá",
        "300-379": "França",
        "400-440": "Alemanha",
        "450-459": "Japão",
        "490-499": "Japão",
        "500-509": "Reino Unido",
        "540-549": "Bélgica e Luxemburgo",
        "570-579": "Dinamarca",
        "600-601": "África do Sul",
        "640-649": "Finlândia",
        "690-699": "China",
        "700-709": "Noruega",
        "730-739": "Suécia",
        "750-759": "México",
        "770-771": "Colômbia",
        "789-790": "Brasil",
        "800-839": "Itália",
        "840-849": "Espanha",
        "870-879": "Holanda",
        "880": "Coreia do Sul",
        "884": "Camboja",
        "893": "Vietnã",
        "900-919": "Áustria",
        "930-939": "Austrália",
        "940-949": "Nova Zelândia",
        "950": "GS1 Global Office",
        "955": "Malásia",
        "958": "Macau"
    };
    if(cod_paises[paisOrigem] == undefined){
        return "País não cadastrado"
    }else{
        return cod_paises[paisOrigem]
    }
}


verificaCBarra()


