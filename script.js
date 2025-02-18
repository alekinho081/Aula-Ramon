const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

document.addEventListener("click", (e) => {
    if(gameover==true){
        location.reload()
    }
})

let gameover = false

const persona = {
    posicaox: 50,
    posicaoy: canvas.height-50,
    largura: 50,
    altura: 50,
}

function desenhaPerso(){
    ctx.fillStyle = 'white'
    ctx.fillRect(persona.posicaox, persona.posicaoy,persona.largura,persona.altura)
}

const obstaculo = {
    posx: canvas.width-100,
    posy: canvas.height-100,
    tamanhox: 50,
    tamanhoy: 100,
    vecolidade: 10
}

function desenhaBloco(){
    ctx.fillStyle = 'red'
    ctx.fillRect(obstaculo.posx, obstaculo.posy,obstaculo.tamanhox,obstaculo.tamanhoy)
}

function atualizaObstaculo(){
    obstaculo.posx -= obstaculo.vecolidade
}

function verificaColisao(){
    if(
        persona.posicaox < obstaculo.posx + obstaculo.tamanhox && persona.posicaox + persona.largura  > obstaculo.posx
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
    desenhaPerso()
    desenhaBloco()
    verificaColisao()
    atualizaObstaculo()
    requestAnimationFrame(loop)
}
    
loop()