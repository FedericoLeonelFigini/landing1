// ==== ESPERAR A QUE EL DOM CARGUE ====
document.addEventListener("DOMContentLoaded", () => {

  // ==== LOADER ====
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
    });
  }

  // ==== CONTROL DE MÚSICA (si existe en la página) ====
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

  // ==== SCROLL SUAVE EN ENLACES ====
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = document.querySelector(enlace.getAttribute("href"));
      if (destino) destino.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ==== MENÚ RESPONSIVE ====
  const menuBtn = document.getElementById("menu-btn");
  const menuMovil = document.getElementById("menu-movil");

  if (menuBtn && menuMovil) {
    // Abrir/cerrar menú
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuMovil.style.display =
        menuMovil.style.display === "flex" ? "none" : "flex";
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!menuMovil.contains(e.target) && !menuBtn.contains(e.target)) {
        menuMovil.style.display = "none";
      }
    });

    // Cerrar al seleccionar un enlace
    menuMovil.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuMovil.style.display = "none";
      });
    });
  }

  // ==== ACORDEÓN FAQ ====
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;

      // Solo una pregunta abierta a la vez
      faqButtons.forEach((other) => {
        if (other !== btn) other.parentElement.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

});

// ==== ESPERAR A QUE TODO CARGUE ====
window.addEventListener("load", () => {

  // ==== LOADER ====
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }

  // ==== MENÚ RESPONSIVE ====
  const menuBtn = document.getElementById("menu-btn");
  const menuMovil = document.getElementById("menu-movil");

  if (menuBtn && menuMovil) {

    // Aseguramos que esté oculto al inicio
    menuMovil.classList.remove("activo");
    menuMovil.style.display = "none";

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const activo = menuMovil.classList.toggle("activo");
      menuMovil.style.display = activo ? "flex" : "none";
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!menuMovil.contains(e.target) && !menuBtn.contains(e.target)) {
        menuMovil.classList.remove("activo");
        menuMovil.style.display = "none";
      }
    });

    // Cerrar al seleccionar un enlace
    menuMovil.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuMovil.classList.remove("activo");
        menuMovil.style.display = "none";
      });
    });
  }

  // ==== SCROLL SUAVE (si hay enlaces internos) ====
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      const destino = document.querySelector(enlace.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
