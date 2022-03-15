var simboloDaVez = 'xis'

var bloco11Check, bloco12Check, bloco13Check, bloco21Check, bloco22Check, bloco23Check, bloco31Check, bloco32Check, bloco33Check

var rodadas = 0

var tituloEndgame = document.getElementsByTagName('h2')[0]
var subtituloEndgame = document.getElementsByTagName('h3')[1]
var tituloVezDeQuem = document.getElementsByTagName('h3')[0]

function posiciona() {
    var top = 100
    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.position = 'relative'
            obj.style.top = top+'px'
            obj.style.left = '100px'
            top -= 95
        }
    }

    top = -712.5   // para deixar o Y no centro do bloco
    var left = 172.5
    for (let i = 1; i < 3; i++) {
        obj = document.getElementById('coluna'+[i])
        obj.style.position = 'relative'
        obj.style.left = left + "px"
        obj.style.top = top  +'px'        
        obj.style.transform = 'rotate(90deg)'
        obj.style.transition = 'all 1s'
        // pra proxima coluna
        top -=5
        left -= 100
    }

    top = -770
    for (let i = 1; i < 3; i++) {
        obj = document.getElementById('linha'+[i])
        obj.style.position = 'relative'
        obj.style.left = '122.5px'
        obj.style.top = top+'px'
        obj.style.transition = 'all 1s'
        top += 95
    }

    tituloVezDeQuem.style.color = 'transparent'
    tituloVezDeQuem.style.fontSize = '0.1px'
    tituloVezDeQuem.style.height = '10px'    
    tituloVezDeQuem.style.position = 'relative'
    tituloVezDeQuem.style.top = '100px'

    tituloVezDeQuem.style.transition = 'all 1s'

    tituloVezDeQuem.innerHTML = 'Quem joga agora: <span id="spanX"></span><span id="spanBolinha"></span> '

}
posiciona()
    

function start() {

    bloco11Check = 0
    bloco12Check = 0
    bloco13Check = 0
    bloco21Check = 0
    bloco22Check = 0
    bloco23Check = 0
    bloco31Check = 0
    bloco32Check = 0
    bloco33Check = 0

    rodadas = 0
    tituloEndgame.innerHTML = ''
    subtituloEndgame.innerHTML = ''

    if (simboloDaVez == 'xis'){
        tituloVezDeQuem.innerHTML = 'Quem joga agora é: "X"'
    }
    else{
        tituloVezDeQuem.innerHTML = 'Quem joga agora é: "O"'
    }

    
    

    tituloEndgame.style.fontSize = '0.1px'
    subtituloEndgame.style.fontSize = '0.1px'

    tituloVezDeQuem.style.color = 'black'
    tituloVezDeQuem.style.top = '-30px'
    tituloVezDeQuem.style.height = '0px'
    tituloVezDeQuem.style.fontSize = '1.1em'
    tituloVezDeQuem.style.fontWeight = 'normal'

    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.cursor = 'pointer'
            obj.setAttribute('onclick', 'marcar'+[c]+[l]+'()') 

            /* cria o x1 */
            var div1 = document.createElement('div')
            div1.setAttribute('id', 'div' + [c]+[l] + 'x1')
            obj.appendChild(div1)

            /* css do x1*/
            var divx1css = document.getElementById('div' + [c]+[l] + 'x1')
            divx1css.style.backgroundColor = 'transparent'
            divx1css.style.height = '5px'
            divx1css.style.width = '0px'
            divx1css.style.transform = 'rotate(135deg)'
            /*
            divx1css.style.position = 'relative'
            divx1css.style.top = '40px'
            */
            divx1css.style.transition = 'all 0.5s'
            divx1css.style.transitionDelay = '0.3s'



            var div2 = document.createElement('div')
            div2.setAttribute('id', 'div' + [c]+[l] + 'x2')
            obj.appendChild(div2)

            /* css do x2*/
            var divx2css = document.getElementById('div' + [c]+[l] + 'x2')
            divx2css.style.backgroundColor = 'transparent'
            divx2css.style.height = '5px'
            divx2css.style.width = '0px'
            divx2css.style.transform = 'rotate(45deg)'
            divx2css.style.position = 'relative'
            divx2css.style.top = '-5px'
            divx2css.style.transition = 'all 0.5s'


            /* cria a bolinha */
            var div = document.createElement('div')
            div.setAttribute('id', 'div' + [c]+[l] + 'bolinha')
            div.setAttribute('class', 'bolinha')
            obj.appendChild(div)

            /* css da bolinha */
            var divbolinha = document.getElementById('div' + [c]+[l] + 'bolinha')
            divbolinha.style.backgroundColor = 'transparent'
            divbolinha.style.height = '0px'
            divbolinha.style.width = '0px'
            divbolinha.style.borderRadius = '100%'
            divbolinha.style.boxSizing = 'border-box'
            divbolinha.style.border = '0px solid transparent'
            divbolinha.style.position = 'relative'
            divbolinha.style.top = '-5px'
            divbolinha.style.transition = 'all 0.5s'



            
            
            /* cria os efeitos quando passa o mouse em cima */
            document.getElementById('bloco'+[c]+[l]).onmouseover = function () {

                this.style.transition = 'background-color 0.5s'
                this.style.backgroundColor = 'rgba(128, 0, 128, 0.5)'
            }
            document.getElementById('bloco'+[c]+[l]).onmouseout = function () {
                this.style.backgroundColor = 'rgba(128, 0, 128, 0.2)'
                this.style.transition = 'background-color 1s'

            }
        }
    }

    var bloco11 = document.getElementById('bloco11')
    bloco11.style.transform = 'translate(-100px, -100px)'

    var bloco12 = document.getElementById('bloco12')
    bloco12.style.transform = 'translate(0px, -100px)'

    var bloco13 = document.getElementById('bloco13')
    bloco13.style.transform = 'translate(100px, -100px)'

    var bloco21 = document.getElementById('bloco21')
    bloco21.style.transform = 'translate(-100px, 0px)'

    var bloco22 = document.getElementById('bloco22')
    bloco22.style.transform = 'translate(0px, 0px)'

    var bloco23 = document.getElementById('bloco23')
    bloco23.style.transform = 'translate(100px, 0px)'

    var bloco31 = document.getElementById('bloco31')
    bloco31.style.transform = 'translate(-100px, 100px)'

    var bloco32 = document.getElementById('bloco32')
    bloco32.style.transform = 'translate(0px, 100px)'

    var bloco33 = document.getElementById('bloco33')
    bloco33.style.transform = 'translate(100px, 100px)'

    
    var coluna1 = document.getElementById('coluna1')
    coluna1.style.width = '295px'
    coluna1.style.left = '50px'
    coluna1.style.top = '-710px'

    var coluna2 = document.getElementById('coluna2')
    coluna2.style.width = '295px'
    coluna2.style.left = '-50px'
    coluna2.style.top = '-715px'

    var linha1 = document.getElementById('linha1')
    linha1.style.width = '295px'
    linha1.style.left = '0px'

    var linha2 = document.getElementById('linha2')
    linha2.style.width = '295px'
    linha2.style.left = '0px'

    var obj = document.getElementById('btnIniciar')
    obj.setAttribute('onclick', 'back()')   
    obj.innerHTML = 'REINICIAR'  


}

