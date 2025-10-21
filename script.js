const overlay = document.querySelector(".overlay");
const infoContainer = document.getElementById("info-container");

const detalles = [
  "Landing Pages enfocadas en conversión y optimización de carga.",
  "Portfolios personalizados y adaptativos con animaciones.",
  "Conexión entre frontend y backend mediante APIs y servicios REST.",
  "Single Page Applications rápidas con JS moderno.",
  "Paneles de control dinámicos con estadísticas en tiempo real.",
  "Sistemas de login y roles con protección avanzada.",
  "Diseño y consumo de APIs seguras y escalables.",
  "Efectos y transiciones animadas con CSS y JS.",
  "Optimización SEO con estructura semántica.",
  "Diseños adaptables a todo tipo de pantalla.",
  "Configuración de dominios, SSL y despliegue en la nube.",
  "Integración de plataformas de pago internacionales.",
  "Gestión dinámica de contenido para blogs modernos.",
  "Comunidades en línea con foros y roles de usuario.",
  "Chats en vivo con sockets y WebRTC.",
  "Dashboards para usuarios con preferencias personales.",
  "Sistema de notificaciones push multiusuario.",
  "Automatización de tareas y scripts inteligentes.",
  "Sistema de correos automáticos de confirmación.",
  "Gestión y conexión con bases de datos SQL/NoSQL.",
  "Seguridad con tokens JWT y sesiones cifradas.",
  "Subida de archivos e imágenes con backend seguro.",
  "Integraciones con servicios de terceros (APIs).",
  "Automatización de formularios con validación.",
  "Estadísticas y analítica de comportamiento web.",
  "Estructura técnica optimizada para SEO avanzado.",
  "Consultoría full stack para empresas.",
  "Arquitectura modular con componentes reutilizables.",
  "SVG animados con precisión y rendimiento.",
  "Asesoría profesional en proyectos web."
];

document.querySelectorAll(".btn-ver").forEach((btn) => {
  btn.addEventListener("click", () => {
    const index = btn.dataset.index;
    overlay.style.display = "block";
    const box = document.createElement("div");
    box.classList.add("info-box");
    box.innerHTML = `
      <h3>${btn.parentElement.querySelector("h2").textContent}</h3>
      <p>${detalles[index]}</p>
      <button class="btn-cerrar">Ver menos</button>
    `;
    infoContainer.appendChild(box);

    document.querySelector(".btn-cerrar").addEventListener("click", cerrar);
    overlay.addEventListener("click", cerrar);
  });
});

function cerrar() {
  overlay.style.display = "none";
  infoContainer.innerHTML = "";
}
