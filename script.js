const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

document.addEventListener("click", (e) => {
    if(gameover==true){
        location.reload()
    }
})
document.addEventListener('keyup', (e) => {
    if(gameover==true){
        location.reload()
    }else if (e.code === "ArrowUp"){personagemPula()}
    else if (e.code === "ArrowDown") {personagemCai()}
    
})

let gameover = false

const personagem = {
    posicaox: 50,
    posicaoy: canvas.height-50,
    largura: 50,
    altura: 50,
}

function desenhaPersonagem(){
    ctx.fillStyle = 'white'
    ctx.fillRect(personagem.posicaox, personagem.posicaoy,personagem.largura,personagem.altura)
}

const obstaculo = {
    posx: canvas.width-100,
    posy: canvas.height-100,
    tamanhox: 50,
    tamanhoy: 100,
    vecolidade: 5
}

function desenhaBloco(){
    ctx.fillStyle = 'red'
    ctx.fillRect(obstaculo.posx, obstaculo.posy,obstaculo.tamanhox,obstaculo.tamanhoy)
}

function personagemPula(){
        personagem.posicaoy -= 50
}
function personagemCai(){
    personagem.posicaoy += 50
}

function atualizaObstaculo(){
    obstaculo.posx -= obstaculo.vecolidade
    if(obstaculo.posx === -10){
        obstaculo.posx += canvas.width+50
    }
}

function verificaColisao(){
    if(
        personagem.posicaox < obstaculo.posx + obstaculo.tamanhox && 
        personagem.posicaox + personagem.largura  > obstaculo.posx   &&
        personagem.posicaoy >= obstaculo.posy
    ){
        gameOver()
    }
}

function gameOver (){
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
    desenhaBloco()
    verificaColisao()
    atualizaObstaculo()
    requestAnimationFrame(loop)
}
    
loop()