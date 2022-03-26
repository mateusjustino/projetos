var imgs = []
var slider
var imgAtual
var maxImg
var tempoTroca
var vtempo
var vbarra


function preCarregamento() {
    var s=1
    for (let i = 0; i < 5; i++) {
        imgs[i] = new Image()
        imgs[i].src = "imgs/s"+ s +".jpg"
        s++
    }            
}

function carregarImg(img) {
    slider.style.transition = 'background-image 0.5s linear'
    slider.style.backgroundImage = "url('"+ imgs[img].src +"')"
}

function inicia() {
    preCarregamento()
    imgAtual = 0
    maxImg = imgs.length -1
    slider = document.getElementById('dvslider')
    vbarra = document.getElementById('dvBarra')
    carregarImg(imgAtual)
    tempoTroca = 0
    anima()
    
    var varTempoAtual = document.getElementById('tempoAtual')            
    varTempoAtual.innerHTML = `Tempo de Transição atual (s): ${animaTroca / 100}`

    document.getElementById('pos0').style.backgroundColor = 'rgb(84, 205, 84)'
    
}

function troca(direcao, posicao = -1) {
    if (posicao == -1) {
        tempoTroca = 0
        imgAtual += direcao
        if (imgAtual > maxImg){
            imgAtual = 0
        }
        else if (imgAtual < 0){
            imgAtual = maxImg
        }
        carregarImg(imgAtual)
        pos = document.querySelectorAll('.sliderPosicoes')
        for (let i = 0; i < pos.length; i++) {
            pos[i].style.backgroundColor = 'rgb(84, 175, 84)'
            
        }
        pos[imgAtual].style.backgroundColor = 'rgb(84, 205, 84)'
    } else {
        tempoTroca = 0
        imgAtual = posicao
        
        carregarImg(imgAtual)
        pos = document.querySelectorAll('.sliderPosicoes')
        for (let i = 0; i < pos.length; i++) {
            pos[i].style.backgroundColor = 'rgb(84, 175, 84)'
            
        }
        pos[imgAtual].style.backgroundColor = 'rgb(84, 205, 84)'
    }
    
}


var animaTroca = 200


function mudaTempo(){
    var valor = document.getElementById('txtTempo').value
    tempoTroca = 0
    if (valor < 1){
        valor = 1
        document.getElementById('txtTempo').value = 1
        animaTroca = valor * 100
        var varTempoAtual = document.getElementById('tempoAtual')
        varTempoAtual.innerHTML = `Tempo de Transição atual (s): ${animaTroca / 100}`
    }
    else{
        animaTroca = valor * 100
        var varTempoAtual = document.getElementById('tempoAtual')
        varTempoAtual.innerHTML = `Tempo de Transição atual (s): ${animaTroca / 100}`
    }
    
}

function anima(){
    tempoTroca++
    if (tempoTroca >= animaTroca){
        tempoTroca = 0
        troca(1)
    }
    vtempo = tempoTroca / (animaTroca / 100)
    vbarra.style.width = vtempo + "%"
    window.requestAnimationFrame(anima)
}

window.addEventListener('load', inicia)