const titulo = document.querySelector('.titulo-home');

function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })

}

typeWritter(titulo);