const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
    
document.addEventListener("click", (e) => {
    if(gameover==true){
        location.reload()
    }
})
document.addEventListener('keydown', (e) => {
    if(gameover==true){
        location.reload()
    }else if (e.code === "ArrowUp" || e.key === "w"){personagemCima()}
    else if (e.code === "ArrowDown" || e.key === "s") {personagemDesce()}
    else if (e.code === "ArrowRight" || e.key === "d"){personagemLadoD()}
    else if(e.code === "ArrowLeft" || e.key === "a"){personagemLadoE()}
    
})
document.addEventListener("keyup", (e) => {
    if(gameover==true){
        location.reload()
    }else if (e.code === "ArrowUp" || e.key === "w"){personagem.velocidadey = 0}
    else if (e.code === "ArrowDown" || e.key === "s") {personagem.velocidadey = 0}
    else if (e.code === "ArrowRight" || e.key === "d"){personagem.velocidadex = 0}
    else if(e.code === "ArrowLeft" || e.key === "a"){personagem.velocidadex = 0}
    
})

document.addEventListener("keypress", (e) => {
    if(e.code == 'Space'){
        console.log('bomba')
        desenhaBomba()
    }
})

let gameover = false

const quebravel = {
    inteira: true,
    dropa: true,
    posicaox: 234,
    posicaoy: 234,
    altura: 50,
    largura:50
}

const bomba = {
    tempo: 3,
    rangex: 150,
    rangey: 150,
    tamanhox: 45,
    tamanhoy: 45
}

const personagem = {
    posicaox: 50,
    posicaoy: canvas.height-50,
    largura: 40,
    altura: 40,
    velocidadey: 0,
    velocidadex: 0,
    pulando: false,
    localiza: true,
    andando: false
}

function desenhaCaixa(){
    ctx.fillStyle = 'green'
    ctx.fillRect(quebravel.posicaox, quebravel.posicaoy, quebravel.largura, quebravel.altura)
}
function desenhaBomba(){
    ctx.fillStyle = 'white'
    ctx.fillRect(personagem.posicaox, personagem.posicaoy, bomba.tamanhox, bomba.tamanhoy)
}

function desenhaPersonagem(){
    ctx.fillStyle = 'white'
    ctx.fillRect(personagem.posicaox, personagem.posicaoy,personagem.largura,personagem.altura)
}
function atualizaPersonagem(){
    if(personagem.andando = true){
        personagem.posicaox += personagem.velocidadex
        personagem.posicaoy += personagem.velocidadey
    }
}


function personagemCima(){
    personagem.velocidadey = -2
    andando = true
}
function personagemDesce(){
    personagem.velocidadey = 2
    andando = true
    console.log(personagem.posicaoy)
}
function personagemLadoD(){
    personagem.velocidadex = 2
    andando = true
    console.log(personagem.posicaox)
}
function personagemLadoE(){
    personagem.velocidadex = -2
    andando = true
}

function verificaColisao(){
    if(personagem.posicaox <= 0){
        personagem.posicaox +=2
    }else if(personagem.posicaox >= canvas.width - 50){
        personagem.posicaox -=2
    }else if(personagem.posicaoy <= 0){
        personagem.posicaoy +=2
    }else if(personagem.posicaoy >= canvas.height - 50){
        personagem.posicaoy -=2
    }
}

function gameOver (){
    gravidade = 20
    obstaculo.vecolidade = 0
    atualizaObstaculo()
    ctx.fillStyle='red'
    ctx.fillRect((canvas.width/2)-150,(canvas.height/2)-50,350,100)
    ctx.fillStyle='black'
    ctx.font='50px Arial'
    ctx.fillText("Game Over", (canvas.width/2)-100,(canvas.height/2))
    gameover = true
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    desenhaPersonagem()
    desenhaCaixa()
    verificaColisao()
    atualizaPersonagem()
    requestAnimationFrame(loop)
}
    
loop()