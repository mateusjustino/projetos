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
btnIgual.addEventListener('click', resultado)
btnSoma.addEventListener('click', soma)
btnSubtracao.addEventListener('click', subtracao)
btnMultiplicacao.addEventListener('click', multiplicacao)
btnDivisao.addEventListener('click', divisao)

btnPonto.addEventListener('click', function () {
    digitaNumero('.')
})
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

function limpar() {
    if (on == true) {
        var caracteres = document.getElementById('caracteres')
        caracteres.innerText = ''
    }    
}

// função para digitar os números
function digitaNumero(n1) { // essa função é chamada dentro do verificaWidthVisor
    if (on == true) {
        verificaWidthVisor('digito', n1)
    }    
}


// rotinas de verificação
function verificaUltimoNumero() { //para que não se repita sinais, ex:1++1
    // aqui eu pego o ultimo caracter
    var caracteres = document.getElementById('caracteres').innerText
    var ultimoCaracter = caracteres.charAt(caracteres.length - 1)

    //verifico se é numero ou nao e tbm se nao esta vazio
    if ((isNaN(ultimoCaracter)) | (caracteres == '')) {
        return false // aqui cai quando não é número
    }
    else{
        return true // aqui cai quando é número
    }
}

function verificaWidthVisor(origem, caracteresVisor) {
    var caracteres = document.getElementById('caracteres')

    if (origem == 'digito') {
        caracteres.innerText += caracteresVisor
        if (caracteres.clientWidth > 240) { // aqui para nao permitir se digitar mais do que cabe no visor
            var tiraUltimoCaracter = caracteres.innerText.replace(/.$/, '')
            caracteres.innerText = tiraUltimoCaracter
        }
    }

    else if (origem == 'resultado'){
        var guardaOperacao = caracteresVisor
        caracteres.innerText = eval(caracteresVisor)
        if (caracteres.clientWidth > 240) {
            var caracteresTxt = caracteres.innerText.toString()
            caracteres.innerText = caracteresTxt
                        
            while (caracteres.clientWidth > 240){
                caracteres.innerText = caracteres.innerText.replace(/.$/, '')
            }

            ultimaConta.innerText = `${caracteres.innerText} = ${eval(caracteres.innerText)}`
        }
        else{
            ultimaConta.innerText = `${guardaOperacao} = ${eval(caracteres.innerText)}`
        }
    }
    
    else if (origem == 'operacao'){
        if (caracteres.clientWidth < 210) { // aqui para nao permitir se digitar mais do que cabe no visor
            caracteres.innerText += caracteresVisor
        }
    }
}

// funções para operações
function resultado() {
    if (on == true) {
        if (verificaUltimoNumero() == true) {
            var caracteres = document.getElementById('caracteres')
            verificaWidthVisor('resultado', caracteres.innerText)
        }
    }
    
}

function soma() {
    if (on == true) {
        if (verificaUltimoNumero() == true) {     
            verificaWidthVisor('operacao', '+')
        }             
    }
}
function subtracao() {
    if (on == true) {
        if (verificaUltimoNumero() == true) {
            verificaWidthVisor('operacao', '-')
        }             
    }
}
function multiplicacao() {
    if (on == true) {
        if (verificaUltimoNumero() == true) {
            verificaWidthVisor('operacao', '*')
        }             
    }
}
function divisao() {
    if (on == true) {
        if (verificaUltimoNumero() == true) {
            verificaWidthVisor('operacao', '/')
        }             
    }
}





