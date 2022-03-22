var on = false

// var para os botoes

var btnOn = document.getElementById('btnOn')
var btnOff = document.getElementById('btnOff')
var btnC = document.getElementById('btnC')
var btnDivisao = document.getElementById('btnDivisao')
var btnMultiplicacao = document.getElementById('btnMultiplicacao')
var btnSubtracao = document.getElementById('btnSubtracao')
var btnSoma = document.getElementById('btnSoma')
var btnIgual = document.getElementById('btnIgual')
var btnPonto = document.getElementById('btnPonto')

var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')

// eventos para os botoes 
btnOn.addEventListener('click', liga)
btnOff.addEventListener('click', desliga)
btnC.addEventListener('click', limpar)
btnSoma.addEventListener('click', soma)

btn0.addEventListener('click', function () {
    digitaNumero(0)
})
btn1.addEventListener('click', function () {
    digitaNumero(1)
})
btn2.addEventListener('click', function () {
    digitaNumero(2)
})
btn3.addEventListener('click', function () {
    digitaNumero(3)
})
btn4.addEventListener('click', function () {
    digitaNumero(4)
})
btn5.addEventListener('click', function () {
    digitaNumero(5)
})
btn6.addEventListener('click', function () {
    digitaNumero(6)
})
btn7.addEventListener('click', function () {
    digitaNumero(7)
})
btn8.addEventListener('click', function () {
    digitaNumero(8)
})
btn9.addEventListener('click', function () {
    digitaNumero(9)
})

// funções liga/desliga 
function liga() {
    if (on == false) {
        var visor = document.getElementById('visor')
        var div1 = document.createElement('div') //a div é criada
        var div2 = document.createElement('div') 
        div1.setAttribute('id', 'ultimaConta') //o id que será da div
        div1.textContent = 'Histórico' // para adicionar o texto já
        div2.setAttribute('id', 'caracteres')
        visor.appendChild(div1) //adiciono a div como filha do visor
        visor.appendChild(div2) 

        on = true
    }
}
function desliga() {
    if (on == true) {
        filhoDoVisor = document.getElementById('visor').childNodes //pego os filhos do visor
        document.getElementById('visor').removeChild(filhoDoVisor[1]) //removo a filha do visor(div)
        document.getElementById('visor').removeChild(filhoDoVisor[0])
        on = false
    }
}

// função para digitar os números
function digitaNumero(n1) {
    if (on == true) {
        var caracteres = document.getElementById('caracteres')
        caracteres.innerHTML += n1
    }    
}

function limpar() {
    if (on == true) {
        var caracteres = document.getElementById('caracteres')
        caracteres.innerHTML = ''
    }    
}

function soma() {
    if (on == true) {
        if (verificaNumero()) {
            var caracteres = document.getElementById('caracteres')
            caracteres.innerHTML += '+'
        }
        
    }
}
// fazer a função para checar se é numero ou nao na hora de fazer uma soma
function verificaNumero() {
    var caracteres = document.getElementById('caracteres').innerText
    ultimoCaracter = caracteres.charAt(caracteres.length - 1)
    console.log(ultimoCaracter)
    if (ultimoCaracter.isNan()) {
        return false
    }
    else{
        return true
    }
}



