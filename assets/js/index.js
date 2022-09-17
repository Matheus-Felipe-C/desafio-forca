const btn = document.getElementById('btn')
btn.addEventListener("click", escolherPalavra)

let palavras = ["jogo", "teste", 'banana']

function escolherPalavra() {
    let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
    console.log(palavraSecreta)
}

function irAdd() {
    location.href = '../../addPalavra.html'
}

function irHome() {
    location.href = '../../index.html'
}

function iniciarJogo() {
    location.href = '../../jogo.html'
}