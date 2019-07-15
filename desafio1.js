let tagEsquerda = document.querySelector('.desafioTags0')
let tagHtml = document.querySelector('.desafioTags1')
let tagDireita = document.querySelector('.desafioTags2')
let corrigir = document.querySelector('.corrigir')
let limpar = document.querySelector('#limpar')
let linha = document.querySelector('#linha')
let respostaCorreta = document.querySelector('section')
let respostaErrada = document.querySelector('header')
let lista = []

limpaContador();

tagEsquerda.addEventListener("click", () => {
    tagEsquerda.style.backgroundColor = "#b6c3d6";
    lista.push(0)
    console.log(lista)
    let criar0 = document.createElement('div')
    criar0.setAttribute('class', 'criar0')
    criar0.innerHTML = `
    <button class="desafioTags0"><</button>
    `
    linha.appendChild(criar0)

})

tagDireita.addEventListener("click", () => {
    tagDireita.style.backgroundColor = "#b6c3d6";
    lista.push(2)
    console.log(lista)
    let criar2 = document.createElement('div')
    criar2.setAttribute('class', 'criar2')
    criar2.innerHTML = `
    <button class="desafioTags2">></button>
    `
    linha.appendChild(criar2)

})

tagHtml.addEventListener("click", () => {
    tagHtml.style.backgroundColor = "#b6c3d6";
    lista.push(1)
    console.log(lista)
    let criar1 = document.createElement('div')
    criar1.setAttribute('class', 'criar1')
    criar1.innerHTML = `
    <button class="desafioTags1">html</button>
    `
    linha.appendChild(criar1)
})

limpar.addEventListener("click", () => {
    tagDireita.style.backgroundColor = "#220458";
    tagEsquerda.style.backgroundColor = "#220458";
    tagHtml.style.backgroundColor = "#220458";
    linha.innerHTML = " "
    lista = []
    respostaErrada.style.visibility = 'hidden'
    respostaCorreta.style.visibility = 'hidden'

})

corrigir.addEventListener("click", () => {
    let correcao = [0, 1, 2]
    let myCorrecao = correcao.toString()
    let myLista = lista.toString()
    console.log(myCorrecao)
    console.log(myLista)
    if (myCorrecao === myLista) {
        console.log('asertou miserável')
        respostaCorreta.style.visibility = 'visible'
        limpar.disabled = true
        corrigir.disabled = true
        contador()




    } else {
        console.log('tdo errado')
        respostaErrada.style.visibility = 'visible'
        respostaCorreta.remove()
        limpar.disabled = true
        corrigir.disabled = true
    }

})