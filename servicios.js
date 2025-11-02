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
