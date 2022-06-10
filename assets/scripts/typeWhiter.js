
const title_intro = document.getElementById('title_intro');

function typeWhiter(titulo) {
    const textoArray = titulo.innerHTML.split('');
    titulo.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            titulo.innerHTML += letra;
        }, 60 * i)
    })
}

typeWhiter(title_intro)