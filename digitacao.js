const texts = [
    "Bem vindo ao seu novo local favorito.",
    "Descubra nossa paixão pelo churrasco.",
    "Conheça nossas unidades."
];

let index = 0;
let charIndex = 0;
const speed = 125; // Ajuste a velocidade da digitação
const eraseSpeed = 125; // Velocidade do cursor

function typeWriter() {
    const currentText = texts[index];

    if (charIndex <= currentText.length) {
        document.querySelector('.text-animation').textContent = currentText.substring(0, charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        charIndex = currentText.length;
        setTimeout(eraseText, eraseSpeed);
    }
}

function eraseText() {
    const currentText = texts[index];
    if (charIndex >= 0) {
        document.querySelector('.text-animation').textContent = currentText.substring(0, charIndex);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        index = (index + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
