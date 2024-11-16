document.getElementById("background-video").playbackRate = 2; // Doble de rápido

const boton = document.getElementById('actionButton');
const niebla = document.querySelector('.niebla');

boton.addEventListener('click', () => {
    niebla.style.animationPlayState = 'running';
    niebla.style.opacity = 1; // Asegurarse de que la niebla sea visible al iniciar la animación

    setTimeout(() => {
        window.location.href = 'carta.html';
    }, 2000);
});