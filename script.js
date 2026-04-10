/* ================================================
  LÓGICA: Death Hunters | Portal del Nexo
  ================================================
*/

// Esperamos a que todo el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("¡El Nexo se ha estabilizado! Sistema de Death Hunters en línea.");

    // 1. Funcionalidad mejorada para el botón de acción principal
    const nexusButton = document.querySelector(".btn-nexus");
    
    if (nexusButton) {
        nexusButton.addEventListener("click", () => {
            // Un mensaje más épico
            alert("¡Conexión Iniciada! Los registros de replays de la TLHT y las estadísticas avanzadas del Roster se están sincronizando con tus sistemas. Prepárate para la batalla.");
        });
    }

    // 2. Interactividad opcional para las tarjetas
    // (Ahora ya giran con CSS, pero podemos añadir un sonido o log al revés)
    const playerCards = document.querySelectorAll(".player-card");
    
    playerCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const playerName = card.querySelector(".player-name").innerText;
            console.log(`Analizando estadísticas de batalla: ${playerName}`);
        });
    });

    // 3. (Opcional) Funcionalidad para animar elementos al hacer scroll
    // Usamos el Intersection Observer API
    const animOnScroll = document.querySelectorAll(".anim-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Añadimos una clase que activa la animación
                entry.target.style.animation = "fadeUp 0.8s ease-out forwards";
                entry.target.style.opacity = "1";
                observer.unobserve(entry.target); // Dejamos de observarlo una vez animado
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    animOnScroll.forEach(element => {
        element.style.opacity = "0"; // Asegurar que empiecen invisibles
        observer.observe(element);
    });

});