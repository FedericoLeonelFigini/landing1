// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 600);
});

const overlay = document.querySelector(".overlay");
const infoContainer = document.getElementById("info-container");
const servicesContainer = document.querySelector(".services");

const servicios = [
  "Landing Pages", "Portfolios Web", "Front + Back Integration", "Aplicaciones SPA",
  "Dashboards", "Autenticación Segura", "APIs RESTful", "Animaciones Web",
  "Optimización SEO", "Diseño Responsive", "Hosting & Deploy", "Integración de Pagos",
  "Blogs Dinámicos", "Foros", "Chat en Tiempo Real", "Paneles de Usuario",
  "Notificaciones Push", "Automatización", "Emails Automáticos", "Gestión de Bases de Datos",
  "Autenticación JWT", "Subida de Archivos", "Integraciones Externas", "Formularios Avanzados",
  "Estadísticas", "SEO Técnico", "Consultoría Full Stack", "Componentes Reutilizables",
  "Animaciones SVG", "Asesoría Técnica"
];

const detalles = [
  "Landing pages optimizadas para captar clientes y mejorar conversiones.",
  "Portfolios personalizados con animaciones suaves y diseño profesional.",
  "Desarrollo completo de front y back con APIs conectadas.",
  "Single Page Apps veloces con JavaScript moderno.",
  "Paneles administrativos intuitivos con datos dinámicos.",
  "Sistemas de login y autenticación segura.",
  "Diseño y consumo de APIs escalables y seguras.",
  "Animaciones fluidas con CSS avanzado.",
  "SEO técnico para mejorar posicionamiento.",
  "Diseños adaptativos en todos los dispositivos.",
  "Hosting profesional y despliegue en servidores globales.",
  "Pasarelas de pago como PayPal, Stripe o MercadoPago.",
  "Blogs administrables con editor visual.",
  "Foros y comunidades web personalizadas.",
  "Chats en vivo con WebSockets.",
  "Paneles de usuario con funciones personalizadas.",
  "Notificaciones push y alertas en tiempo real.",
  "Automatización de procesos web.",
  "Emails automáticos y confirmaciones seguras.",
  "Gestión de bases de datos SQL y NoSQL.",
  "Seguridad con JWT y cifrado.",
  "Subida de archivos y multimedia.",
  "Integraciones con servicios externos.",
  "Formularios inteligentes con validación.",
  "Analítica y métricas de uso.",
  "SEO avanzado con estructura optimizada.",
  "Consultoría técnica full stack.",
  "Arquitectura modular y mantenible.",
  "Animaciones vectoriales SVG.",
  "Asesorías web personalizadas."
];

// Generar tarjetas
servicios.forEach((servicio, i) => {
  const card = document.createElement("div");
  card.classList.add("service-card");
  card.innerHTML = `
    <h2>${servicio}</h2>
    <p>${detalles[i].split('.')[0]}.</p>
    <button class="btn-ver" data-index="${i}">Ver más</button>
  `;
  servicesContainer.appendChild(card);
});

// Mostrar detalles
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-ver")) {
    const i = e.target.dataset.index;
    overlay.style.display = "block";
    const box = document.createElement("div");
    box.classList.add("info-box");
    box.innerHTML = `
      <h3>${servicios[i]}</h3>
      <p>${detalles[i]}</p>
      <button class="btn-cerrar">Ver menos</button>
    `;
    infoContainer.appendChild(box);
  }
  if (e.target.classList.contains("btn-cerrar") || e.target === overlay) {
    overlay.style.display = "none";
    infoContainer.innerHTML = "";
  }
});
