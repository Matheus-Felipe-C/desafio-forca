window.onload = () => desenharPalavra(palavraSecreta)
const btn = document.getElementById('btn')
const canvas = document.getElementById('jogo')
btn.addEventListener("click", escolherPalavra)
document.addEventListener('keypress', (event) => verificaPalavra(event.key))

let palavras = ['papagaio', 'teste', 'banana', 'batata']
let palavraSecreta = escolherPalavra()
let xAxis = 25;

function escolherPalavra() {
    let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
    console.log(palavraSecreta)
    return palavraSecreta
}

function desenharPalavra(palavra) {
    if (canvas.getContext) {
        const caneta = canvas.getContext('2d')
        let x = 25

        for(let i = 0; i < palavra.length; i++) {
            caneta.fillStyle = '#0A3871'
            caneta.fillRect(x, 125, 25, 2)

            x += 35
        }
    }
}

function verificaPalavra(letra) {
    if ((/[a-zA-Z]/).test(letra)) {
        const caneta = canvas.getContext('2d')
        caneta.font = '16px Arial'
        caneta.fillText(letra, xAxis, 120)
        xAxis += 25


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