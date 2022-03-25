
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

var imgAtual = 1
var tmpTrocaSlide = 0
var tmpTrocaSlideProx = 150
var divSlide = document.getElementById('slide')

function carregarImg(img) { //func para carregar a img
    divSlide.style.transition = 'background-image 1s linear'
    divSlide.style.backgroundImage = "url('img/"+img+".jpg')"
}
function trocaImg() { // func para trocar a img
    imgAtual++
    if (imgAtual == 6) {
        imgAtual = 1
        carregarImg(imgAtual)
    }
    else{
        carregarImg(imgAtual)        
    }
}
sliderAutomatico()
function sliderAutomatico() {
    tmpTrocaSlide++
    if (tmpTrocaSlide >= tmpTrocaSlideProx) {
        tmpTrocaSlide = 0
        trocaImg()
    }
    window.requestAnimationFrame(sliderAutomatico)
}

// menu hamburguer

var page = document.getElementsByTagName('main')[0]
var menu = document.getElementsByTagName('nav')[0]
var menuAberto = false
var burguer = document.getElementById('burguer')
burguer.addEventListener('click', function () {
    var bar1 = document.getElementById('bar1')
    var bar2 = document.getElementById('bar2')
    var bar3 = document.getElementById('bar3')
    bar1.style.transition = '0.5s'
    bar2.style.transition = '0.5s'
    bar3.style.transition = '0.5s'

    if (menuAberto == false) {
        bar1.style.transform = 'rotate(45deg)'
        bar1.style.top = '8px'

        bar3.style.transform = 'rotate(-45deg)'
        bar3.style.top = '-8px'

        bar2.style.opacity = '0'


        menuAberto = true
        abreMenu()
    }
    else{
        bar1.style.transform = 'rotate(0deg)'
        bar1.style.top = '0px'
        bar1.style.transform = 'translateY(-5px)'

        bar3.style.transform = 'rotate(0deg)'
        bar3.style.top = '0px'
        bar3.style.transform = 'translateY(5px)'

        bar2.style.opacity = '100'

        menuAberto = false
        fechaMenu()
    }
})

function abreMenu() {
    menu.style.transition = '1s'
    menu.style.left = '0px'
    page.style.filter = 'blur(2px)'
}
function fechaMenu() {
    menu.style.transition = '1s'
    menu.style.left = '420px'
    page.style.filter = 'blur(0px)'
    

}
