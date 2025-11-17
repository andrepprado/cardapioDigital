const backgroundImages = [
    './img/background/EspetinhosFC-119.jpg',
    './img/background/Espetinhos-108.jpg',
    './img/background/Espetinhos-080.jpg',
    './img/background/Espetinhos-016.jpg',
    './img/background/Espetinhos-010.jpg',
    './img/background/Espetinhos-076.jpg'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
}

function setRandomBackground() {
    const backgroundContainer = document.querySelector('.background-container');
    const randomImage = getRandomImage();

    const newBackground = document.createElement('div');
    newBackground.classList.add('background-image', 'hide');
    newBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.801), rgba(0, 0, 0, 0.692)), url(${randomImage})`;

    backgroundContainer.appendChild(newBackground);

    const oldBackground = backgroundContainer.querySelector('.background-image:not(.hide)');
    if (oldBackground) {
        oldBackground.classList.add('fade-out');
        setTimeout(() => {
            backgroundContainer.removeChild(oldBackground);
        }, 1000);
    }

    setTimeout(() => {
        newBackground.classList.remove('hide');
    }, 100);
}

setRandomBackground();

setInterval(() => {
    setRandomBackground();
}, 5000);
