// ==== MENÚ RESPONSIVE ==== 
const menuBtn = document.querySelector(".menu-btn");
const menuMovil = document.querySelector(".menu-movil");

if (menuBtn && menuMovil) {
  menuBtn.addEventListener("click", () => {
    menuMovil.style.display = menuMovil.style.display === "flex" ? "none" : "flex";
  });
}

// ==== CARRUSEL 3D — GIRA DE A UNA TARJETA ==== 
document.querySelectorAll(".carousel-container").forEach(container => {
  const carousel = container.querySelector(".carousel");
  const cards = container.querySelectorAll(".card3D");
  const totalCards = cards.length;
  let currentIndex = 0;

  // Posicionar tarjetas en círculo
  const angle = 360 / totalCards;
  cards.forEach((card, i) => {
    const rotation = i * angle;
    card.style.transform = `rotateY(${rotation}deg) translateZ(380px)`;
  });

  // Rotar carrusel según índice
  function rotateCarousel() {
    const rotationY = currentIndex * -angle;
    carousel.style.transform = `translateZ(-300px) rotateY(${rotationY}deg)`;
  }

  // Botones de flecha
  const prevBtn = container.querySelector(".carousel-btn.prev");
  const nextBtn = container.querySelector(".carousel-btn.next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      rotateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalCards;
      rotateCarousel();
    });
  }

  // === GESTOS (TOUCH O MOUSE) ===
  let startX = 0;
  let isDragging = false;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  container.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diff = endX - startX;
    if (diff > 50) {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    } else if (diff < -50) {
      currentIndex = (currentIndex + 1) % totalCards;
    }
    rotateCarousel();
    isDragging = false;
  });

  container.addEventListener("mouseleave", () => (isDragging = false));

  // Soporte táctil
  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  container.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 50) {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    } else if (diff < -50) {
      currentIndex = (currentIndex + 1) % totalCards;
    }
    rotateCarousel();
    isDragging = false;
  });
});

// ==== CAMBIO DE PRECIO A BOTÓN DE WHATSAPP ====
document.querySelectorAll(".card3D").forEach(card => {
  const precio = card.querySelector(".precio");
  if (!precio) return; // seguridad

  const precioOriginal = precio.textContent.trim();
  const numeroWpp = "5491141999497"; // ✅ Formato correcto internacional

  // Obtener info de la tarjeta
  const titulo = card.querySelector("h3")?.textContent.trim() || "";
  const descripcion = card.querySelector("p")?.textContent.trim() || "";

  card.addEventListener("click", (e) => {
    e.stopPropagation();

    // Si ya está mostrando el botón, volver al precio original
    if (precio.dataset.active === "true") {
      precio.textContent = precioOriginal;
      precio.style.background = "linear-gradient(to right, #007bff, #004aad)";
      precio.style.color = "#fff";
      precio.dataset.active = "false";
      precio.classList.remove("brillo-verde");
    } else {
      // Crear mensaje con datos dinámicos
      const mensaje = `Hola! Estoy interesado en el servicio "${titulo}".\n\nDetalles: ${descripcion}\n\n¿Podrían brindarme más información?`;
      const linkWpp = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensaje)}`;

      // Mostrar botón de WhatsApp
      precio.innerHTML = `<a href="${linkWpp}" target="_blank" class="btn-wpp-tarjeta">Consultar por WhatsApp</a>`;
      precio.style.background = "transparent";
      precio.dataset.active = "true";
      precio.classList.add("brillo-verde");
    }
  });
});
