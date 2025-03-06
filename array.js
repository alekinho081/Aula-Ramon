let palavras = []

    for(i = 0; i < palavras.lenght; i++){
        palavras.push(pala)
    }

function addElemento(){
    let palavra = document.getElementById("pala").value 
    palavras.push(palavra)
}

function mostraArray(){
    alert(palavras + '\n' + "O total de caracteres é " + calculaTotal())
}

function calculaTotal(){
    let total = ' '
    palavras.forEach((items) => total += items)
    return(total.length)
}
