function limpaContador() {
    sessionStorage.setItem("score", 0);
}

function contador() {
    let count = sessionStorage.getItem("score");
    count++;
    console.log(count)
    sessionStorage.setItem("score", count);
}

function pegaScore() {
    return sessionStorage.getItem("score");
}