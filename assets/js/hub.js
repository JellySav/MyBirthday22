// Base de datos de los 22 años
const yearsData = [
  { num: 1, title: "Music Altar & Songbook", cat: "music-art", path: "years/year-01-music-altar/index.html", ready: true, desc: "Altar interactivo estilo Yandere Sim y diario emocional K-pop/C-pop/J-pop." },
  { num: 2, title: "Sitio Web Babymetal", cat: "music-art", path: "years/year-02-babymetal/index.html", ready: true, desc: "Landing tributo a BABYMETAL con estética Kawaii Metal & Gothic Idol." },
  { num: 3, title: "Geometría en Movimiento", cat: "code-math", path: "years/year-03-fractal-dance/index.html", ready: true, desc: "Laboratorio de fractales, matemática y geometría tras el Ballet, Hip-Hop y Afro." },
  { num: 4, title: "Laboratorio del Té", cat: "gaming-sim", path: "#", ready: true, desc: "Mezclas relajantes de té, botánica pixelada y paletas cromáticas." },
  { num: 5, title: "Tamagotchi Virtual", cat: "gaming-sim", path: "#", ready: false, desc: "Mascota virtual retro interactiva para cuidar en el navegador." },
  { num: 6, title: "Hanzi Flashcards & Guochao", cat: "culture-fandom", path: "#", ready: false, desc: "Flashcards interactivas de caracteres chinos con estética tradicional-moderna." },
  { num: 7, title: "Terminal OSINT Simulación", cat: "code-math", path: "#", ready: false, desc: "Juego de investigación en terminal cyberpunk e ingreso de comandos." },
  { num: 8, title: "Visualizador Audio J-Rock/C-Pop", cat: "music-art", path: "#", ready: false, desc: "Efectos visuales reactivos en canvas al ritmo de la música." },
  { num: 9, title: "Diario Histórico Lakorn", cat: "culture-fandom", path: "years/year-09-lakorn-journal/index.html", ready: true, desc: "Diario de época vintage sobre las sagas Jutathep & Dhevaprom y el origen del amor asiático." },
  { num: 10, title: "Generador de Poesía Algorítmica", cat: "code-math", path: "#", ready: false, desc: "Bot que genera micro-ensayos combinando arte, filosofía y ciencias." },
  { num: 11, title: "BL/GL Fan Vault & Scrapbook", cat: "culture-fandom", path: "years/year-11-bl-gl-vault/index.html", ready: true, desc: "Libro de recortes interactivo con series favs, muro de escándalos y recomendador por mood." },
  { num: 12, title: "Manhua/Manhwa Webtoon Reader", cat: "culture-fandom", path: "#", ready: false, desc: "Visor con scroll vertical e inspirador de tramas y tropos." },
  { num: 13, title: "Oficina Detective Conan", cat: "culture-fandom", path: "years/year-13-conan-detective/index.html", ready: true, desc: "Archivero policial, pizarra de sospechosos de Rum y dossiers clasificados de Kudo." },
  { num: 14, title: "Decodificador Criptográfico", cat: "code-math", path: "#", ready: false, desc: "Herramienta interactiva para descifrar mensajes en cifrados clásicos." },
  { num: 15, title: "Mapa de Observatorios", cat: "code-math", path: "#", ready: false, desc: "Mapa espacial interactivo con los observatorios astronómicos del mundo." },
  { num: 16, title: "Conway's Game of Life", cat: "code-math", path: "#", ready: false, desc: "Simulador de autómatas celulares con temas pastel y neón cyberpunk." },
  { num: 17, title: "Dashboard ODS & Impacto", cat: "code-math", path: "#", ready: false, desc: "Métricas visuales e indicadores de impacto para proyectos sociales." },
  { num: 18, title: "Visor 3D Estructuras de Datos", cat: "code-math", path: "#", ready: false, desc: "Visualización artística en 3D de grafos y algoritmos informáticos." },
  { num: 19, title: "Cozy Vampire Diner", cat: "gaming-sim", path: "#", ready: false, desc: "Minijuego de gestión de restaurante gótico-cozy y sigilo." },
  { num: 20, title: "Digital Escape Room", cat: "gaming-sim", path: "#", ready: false, desc: "Desafío de acertijos lógicos y criptografía para escapar de la sala." },
  { num: 21, title: "El Muro del Futuro", cat: "gaming-sim", path: "#", ready: false, desc: "Cápsula del tiempo interactiva y asistente Jelly con trivias." },
  { num: 22, title: "La Nave Central Dashboard", cat: "code-math", path: "index.html", ready: true, desc: "Hub de control central del repositorio completo." }
];

document.addEventListener("DOMContentLoaded", () => {
  renderCards(yearsData);
});

function renderCards(data) {
  const grid = document.getElementById("yearsGrid");
  grid.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = `year-card ${item.ready ? 'active' : 'locked'}`;
    
    card.innerHTML = `
      <span class="card-badge ${item.ready ? 'ready' : 'wip'}">
        ${item.ready ? 'ONLINE' : 'PROXIMAMENTE'}
      </span>
      <div>
        <div class="year-number">AÑO ${String(item.num).padStart(2, '0')}</div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
      <div>
        ${item.ready 
          ? `<a href="${item.path}" class="launch-btn">INICIAR MÓDULO ➔</a>` 
          : `<span style="font-size:0.8rem; color:#71717a; font-family:'Fira Code';">En desarrollo...</span>`}
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterYearCards(category) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (category === "all") {
    renderCards(yearsData);
  } else {
    const filtered = yearsData.filter(item => item.cat === category);
    renderCards(filtered);
  }
}