let entrarLoginUsername = document.querySelector('#entrarLoginUsername')
let username2 = document.getElementById('loginUsername')
let senha2 = document.getElementById('senhaUsername')



entrarLoginUsername.addEventListener('click', () => {
    fundo.style.display = 'none',
        event.preventDefault()
    fetch('https://divasgameapi.herokuapp.com/divas/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',

        },
        body: JSON.stringify({
            "username": username2.value,
            "senha": senha2.value
        })
    })


    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data)
        console.log("foi")

        fetch('https://divasgameapi.herokuapp.com/divas')
            .then((response) => {
                return response.json()
            })
            .then((API) => {
                console.log(API)
                let acheiemail = (username2.value).toString()
                console.log(acheiemail)
                for (let i = 0; i <= API.length - 1; i++) {
                    if (API[i].username == acheiemail) {
                        console.log(API[i]._id)
                        alert('Bem vinda, ' + API[i].username + '!')
                    }
                }
            })
            .catch(function(erro) {
                console.log(erro)
            })
    })

    .catch(function(erro) {
        console.log(erro)
    })
});