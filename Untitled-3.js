// Añadir clases de animación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const about = document.querySelector('.about');

    banner.classList.add('fadeIn');
    about.classList.add('slideIn');
});
