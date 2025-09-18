let indiceSlide = 1;
const slides = document.querySelectorAll('#carrossel img');
const totalSlides = slides.length;
const tempoIntervalo = 10000;
let intervaloSlide = setInterval(proximoSlide, tempoIntervalo);

function exibirSlide(n) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[n - 1].classList.add('ativo');
    atualizarBotoesRadio();
}

function proximoSlide() {
        indiceSlide = (indiceSlide % totalSlides) + 1;
        exibirSlide(indiceSlide);
}

function anteriorSlide() {
        clearInterval(intervaloSlide);
        indiceSlide = (indiceSlide - 2 + totalSlides) % totalSlides + 1;
        exibirSlide(indiceSlide);
        intervaloSlide = setInterval(proximoSlide, tempoIntervalo);
}

function mudarSlide(n) {
    clearInterval(intervaloSlide);
        indiceSlide = n;
        exibirSlide(indiceSlide);
        intervaloSlide = setInterval(proximoSlide, tempoIntervalo);
}

function atualizarBotoesRadio() {
    document.querySelectorAll('.controles input[type="radio"]').forEach((radio, index) => {
        radio.checked = (index + 1 === indiceSlide);
    });
}