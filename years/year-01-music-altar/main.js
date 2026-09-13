// Base de datos de canciones del Altar
const songsData = [
  {
    id: "song-1",
    title: "Gimme Chocolate!!",
    artist: "BABYMETAL",
    genre: "J-ROCK / KAWAII METAL",
    cover: "https://placehold.co/120x120/2b0000/ff0055?text=BABYMETAL",
    audioSrc: "", // Agrega el link/path al audio .mp3 aquí
    lyrics: `Give me chocolate! Give me chocolate!\n\nCheck-it-out chocolate!\nCan I have a little bit of chocolate please?\n\nPapaparappa~♪`,
    journal: "Esta canción representa la combinación perfecta entre la agresión del metal y la energía desenfadada del pop. Me recarga de energía instantáneamente."
  },
  {
    id: "song-2",
    title: "Super Shy",
    artist: "NewJeans",
    genre: "K-POP",
    cover: "https://placehold.co/120x120/001a33/00f0ff?text=NewJeans",
    audioSrc: "",
    lyrics: `I'm super shy, super shy\nBut wait a minute while I make you mine, make you mine...\n\nYou're on my mind all the time.`,
    journal: "El ritmo acelerado de drum & bass mezclado con las voces suaves transmite una nostalgia veraniega súper única."
  },
  {
    id: "song-3",
    title: "Youth Without Regrets (无悔青春)",
    artist: "C-Pop Selection",
    genre: "C-POP",
    cover: "https://placehold.co/120x120/331a00/ffd700?text=C-POP",
    audioSrc: "",
    lyrics: `岁月无声，青春无悔...\n(Los años pasan en silencio, la juventud no conoce arrepentimientos...)`,
    journal: "Inspirada en melodías tradicionales chinas combinadas con arreglos modernos. Evoca tranquilidad y apreciación por el tiempo transcurrido."
  }
];

let currentSong = songsData[0];

document.addEventListener("DOMContentLoaded", () => {
  renderPhotocards();
  loadSong(currentSong);
  setupCandles();
});

// Renderizar Photocards en el altar
function renderPhotocards() {
  const container = document.getElementById("cardsDisplay");
  container.innerHTML = "";

  songsData.forEach((song) => {
    const card = document.createElement("div");
    card.className = `photocard ${song.id === currentSong.id ? 'active' : ''}`;
    card.onclick = () => selectSong(song);

    card.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="photocard-title">${song.title}</div>
    `;
    container.appendChild(card);
  });
}

// Cargar información de la canción en el panel
function loadSong(song) {
  currentSong = song;
  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songArtist").textContent = song.artist;
  document.getElementById("songGenre").textContent = song.genre;
  document.getElementById("activeCover").src = song.cover;
  document.getElementById("songLyrics").textContent = song.lyrics;
  
  // Cargar nota guardada del usuario en localStorage si existe
  const savedNote = localStorage.getItem(`note_${song.id}`);
  document.getElementById("journalText").textContent = savedNote || song.journal;

  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.src = song.audioSrc;
  
  renderPhotocards();
}

function selectSong(song) {
  loadSong(song);
}

// Alternar entre pestañas de Letras y Diario
function switchTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

  if (tabName === 'lyrics') {
    document.querySelectorAll(".tab-btn")[0].classList.add("active");
    document.getElementById("lyricsTab").classList.add("active");
  } else {
    document.querySelectorAll(".tab-btn")[1].classList.add("active");
    document.getElementById("journalTab").classList.add("active");
  }
}

// Guardar notas personales en LocalStorage
document.getElementById("saveNoteBtn").addEventListener("click", () => {
  const input = document.getElementById("userNoteInput");
  if (input.value.trim() !== "") {
    localStorage.setItem(`note_${currentSong.id}`, input.value);
    document.getElementById("journalText").textContent = input.value;
    input.value = "";
    alert("¡Nota guardada en tu diario emocional!");
  }
});

// Interacción con las velas del Altar
function setupCandles() {
  ["candleLeft", "candleRight"].forEach(id => {
    const candle = document.getElementById(id);
    candle.addEventListener("click", () => {
      candle.classList.toggle("off");
    });
  });
}