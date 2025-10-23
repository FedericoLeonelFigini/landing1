// Esperar a que todo el contenido del DOM esté listo
document.addEventListener("DOMContentLoaded", () => {

  // Loader (si ya lo tenés)
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 600);
    });
  }

  // Control de música (solo si existe en la página)
  const musica = document.getElementById("musica-fondo");
  const btnMusica = document.getElementById("toggle-musica");
  if (musica && btnMusica) {
    btnMusica.addEventListener("click", () => {
      if (musica.paused) {
        musica.play();
        btnMusica.textContent = "🔊";
      } else {
        musica.pause();
        btnMusica.textContent = "🔇";
      }
    });
  }

  // Scroll suave para los enlaces del encabezado
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = document.querySelector(enlace.getAttribute("href"));
      if (destino) destino.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ==== Acordeón FAQ ====
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;

      // Si querés que solo haya UNA pregunta abierta:
      faqButtons.forEach((other) => {
        if (other !== btn) {
          other.parentElement.classList.remove("active");
        }
      });

      // Alternar el item clickeado
      item.classList.toggle("active");
    });
  });

});
