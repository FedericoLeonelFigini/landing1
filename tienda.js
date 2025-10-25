// ===== REDIRECCIÓN A WHATSAPP =====
const botones = document.querySelectorAll(".btn-wpp");

botones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    const producto = boton.dataset.producto;
    const mensaje = encodeURIComponent(`Hola 👋, quiero pedir información sobre: ${producto}`);
    const numero = "5491141999497";
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
  });
});

// ===== FUNCIÓN VOLVER ATRÁS =====
const volverAtras = document.getElementById("volver-atras");

if (volverAtras) {
  volverAtras.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      history.back();
    } else {
      window.location.href = "index.html"; // Fallback si no hay historial previo
    }
  });
}
