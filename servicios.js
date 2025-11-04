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

// === AUTO-REVERTIR TARJETAS SOLO EN RESPONSIVE ===
if (window.innerWidth <= 768) {
  document.querySelectorAll(".card3D").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");

      // Si se giró, volver a la posición original a los 2 segundos
      if (card.classList.contains("flipped")) {
        setTimeout(() => {
          card.classList.remove("flipped");
        }, 2000);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Solo ejecutar este comportamiento en pantallas pequeñas
  if (window.matchMedia("(max-width: 768px)").matches) {
    const cards = document.querySelectorAll(".card3D");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Si la tarjeta tiene estructura interna (card-inner)
        const inner = card.querySelector(".card-inner");
        if (!inner) return;

        // Alternar el giro
        inner.classList.toggle("flipped");

        // Si se giró, volver después de 2 segundos
        if (inner.classList.contains("flipped")) {
          setTimeout(() => {
            inner.classList.remove("flipped");
          }, 2000);
        }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Solo activar en responsive (pantallas hasta 768px)
  if (window.matchMedia("(max-width: 768px)").matches) {
    const cards = document.querySelectorAll(".card3D");

    cards.forEach(card => {
      const inner = card.querySelector(".card-inner");
      if (!inner) return;

      card.addEventListener("click", () => {
        // Gira la tarjeta
        inner.classList.add("flipped");

        // Luego de 2 segundos, vuelve a su posición original
        setTimeout(() => {
          inner.classList.remove("flipped");
        }, 2000);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Solo para pantallas pequeñas (responsive)
  if (window.matchMedia("(max-width: 768px)").matches) {
    const cards = document.querySelectorAll(".card3D");

    cards.forEach(card => {
      const inner = card.querySelector(".card-inner");
      const back = card.querySelector(".card-back");

      if (!inner || !back) return;

      // Mensaje al girar
      const mensaje = document.createElement("div");
      mensaje.textContent = "💬 Desliza nuevamente para volver";
      mensaje.style.position = "absolute";
      mensaje.style.bottom = "10px";
      mensaje.style.width = "100%";
      mensaje.style.textAlign = "center";
      mensaje.style.color = "#fff";
      mensaje.style.fontWeight = "600";
      mensaje.style.fontSize = "0.9rem";
      mensaje.style.opacity = "0";
      mensaje.style.transition = "opacity 0.5s ease";
      back.appendChild(mensaje);

      card.addEventListener("click", () => {
        // Si ya está girada, volver al frente
        if (inner.classList.contains("flipped")) {
          inner.classList.remove("flipped");
          mensaje.style.opacity = "0";
        } 
        else {
          // Gira la tarjeta
          inner.classList.add("flipped");

          // Mostrar mensaje después del giro
          setTimeout(() => {
            mensaje.style.opacity = "1";
          }, 600);
        }
      });
    });
  }
});

