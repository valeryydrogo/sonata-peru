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

    

    // Aquí podrás agregar en el futuro la lógica del menú móvil
    // o animaciones globales al hacer scroll (Intersection Observers).
});