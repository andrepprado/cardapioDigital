/*const text = "Bem vindo ao seu novo local favorito.";
let index = 0;
const speed = 100; // Ajuste a velocidade da digitação

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.text-animation').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Chame a função para começar a digitação
typeWriter();

let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    //document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})


const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let counter = 0;
const carouselImages = document.querySelectorAll('.image');

const slideWidth = carouselImages[0].clientWidth;

nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length - 1;
    } else {
        counter--;
    }
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});


*/
/*
//Menu Toggle
let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

//Efeito Digitação
const text = "Bem vindo ao seu novo local favorito.";
let index = 0;
const speed = 100; // Ajuste a velocidade da digitação

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.text-animation').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

//Carrossel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let counter = 0;
const carouselImages = document.querySelectorAll('.image');
const slideWidth = carouselImages[0].clientWidth;

nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length - 1;
    } else {
        counter--;
    }
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});
*/
// Menu Toggle
let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuContent.classList.toggle('on', show);
    show = !show;
});

// Efeito Digitação
const text = "Bem vindo ao seu novo local favorito.";
let index = 0;
const speed = 100; // Ajuste a velocidade da digitação

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.text-animation').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// Carrossel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let counter = 0;
const carouselImages = document.querySelectorAll('.image');

if (carouselImages.length > 0) {
    let slideWidth = carouselImages[0].clientWidth;

    // Ajustar largura ao redimensionar
    window.addEventListener("resize", () => {
        slideWidth = carouselImages[0].clientWidth;
        moveCarousel();
    });

    // Função para mover o carrossel
    const moveCarousel = () => {
        carousel.style.transition = "transform 0.3s ease-in-out";
        carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
    };

    nextButton.addEventListener('click', () => {
        counter = (counter >= carouselImages.length - 1) ? 0 : counter + 1;
        moveCarousel();
    });

    prevButton.addEventListener('click', () => {
        counter = (counter <= 0) ? carouselImages.length - 1 : counter - 1;
        moveCarousel();
    });
}

// Garantir que "Ver Cardápio" abre na mesma aba

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".link-cardapio a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita comportamento padrão
            window.location.href = this.getAttribute("href"); // Abre na mesma aba
        });
    });
});


// Garantir que "Ver Cardápio" abre na mesma aba
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".link-cardapio a").forEach(link => {
        link.removeAttribute("target"); // Remove qualquer target="_blank"
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita comportamento padrão
            window.location.href = this.getAttribute("href"); // Abre na mesma aba
        });
    });
});