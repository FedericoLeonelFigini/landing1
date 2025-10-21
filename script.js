// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 600);
});

// Música
const musica = document.getElementById("musica-fondo");
const btnMusica = document.getElementById("toggle-musica");
btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = "🔊";
  } else {
    musica.pause();
    btnMusica.textContent = "🔇";
  }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(enlace.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
