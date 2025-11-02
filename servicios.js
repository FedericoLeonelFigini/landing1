// ==== MENÚ RESPONSIVE ====
const menuBtn = document.querySelector(".menu-btn");
const menuMovil = document.querySelector(".menu-movil");

if (menuBtn && menuMovil) {
  menuBtn.addEventListener("click", () => {
    menuMovil.style.display = menuMovil.style.display === "flex" ? "none" : "flex";
  });
}

// ==== CARRUSEL 3D ====
function initCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const cards = carousel.querySelectorAll(".card3D");
  const prevBtn = carousel.parentElement.querySelector(".prev");
  const nextBtn = carousel.parentElement.querySelector(".next");
  
  let angle = 0;
  const radius = 360 / cards.length;
  
  function updateRotation() {
    cards.forEach((card, i) => {
      const rot = (i * radius) + angle;
      card.style.transform = `rotateY(${rot}deg) translateZ(340px)`;
    });
  }

  updateRotation();

  nextBtn.addEventListener("click", () => {
    angle -= radius;
    updateRotation();
  });

  prevBtn.addEventListener("click", () => {
    angle += radius;
    updateRotation();
  });

  // Touch/drag soporte para móviles
  let startX = 0;
  carousel.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
  carousel.addEventListener("touchmove", (e) => {
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      angle += diff > 0 ? radius : -radius;
      updateRotation();
      startX = e.touches[0].clientX;
    }
  });
}

// Iniciar los tres carruseles
["carousel1", "carousel2", "carousel3"].forEach(initCarousel);

// === INTERACCIÓN DE TARJETAS ===
document.querySelectorAll(".card3D").forEach(card => {
  const precio = card.querySelector(".precio");
  const precioOriginal = precio.textContent.trim();
  const numeroWpp = "1141999497";
  
  card.addEventListener("click", () => {
    // Si ya está mostrando el botón, volver al precio original
    if (precio.dataset.active === "true") {
      precio.innerHTML = precioOriginal;
      precio.style.background = "linear-gradient(to right, #007bff, #004aad)";
      precio.style.color = "#fff";
      precio.dataset.active = "false";
    } 
    else {
      // Reemplaza el contenido por botón de WhatsApp
      precio.innerHTML = `<a href="https://wa.me/${numeroWpp}?text=Hola!%20Estoy%20interesado%20en%20este%20servicio%20web." target="_blank">Consultar por WhatsApp</a>`;
      precio.style.background = "#25D366";
      precio.style.color = "#fff";
      precio.dataset.active = "true";

      // Ajuste visual para parecer botón
      const enlace = precio.querySelector("a");
      enlace.style.color = "#fff";
      enlace.style.textDecoration = "none";
      enlace.style.fontWeight = "600";
      enlace.style.display = "inline-block";
      enlace.style.padding = "0.4rem 1rem";
      enlace.style.borderRadius = "20px";
      enlace.style.transition = "0.3s";
      enlace.addEventListener("mouseenter", () => enlace.style.opacity = "0.85");
      enlace.addEventListener("mouseleave", () => enlace.style.opacity = "1");
    }
  });
});
