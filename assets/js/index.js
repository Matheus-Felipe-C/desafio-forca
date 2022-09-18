const btn = document.getElementById('btn')
const canvas = document.getElementById('jogo')
btn.addEventListener("click", escolherPalavra)

let palavras = ['papagaio', 'teste', 'banana', 'batata']

function escolherPalavra() {
    let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
    console.log(palavraSecreta)
    desenharPalavra(palavraSecreta)
}

function desenharPalavra(palavra) {
    if (canvas.getContext) {
        const caneta = canvas.getContext('2d')
        let x = 25;

        for(let i = 0; i < palavra.length; i++) {
            caneta.fillStyle = '#0A3871'
            caneta.fillRect(x, 125, 25, 2)

            x += 35
        }
    }
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