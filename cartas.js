// Seleccionamos la imagen
const carta = document.getElementById("carta");

// Función para cambiar la imagen y el tamaño
function cambiarCarta() {
  carta.src = "Carta definitiva.jpg";

  // Verificamos si estamos en un dispositivo móvil para ajustar el ancho
  if (window.innerWidth <= 480) {
    carta.style.width = "80%"; // Ajusta este valor según tus necesidades
  } else {
    carta.style.width = "33%";
  }
}

// Agregamos un evento de clic a la carta
carta.addEventListener('click', cambiarCarta);