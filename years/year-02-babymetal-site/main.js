// Base de datos de Tracks / Álbumes de Babymetal
const bmTracks = [
  {
    title: "Megitsune (メギツネ)",
    album: "BABYMETAL (2014)",
    cover: "https://placehold.co/180x180/2a000a/ff0033?text=BABYMETAL",
    desc: "Fusión épica de instrumentos tradicionales japoneses (Shamisen, Shakuhachi) con Heavy Metal y Kawaii Pop."
  },
  {
    title: "PA PA YA!! (feat. F.HERO)",
    album: "Metal Galaxy (2019)",
    cover: "https://placehold.co/180x180/001a2a/00f0ff?text=Metal+Galaxy",
    desc: "Energía veraniega explosiva mezclando rap tailandés con riffs pesados de guitarra de ocho cuerdas."
  },
  {
    title: "Road of Resistance",
    album: "Metal Resistance (2016)",
    cover: "https://placehold.co/180x180/2a1a00/ffd700?text=Metal+Resistance",
    desc: "Himno del Power Metal con guitarras rápidas compuestas en colaboración con Herman Li y Sam Totman (DragonForce)."
  }
];

const foxGodQuotes = [
  "No pienses. Siente. Sigue los mandatos del Fox God.",
  "La resistencia del metal no se detiene, se transforma en cada galaxia.",
  "Pide chocolate y el universo responderá con riffs de guitarra.",
  "Only the Fox God Knows... el futuro de la música Kawaii Metal."
];

let currentTrackIdx = 0;
let isPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
  initGalaxyCanvas();
  renderDiscography();
  loadTrack(currentTrackIdx);
  setupFoxGodModal();
});

// Cargar track en el reproductor
function loadTrack(idx) {
  const track = bmTracks[idx];
  document.getElementById("bmTrackTitle").textContent = track.title;
  document.getElementById("bmTrackAlbum").textContent = `Álbum: ${track.album}`;
  document.getElementById("bmTrackCover").src = track.cover;
  document.getElementById("progressBar").style.width = "0%";
}

// Controladores del Reproductor
document.getElementById("playPauseBtn").addEventListener("click", () => {
  isPlaying = !isPlaying;
  const btn = document.getElementById("playPauseBtn");
  btn.textContent = isPlaying ? "⏸" : "▶";

  if (isPlaying) {
    simulateProgress();
  }
});

document.getElementById("nextTrackBtn").addEventListener("click", () => {
  currentTrackIdx = (currentTrackIdx + 1) % bmTracks.length;
  loadTrack(currentTrackIdx);
});

document.getElementById("prevTrackBtn").addEventListener("click", () => {
  currentTrackIdx = (currentTrackIdx - 1 + bmTracks.length) % bmTracks.length;
  loadTrack(currentTrackIdx);
});

function simulateProgress() {
  if (!isPlaying) return;
  const bar = document.getElementById("progressBar");
  let width = parseFloat(bar.style.width) || 0;
  if (width >= 100) {
    width = 0;
  }
  bar.style.width = (width + 1) + "%";
  setTimeout(simulateProgress, 300);
}

// Renderizar Discografía
function renderDiscography() {
  const container = document.getElementById("albumsGrid");
  container.innerHTML = "";

  bmTracks.forEach((track, idx) => {
    const card = document.createElement("div");
    card.className = "album-card";
    card.onclick = () => {
      currentTrackIdx = idx;
      loadTrack(idx);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    card.innerHTML = `
      <img src="${track.cover}" alt="${track.title}">
      <h4>${track.title}</h4>
      <p>${track.desc}</p>
    `;
    container.appendChild(card);
  });
}

// Modal del Fox God
function setupFoxGodModal() {
  const modal = document.getElementById("foxModal");
  const btn = document.getElementById("foxGodMsgBtn");
  const close = document.getElementById("closeFoxModal");

  btn.onclick = () => {
    const randomQuote = foxGodQuotes[Math.floor(Math.random() * foxGodQuotes.length)];
    document.getElementById("foxGodText").textContent = `"${randomQuote}"`;
    modal.style.display = "flex";
  };

  close.onclick = () => modal.style.display = "none";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Canvas Interactivo de Estrellas / Galaxia
function initGalaxyCanvas() {
  const canvas = document.getElementById("galaxyCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    alpha: Math.random(),
    speed: Math.random() * 0.02
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(s => {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;
      
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 0, 51, ${Math.abs(s.alpha)})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ff0033";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}