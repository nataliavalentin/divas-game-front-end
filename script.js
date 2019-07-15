let entrar = document.getElementById('entrar');
let fundo = document.getElementById('fundo');
let fundo2 = document.getElementById('fundo2');
let fecharLogin = document.getElementById('fechar-login');
let fecharCadastro = document.getElementById('fechar-cadastro');
let cadastro = document.getElementById('cadastro');
let cadastrese = document.querySelector('.cadastrese');
let decolar = document.querySelector('#decolar');
let popup = document.querySelector('#popupBemvinda');
let temporizador = document.querySelector('#temporizador');
let tempo = 5;
let foguete = document.querySelector('#foguete')

entrar.addEventListener('click', () => {
    fundo.style.visibility = 'visible';
})

cadastro.addEventListener('click', () => {
    fundo2.style.visibility = 'visible';
})

fecharLogin.addEventListener('click', () => {
    fundo.style.visibility = 'hidden';
})

fecharCadastro.addEventListener('click', () => {
    fundo2.style.visibility = 'hidden';
})

cadastrese.addEventListener('click', () => {
    fundo2.style.visibility = 'visible';
    fundo.style.visibility = 'hidden';
})

decolar.addEventListener('click', () => {
    popup.style.display = 'none'
    temporizador.style.display = 'block'
    temporizador.innerHTML = tempo;
    let interval = setInterval(
        function() {
            console.log(tempo);
            --tempo;
            temporizador.innerHTML = tempo;
            if (tempo == 0) {

                clearInterval(interval);
                foguete.style.display = 'block'
                temporizador.innerHTML = " "
            }
            setTimeout(function blabla() {
                window.location.replace("nivel.html")
                foguete.style.display = 'none'
                console.log('oi')
                fundo.remove()

            }, 8000);
        }, 1000)


})