let erika = document.querySelector('#entrarCadastrar')
let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let email = document.getElementById('email')
let username = document.getElementById('username')
let senha = document.getElementById('senha')



erika.addEventListener('click', () => {
    fundo2.style.display = 'none',
        event.preventDefault()
    fetch('https://divasgameapi.herokuapp.com/divas/cadastro', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',

        },
        body: JSON.stringify({
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "email": email.value,
            "username": username.value,
            "senha": senha.value

        })
    })


    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data)
        window.location.reload()
    })

    .catch(function(erro) {
        console.log(erro)
    })
});