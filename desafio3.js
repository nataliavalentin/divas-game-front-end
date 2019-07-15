let certo = document.querySelector('.certo')
let errado = document.querySelector('.errado')
let respostaCorreta = document.querySelector('section')
let respostaErrada = document.querySelector('header')

certo.addEventListener("click", () => {
    respostaCorreta.style.visibility = 'visible'
    respostaErrada.remove()
})


errado.addEventListener("click", () => {
    respostaErrada.style.visibility = 'visible'
    respostaCorreta.remove()
    console.log('errou')
})