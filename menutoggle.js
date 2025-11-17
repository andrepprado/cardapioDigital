const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.list-menu');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.list-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
