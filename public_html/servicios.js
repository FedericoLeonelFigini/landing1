/* ===========================
   MENÚ RESPONSIVE
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn   = document.querySelector(".menu-btn");
  const menuMovil = document.querySelector(".menu-movil");

  if (menuBtn && menuMovil) {
    // Toggle
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuMovil.style.display =
        menuMovil.style.display === "flex" ? "none" : "flex";
    });

    // Cerrar al hacer clic en un enlace
    menuMovil.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => (menuMovil.style.display = "none"));
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!menuMovil.contains(e.target) && !menuBtn.contains(e.target)) {
        menuMovil.style.display = "none";
      }
    });
  }
});


/* ===========================
   CARRUSEL 3D — GIRA DE A UNA
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach(container => {
    const carousel   = container.querySelector(".carousel");
    const cards      = container.querySelectorAll(".card3D");
    const totalCards = cards.length;
    if (!carousel || totalCards === 0) return;

    let currentIndex = 0;
    const angle = 360 / totalCards;

    // Posicionar tarjetas alrededor del eje
    cards.forEach((card, i) => {
      const rotation = i * angle;
      card.style.transform = `rotateY(${rotation}deg) translateZ(380px)`;
    });

    // Aplicar rotación según índice
    function rotateCarousel() {
      const rotationY = currentIndex * -angle;
      // translateZ negativo para traer el eje hacia la cámara
      carousel.style.transform = `translateZ(-300px) rotateY(${rotationY}deg)`;
    }

    // Flechas
    const prevBtn = container.querySelector(".carousel-btn.prev");
    const nextBtn = container.querySelector(".carousel-btn.next");

    if (prevBtn) prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      rotateCarousel();
    });

    if (nextBtn) nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalCards;
      rotateCarousel();
    });

    // Arrastre con mouse (desktop)
    let isMouseDown = false;
    let startX = 0;

    container.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      startX = e.clientX;
    });

    container.addEventListener("mouseup", (e) => {
      if (!isMouseDown) return;
      const diff = e.clientX - startX;
      if (diff > 50) {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      } else if (diff < -50) {
        currentIndex = (currentIndex + 1) % totalCards;
      }
      rotateCarousel();
      isMouseDown = false;
    });

    container.addEventListener("mouseleave", () => {
      isMouseDown = false;
    });

    // Deslizamiento táctil (mobile/desktop táctil)
    let touchStartX = 0;
    let draggingTouch = false;

    container.addEventListener("touchstart", (e) => {
      draggingTouch = true;
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener("touchend", (e) => {
      if (!draggingTouch) return;
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 50) {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      } else if (diff < -50) {
        currentIndex = (currentIndex + 1) % totalCards;
      }
      rotateCarousel();
      draggingTouch = false;
    });
  });
});


/* ==========================================
   PRECIO → BOTÓN DE WHATSAPP (UN SOLO CLIC)
========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const numeroWpp = "5491141999497"; // tu número (formato internacional sin +)

  document.querySelectorAll(".card3D").forEach(card => {
    const precio = card.querySelector(".precio");
    if (!precio) return;

    let activado = false; // asegura un único cambio

    precio.addEventListener("click", (e) => {
      e.stopPropagation();
      if (activado) return;

      const titulo = card.querySelector("h3")?.textContent.trim() || "servicio web";
      const descripcion = card.querySelector("p")?.textContent.trim() || "";

      const mensaje = `Hola 👋, estoy interesado en el servicio "${titulo}". ${descripcion}`;
      const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensaje)}`;

      // Crear botón real y clickeable en toda su área
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.className = "btn-wpp-tarjeta";
      a.textContent = "💬 Consultar por WhatsApp";

      // Estilo inline para asegurar visual sin depender de CSS externo
      a.style.display = "inline-block";
      a.style.background = "#25D366";
      a.style.color = "#fff";
      a.style.textDecoration = "none";
      a.style.fontWeight = "600";
      a.style.padding = "0.45rem 1rem";
      a.style.borderRadius = "20px";
      a.style.transition = "opacity 0.3s ease";

      precio.innerHTML = "";
      precio.style.background = "transparent";
      precio.appendChild(a);

      a.addEventListener("mouseenter", () => a.style.opacity = "0.85");
      a.addEventListener("mouseleave", () => a.style.opacity = "1");

      activado = true;
    });
  });
});
