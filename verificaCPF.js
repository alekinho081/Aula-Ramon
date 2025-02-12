function verificaCPF(CPF){
    //Verifica comprimento do CPF
    if(CPF.lenght = 11){
        //Declarando variaveis e dividindo CPF em um Map
        let cpf = CPF.toString().split("").map(Number)
        let digitoVerifica = ""
        let num1, total1 = 0, digVer1
        let num2, total2 = 0, digVer2

        //Multiplicando e somando digitos
        for(i = 0; i < 9; i++){
            num1 = parseInt(cpf[i]) * (10 - i)
            total1 += num1
        }

        //Pegando o primeiro digito
        if(total1 % 11 < 2){
            digVer1 = 0
        }else{
            digVer1 = 11 - (total1 % 11)
        }

        //Verificando segundo número
        if(digVer1 === cpf[9]){

            //Multiplicando e somando digitos
            	for(i = 0; i < 9; i++){
                num2 = parseInt(cpf[i]) * (11 - i)
                total2 += num2
            }

            //Pegando o segundo digito
            if(total2 % 11 < 2){
                digVer2 = 0
            }else{
                digVer2 = 11 - (total2 % 11)
            }

            //Verificando segundo dígito
            if(digVer2 == cpf[10]){
                console.log("CPF Válido")
                return true
            }else{
                console.log("CPF inválido")
                return false
            }
        }else{
            console.log("CPF inválido")
            return false
        }
    }
}

verificaCPF(12345678910)
verificaCPF(11111111111)
verificaCPF(10582122902)