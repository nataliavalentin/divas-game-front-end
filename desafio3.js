let html1 = document.querySelector('.desafioTags0')
let body1 = document.querySelector('.desafioTags1')
let body2 = document.querySelector('.desafioTags2')
let html2 = document.querySelector('.desafioTags3')
let corrigir = document.querySelector('.corrigir')
let limpar = document.querySelector('#limpar')
let linha = document.querySelector('#linha')
let respostaCorreta = document.querySelector('section')
let respostaErrada = document.querySelector('header')
let lista = []

html1.addEventListener("click", () => {
    html1.style.backgroundColor = "#b6c3d6";
    lista.push(0)
    console.log(lista)
    let criar0 = document.createElement('div')
    criar0.setAttribute('class', 'criar0')
    criar0.innerHTML = `
    <button class="desafioTags0">< html ></button>
    `
    linha.appendChild(criar0)

})

body1.addEventListener("click", () => {
    body1.style.backgroundColor = "#b6c3d6";
    lista.push(1)
    console.log(lista)
    let criar1 = document.createElement('div')
    criar1.setAttribute('class', 'criar1')
    criar1.innerHTML = `
    <button class="desafioTags1">< body ></button>
    `
    linha.appendChild(criar1)

})

body2.addEventListener("click", () => {
    body2.style.backgroundColor = "#b6c3d6";
    lista.push(2)
    console.log(lista)
    let criar2 = document.createElement('div')
    criar2.setAttribute('class', 'criar2')
    criar2.innerHTML = `
    <button class="desafioTags2">< /body ></button>
    `
    linha.appendChild(criar2)
})

html2.addEventListener("click", () => {
    html2.style.backgroundColor = "#b6c3d6";
    lista.push(3)
    console.log(lista)
    let criar3 = document.createElement('div')
    criar3.setAttribute('class', 'criar3')
    criar3.innerHTML = `
    <button class="desafioTags3">< /html ></button>
    `
    linha.appendChild(criar3)
})

limpar.addEventListener("click", () => {
    html1.style.backgroundColor = "#220458";
    html2.style.backgroundColor = "#220458";
    body1.style.backgroundColor = "#220458";
    body2.style.backgroundColor = "#220458";
    linha.innerHTML = " "
    lista = []
    respostaErrada.style.visibility = 'hidden'
    respostaCorreta.style.visibility = 'hidden'

})

corrigir.addEventListener("click", () => {
    let correcao = [0, 1, 2, 3]
    let myCorrecao = correcao.toString()
    let myLista = lista.toString()
    console.log(myCorrecao)
    console.log(myLista)
    if (myCorrecao === myLista) {
        console.log('asertou miserável')
        respostaCorreta.style.visibility = 'visible'



    } else {
        console.log('tdo errado')
        respostaErrada.style.visibility = 'visible'
        respostaCorreta.style.display = 'none'
    }

})