function back() {

    tituloEndgame.style.fontSize = '0.1px'
    tituloEndgame.style.color = 'transparent'
    subtituloEndgame.style.fontSize = '0.1px'
    subtituloEndgame.style.color = 'transparent'
    tituloVezDeQuem.style.fontSize = '0.1px'
    tituloVezDeQuem.style.color = 'transparent'

    tituloVezDeQuem.style.color = 'transparent'
    tituloVezDeQuem.style.fontSize = '0.1px'
    tituloVezDeQuem.style.height = '10px'    
    tituloVezDeQuem.style.transition = 'all 1s'
    tituloVezDeQuem.style.position = 'relative'
    tituloVezDeQuem.style.top = '120px'
    

    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.cursor = 'default'
            obj.style.transition = 'all 1s'
            obj.setAttribute('onclick', '')
            obj.style.backgroundColor = 'rgba(128, 0, 128, 0.2)'

            /* css pra desaparecer*/
            var divx1 = document.getElementById('div'+[c]+[l]+ 'x1')
            divx1.style.width = '0px'
            divx1.style.backgroundColor = 'transparent'  

            var divx2 = document.getElementById('div'+[c]+[l]+ 'x2')
            divx2.style.width = '0px'
            divx2.style.backgroundColor = 'transparent'  
            
            var divbolinha = document.getElementById('div'+[c]+[l]+ 'bolinha')
            divbolinha.style.width = '0px'
            divbolinha.style.height = '0px'
            divbolinha.style.border = '0px solid transparent'  
            
        }
    }

    var bloco11 = document.getElementById('bloco11')
    bloco11.style.transform = 'translate(0px, 0px)'

    var bloco12 = document.getElementById('bloco12')
    bloco12.style.transform = 'translate(0px, 0px)'

    var bloco13 = document.getElementById('bloco13')
    bloco13.style.transform = 'translate(0px, 0px)'

    var bloco21 = document.getElementById('bloco21')
    bloco21.style.transform = 'translate(0px, 0px)'

    var bloco22 = document.getElementById('bloco22')
    bloco22.style.transform = 'translate(0px, 0px)'

    var bloco23 = document.getElementById('bloco23')
    bloco23.style.transform = 'translate(0px, 0px)'

    var bloco31 = document.getElementById('bloco31')
    bloco31.style.transform = 'translate(0px, 0px)'

    var bloco32 = document.getElementById('bloco32')
    bloco32.style.transform = 'translate(0px, 0px)'

    var bloco33 = document.getElementById('bloco33')
    bloco33.style.transform = 'translate(0px, 0px)'

    var coluna1 = document.getElementById('coluna1')
    coluna1.style.width = '50px'
    coluna1.style.left = '172.5px'
    coluna1.style.top = '-712px'

    var coluna2 = document.getElementById('coluna2')
    coluna2.style.width = '50px'
    coluna2.style.left = '75px'
    coluna2.style.top = '-715px'

    var linha1 = document.getElementById('linha1')
    linha1.style.width = '50px'
    linha1.style.left = '122.5px'

    var linha2 = document.getElementById('linha2')
    linha2.style.width = '50px'
    linha2.style.left = '122.5px'

    var obj = document.getElementById('btnIniciar')
    obj.setAttribute('onclick', 'start()')   
    obj.innerHTML = 'INICIAR'  
}



