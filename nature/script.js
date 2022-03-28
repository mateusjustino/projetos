
// modo noturno ----------------------------------------

var varModoNoturno = false

var modoNoturnoBtn = document.getElementById('modoNoturno')
modoNoturnoBtn.addEventListener('click', funcModoNoturno)

function funcModoNoturno() {
    if (varModoNoturno == false) {
        document.body.style.transition = '1s'
        document.body.style.background = 'black'
        varModoNoturno = true
    }
    else if (varModoNoturno == true){
        document.body.style.transition = '1s'
        document.body.style.background = 'white'
        varModoNoturno = false
    }
}

//slide ------------------------------------------------------
var imgs = []
var imgAtual = 0
var tmpTrocaSlide = 0
var tmpTrocaSlideProx = 150
var divSlide = document.getElementById('slide')

// botoes do slide
document.getElementById('btnProximo').addEventListener('click', imgProxima)
document.getElementById('btnAnterior').addEventListener('click', imgAnterior)
//bolinha das posicoes do slide
document.getElementById('posSlide1').addEventListener('click', function () {
    imgAtual = 0
    trocaImg()
    tmpTrocaSlide = 0
})
document.getElementById('posSlide2').addEventListener('click', function () {
    imgAtual = 1
    trocaImg()
    tmpTrocaSlide = 0
})
document.getElementById('posSlide3').addEventListener('click', function () {
    imgAtual = 2
    trocaImg()
    tmpTrocaSlide = 0
})
document.getElementById('posSlide4').addEventListener('click', function () {
    imgAtual = 3
    trocaImg()
    tmpTrocaSlide = 0
})
document.getElementById('posSlide5').addEventListener('click', function () {
    imgAtual = 4
    trocaImg()
    tmpTrocaSlide = 0
})

preCarregamento()
trocaImg() // para já iniciar a pagina com uma img
sliderAutomatico() // para executar o slide automatico

function preCarregamento() { //para já carregar as imagens ao iniciar a página, para evitar possivel loading
    for (let i = 1; i < 6; i++) {
        imgs[i] = new Image()
        imgs[i] = "img/"+ i +".jpg"        
    }
}

function carregarImg(img) { //func para carregar a img
    divSlide.style.transition = 'background-image 0.3s linear'
    divSlide.style.backgroundImage = "url('"+imgs[imgAtual]+"')"

    for (let i = 1; i < 6; i++) {        
        var bolinha = document.getElementById('posSlide' + i)
        bolinha.style.backgroundColor = 'white'
    }

    var bolinha = document.getElementById('posSlide' + img)   
    bolinha.style.transition = '0.3s' 
    bolinha.style.backgroundColor = 'rgb(160, 180, 160)'
}
function trocaImg() { // func para trocar a img
    imgAtual++
    if (imgAtual >= 6) {
        imgAtual = 1
        carregarImg(imgAtual)
    }
    else if (imgAtual < 1){
        imgAtual = 5
        carregarImg(imgAtual)
    }
    else{
        carregarImg(imgAtual)        
    }
}
function sliderAutomatico() {
    tmpTrocaSlide++
    if (tmpTrocaSlide >= tmpTrocaSlideProx) {
        tmpTrocaSlide = 0
        trocaImg()
    }
    window.requestAnimationFrame(sliderAutomatico)
}
function imgProxima() {
    trocaImg()
    tmpTrocaSlide = 0
}
function imgAnterior() {
    imgAtual -= 2
    trocaImg()
    tmpTrocaSlide = 0
}

// menu hamburguer ------------------------------

var pageMain = document.getElementsByTagName('main')[0]
var pageFooter = document.getElementsByTagName('footer')[0]
var nav = document.getElementsByTagName('nav')[0]
var li = document.getElementsByTagName('li')
var ul = document.getElementsByTagName('ul')[0]
var menuAberto = false


var bar1 = document.getElementById('bar1')
var bar2 = document.getElementById('bar2')
var bar3 = document.getElementById('bar3')
bar1.style.transition = '0.5s'
bar2.style.transition = '0.5s'
bar3.style.transition = '0.5s'

nav.addEventListener('click', function () {
    if (menuAberto == true) {
        fechaMenu()
        console.log('foi')
    }
})
var burguer = document.getElementById('burguer')
burguer.addEventListener('click', function () {
    

    if (menuAberto == false) {
        abreMenu()
    }
    else{        
        fechaMenu()
    }
})

function abreMenu() {
    bar1.style.transform = 'rotate(45deg)'
    bar1.style.top = '8px'

    bar3.style.transform = 'rotate(-45deg)'
    bar3.style.top = '-8px'

    bar2.style.opacity = '0'


    menuAberto = true

    nav.style.transition = '0.7s'
    nav.style.visibility = 'visible'
    nav.style.opacity = '1'

    
    for (let i = 0; i < li.length; i++) {
        li[i].style.transition = '1s'
        li[i].style.margin = '25px'
        
    }
    document.body.style.overflowY = 'hidden'

}
function fechaMenu() {
    bar1.style.transform = 'rotate(0deg)'
    bar1.style.top = '0px'
    bar1.style.transform = 'translateY(-5px)'

    bar3.style.transform = 'rotate(0deg)'
    bar3.style.top = '0px'
    bar3.style.transform = 'translateY(5px)'

    bar2.style.opacity = '100'

    menuAberto = false


    nav.style.transition = '0.7s'
    nav.style.visibility = 'hidden'
    nav.style.opacity = '0'
    
    
    for (let i = 0; i < li.length; i++) {
        li[i].style.transition = '1s'
        li[i].style.margin = '0px'
    }
    
    document.body.style.overflowY = 'visible'
}

// ampliar uma img ----------------------
var img = document.getElementsByClassName('img')
var imgUrl = ''
var modalImg = document.getElementById('modalImg')
var modal = document.getElementById('modal')


for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function () {
        imgUrl = window.getComputedStyle(img[i]).backgroundImage
        modalImg.style.backgroundImage = imgUrl

        modal.style.transition = '.2s'
        modal.style.visibility = 'visible'
        modal.style.opacity = '1'

        modalImg.style.transition = '.5s'
        modalImg.style.opacity = '1'
        modalImg.style.transform = 'scale(1)'
        
    })
}
modal.addEventListener('click', function () {
    modalImg.style.transition = '.5s'
    modalImg.style.transform = 'scale(0)'
    modalImg.style.opacity = '0'
    modalImg.style.backgroundImage = ''

    modal.style.transition = '.2s'
    modal.style.opacity = '0'
    modal.style.visibility = 'hidden'

})

/*
function ampliaImg() {
    var divModal = document.createElement('div')
    divModal.setAttribute('id', 'modal')
    document.body.appendChild(divModal)

    /*
    var divModalContent = document.createElement('div')
    divModalContent.setAttribute('id', 'modalContent')
    divModal.appendChild(divModalContent)

    
    var img = document.createElement('img')
    img.setAttribute('src', 'img/floresta.jpg')
    img.setAttribute('id', 'modalImg')
    divModalContent.appendChild(img)
    

    var span = document.createElement('span')
    span.setAttribute('id', 'btnClose')
    divModalContent.appendChild(span)
    */
   /*
    //document.body.style.overflow = 'hidden'
    //aqui para remover quando clicar na tela fora da img
    divModal.addEventListener('click', function () {
        divModal.remove()
        //document.body.style.overflow = 'visible'

    })
}
*/