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

// ===== MENÚ RESPONSIVE =====
const menuBtn = document.querySelector(".menu-btn");
const menuMovil = document.querySelector(".menu-movil");

if (menuBtn && menuMovil) {
  menuBtn.addEventListener("click", () => {
    const visible = menuMovil.style.display === "flex";
    menuMovil.style.display = visible ? "none" : "flex";
    menuBtn.classList.toggle("open");
  });
}
