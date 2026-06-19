// ═══════════════════════════════════════════
//   LÓGICA GLOBAL — Sonata Escuela de Arte
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎶 Sonata Escuela de Arte - Sistema Inicializado');

    // --- LÓGICA DEL CARRUSEL ---
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 4000; // Cambia de foto cada 4 segundos (4000ms)

    if (slides.length > 0) {
        setInterval(() => {
            // Quitamos la clase 'active' de la imagen actual
            slides[currentSlide].classList.remove('active');
            
            // Calculamos cuál es la siguiente imagen (vuelve a 0 si llega al final)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Ponemos la clase 'active' a la nueva imagen
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // --- LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA) ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    // Al hacer clic en la hamburguesa, abrimos/cerramos el menú
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Truco pro: Cerrar el menú automáticamente si el usuario hace clic en un enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

    // Aquí podrás agregar en el futuro la lógica del menú móvil
    // o animaciones globales al hacer scroll (Intersection Observers).
});