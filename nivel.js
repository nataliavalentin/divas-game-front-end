let botao = document.querySelector("button")
let nav = document.querySelector("nav")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
cards = document.querySelectorAll(".facil")
h1 = document.querySelector("h1")
section = document.querySelector("section")

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.border = "4px solid #FF43A3"

    })
})

function trocarCor() {
    p1.style.color = "white"
    p2.style.color = "#FF43A3"
    p3.style.color = "white"
}

botao.onclick = trocarCor;