const audio = document.getElementById('audioElement');
const canvas = document.getElementById('audioCanvas');
const ctx = canvas.getContext('2d');
const playBtn = document.getElementById('playBtn');
const audioUpload = document.getElementById('audioUpload');
const trackTitle = document.getElementById('trackTitle');

let audioCtx;
let analyser;
let source;
let isInitialized = false;

function initAudio() {
  if (isInitialized) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
  source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 128;
  isInitialized = true;
}

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Cargar archivo de audio local
audioUpload.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audio.src = url;
    trackTitle.textContent = `TRACK: ${file.name}`;
    initAudio();
    audio.play();
    drawVisualizer();
  }
});

playBtn.addEventListener('click', () => {
  if (!audio.src) {
    alert("Por favor carga un archivo de audio MP3 primero.");
    return;
  }
  initAudio();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (audio.paused) {
    audio.play();
    drawVisualizer();
  } else {
    audio.pause();
  }
});

function drawVisualizer() {
  if (!isInitialized) return;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function render() {
    if (audio.paused) return;

    requestAnimationFrame(render);
    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = 'rgba(5, 5, 13, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

      const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, '#00f0ff');
      gradient.addColorStop(0.5, '#7928ca');
      gradient.addColorStop(1, '#ff007f');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);

      x += barWidth;
    }
  }

  render();
}