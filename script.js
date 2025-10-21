const overlay = document.querySelector(".overlay");
const infoContainer = document.getElementById("info-container");

// Textos extendidos de los servicios
const textos = [
  "Creamos landing pages efectivas, optimizadas para captar clientes y con tiempos de carga mínimos.",
  "Desarrollamos portfolios atractivos, animados y adaptados a tu estilo profesional.",
  "Usamos JS y CSS avanzado para lograr interfaces dinámicas y responsivas.",
  "Optimizamos tu sitio con buenas prácticas SEO para mejorar su posicionamiento.",
  "Diseños 100% adaptativos que se ven perfectos en todos los dispositivos.",
  "Aplicaciones SPA modernas y veloces con frameworks y rutas dinámicas.",
  "Integraciones con APIs externas, formularios, bases de datos y más.",
  "Animaciones fluidas con CSS y librerías de movimiento profesional.",
  "Diseños centrados en el usuario: experiencia y estética unidas.",
  "Formularios inteligentes con validación, seguridad y envíos directos.",
  "Tiendas online seguras y modernas con carritos funcionales.",
  "Paneles administrativos con visualización de datos intuitiva.",
  "Chatbots que responden automáticamente a tus visitantes.",
  "Landing pages enfocadas en captar alumnos o leads.",
  "Blogs visualmente atractivos y optimizados para lectura.",
  "Webs institucionales que reflejan la identidad de tu empresa.",
  "Mejoramos la velocidad de carga de tu sitio drásticamente.",
  "Aplicamos medidas de seguridad front end contra ataques comunes.",
  "SVG animados y visuales de alto impacto gráfico.",
  "Asesoría directa sobre diseño, desarrollo y mejoras técnicas."
];

// Mostrar info
document.querySelectorAll('.btn-ver').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    overlay.style.display = 'block';
    const box = document.createElement('div');
    box.classList.add('info-box');
    box.innerHTML = `
      <h3>${btn.parentElement.querySelector('h2').textContent}</h3>
      <p>${textos[i]}</p>
      <button class="btn-cerrar">Ver menos</button>
    `;
    infoContainer.appendChild(box);

    document.querySelector('.btn-cerrar').addEventListener('click', cerrar);
    overlay.addEventListener('click', cerrar);
  });
});

// Cerrar info
function cerrar() {
  overlay.style.display = 'none';
  infoContainer.innerHTML = '';
}

// Precio fijo
const precio = 15000;
document.getElementById('precio').textContent = precio.toLocaleString('es-AR');
