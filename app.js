let key = document.querySelector('.keySpan')
let keyCode = document.querySelector('.keyCodeSpan')
let code = document.querySelector('.codeSpan')
window.addEventListener('keydown', (event) => {
    document.querySelector('.result').classList.add('show')
    document.querySelector('.text').classList.add('hidden')
    key.innerHTML = event.key
    keyCode.innerHTML = event.keyCode
    code.innerHTML = event.code
    if (event.code == 'Space') {
        key.innerHTML = 'Space'
    }
})