function marcar(posicao) {    

    if (simboloDaVez == 'xis') {
        /* se é x */
        var obj1 = document.getElementById('div' + posicao + 'x1')
        obj1.style.width = '60px'
        obj1.style.backgroundColor = 'black'  

        var obj2 = document.getElementById('div' + posicao + 'x2')
        obj2.style.width = '60px'
        obj2.style.backgroundColor = 'black'  

        checar()
        simboloDaVez = 'bolinha'
        tituloVezDeQuem.innerHTML = 'Quem joga agora é: "O"'

    }
    else{
        /* ou bolinha */
        var obj1 = document.getElementById('div' + posicao + 'bolinha')
        obj1.style.width = '50px'
        obj1.style.height = '50px'
        obj1.style.border = '5px solid black'  

        checar()
        simboloDaVez = 'xis'    
        tituloVezDeQuem.innerHTML = 'Quem joga agora é: "X"'

    }

}


function checar() {

    rodadas += 1

    if (bloco11Check == simboloDaVez && bloco12Check == simboloDaVez && bloco13Check == simboloDaVez){
        endgame()
    }
    else if (bloco21Check == simboloDaVez && bloco22Check == simboloDaVez && bloco23Check == simboloDaVez){
        endgame()
    }
    else if (bloco31Check == simboloDaVez && bloco32Check == simboloDaVez && bloco33Check == simboloDaVez){
        endgame()
    }

    
    else if (bloco11Check == simboloDaVez && bloco21Check == simboloDaVez && bloco31Check == simboloDaVez){
        endgame()
    }
    else if (bloco12Check == simboloDaVez && bloco22Check == simboloDaVez && bloco32Check == simboloDaVez){
        endgame()
    }
    else if (bloco13Check == simboloDaVez && bloco23Check == simboloDaVez && bloco33Check == simboloDaVez){
        endgame()
    }

    else if (bloco11Check == simboloDaVez && bloco22Check == simboloDaVez && bloco33Check == simboloDaVez){
        endgame()
    }
    else if (bloco13Check == simboloDaVez && bloco22Check == simboloDaVez && bloco31Check == simboloDaVez){
        endgame()
    }
    
    else if (rodadas == 9){
        endgame(empate = 1)
    }
    
}


function endgame(empate = 0) {

    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.cursor = 'default'
            obj.style.transition = 'all 1s'
            obj.setAttribute('onclick', '')
        }
    }

    tituloEndgame.style.transition = 'all 1s'
    tituloEndgame.style.fontSize = '2em'
    tituloEndgame.style.color = 'black'

    subtituloEndgame.style.transition = 'all 1s'
    subtituloEndgame.style.marginTop = '-20px'    
    subtituloEndgame.style.fontSize = '1.5em'
    subtituloEndgame.style.fontWeight = 'normal'
    subtituloEndgame.style.color = 'black'


    if (simboloDaVez == 'xis') {
        
        tituloEndgame.innerHTML = 'Vitória!!!!'
        subtituloEndgame.innerHTML = `"X" ganhou.`
    }
    else if (simboloDaVez == 'bolinha'){
        tituloEndgame.innerHTML = 'Vitória!!!!'
        subtituloEndgame.innerHTML = `"O" ganhou.`
    }

    if (empate == 1){
        tituloEndgame.innerHTML = 'Empate!'
        subtituloEndgame.innerHTML = `Ninguém ganhou.`
    }
    
}

function marcar11() {
    if (bloco11Check == 0){
        bloco11Check = simboloDaVez
        marcar(11)   
    }
    
}
function marcar12() {
    if (bloco12Check == 0){
        bloco12Check = simboloDaVez
        marcar(12)   
    }
    
}
function marcar13() {  
    if (bloco13Check == 0){
        bloco13Check = simboloDaVez
        marcar(13)   
    }
}

function marcar21() {  
    if (bloco21Check == 0){
        bloco21Check = simboloDaVez
        marcar(21)   
    } 
}
function marcar22() {
    if (bloco22Check == 0){
        bloco22Check = simboloDaVez
        marcar(22)   
    }
}
function marcar23() {
    if (bloco23Check == 0){
        bloco23Check = simboloDaVez
        marcar(23)   
    }
}

function marcar31() {
    if (bloco31Check == 0){
        bloco31Check = simboloDaVez
        marcar(31)   
    }
}
function marcar32() {
    if (bloco32Check == 0){
        bloco32Check = simboloDaVez
        marcar(32)   
    }
}
function marcar33() {
    if (bloco33Check == 0){
        bloco33Check = simboloDaVez
        marcar(33)   
    }
}
