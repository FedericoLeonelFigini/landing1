// Redirección dinámica a WhatsApp
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

// Menú responsive
const menuBtn = document.querySelector(".menu-btn");
const menuMovil = document.querySelector(".menu-movil");

menuBtn.addEventListener("click", () => {
  menuMovil.style.display = menuMovil.style.display === "flex" ? "none" : "flex";
  menuBtn.classList.toggle("open");
});
