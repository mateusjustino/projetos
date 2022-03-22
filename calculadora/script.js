var on = false
var visor = document.getElementById('visor')
var btnOn = document.getElementById('btnOn')
var btnOff = document.getElementById('btnOff')


btnOn.addEventListener('click', ligaDesliga)
btnOff.addEventListener('click', ligaDesliga)

function ligaDesliga() {
    if (on == false) {
        visor.innerHTML = '|'
        on = true
    }
    else{
        visor.innerHTML = ''
        on = false  
    }
}