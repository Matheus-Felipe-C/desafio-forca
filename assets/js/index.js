window.onload = () => desenharTracos(palavraSecreta)
const btn = document.getElementById('btn')
let forca = document.getElementById('forca')
btn.addEventListener("click", escolherPalavra)
document.addEventListener("keydown", (e) => {verificaPalavra(e)})

let palavras = ['papagaio']
let palavraSecreta = escolherPalavra()

function escolherPalavra() {
    let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
    console.log(palavraSecreta)
    return palavraSecreta
}

function desenharTracos(palavra) {
    let divPalavra = document.getElementById('holder')

    for(let i = 0; i < palavra.length; i++) {
        let tag = document.createElement('div')
        tag.classList.add('tracos')
        divPalavra.appendChild(tag)
    }
}

function verificaPalavra(letra) {
    if (/^[a-zA-Z]+$/.test(letra.key) && letra.key.length == 1) {
        console.log(letra.key)
    }
    else console.log('erro')
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