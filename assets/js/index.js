window.onload = () => desenharPalavra(palavraSecreta)
const btn = document.getElementById('btn')
let forca = document.getElementById('forca')
btn.addEventListener("click", escolherPalavra)
document.addEventListener('keypress', (event) => verificaPalavra(event.key))

let palavras = ['papagaio']
let palavraSecreta = escolherPalavra()

function escolherPalavra() {
    let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
    console.log(palavraSecreta)
    return palavraSecreta
}

function desenharPalavra(palavra) {
    let divPalavra = document.getElementById('holder')

    for(let i = 0; i < palavra.length; i++) {
        let tag = document.createElement('div')
        tag.classList.add('tracos')
        divPalavra.appendChild(tag)
    }
}

function verificaPalavra(letra) {
    if ((/[a-zA-Z]/).test(letra)) {
        
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