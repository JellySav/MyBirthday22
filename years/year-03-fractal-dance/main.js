const danceStyles = {
  ballet: {
    title: "Ballet Clásico: Geometría Euclidiana & Simetría",
    math: "<b>Estructura Matemática:</b> Vectores continuos, líneas paralelas, arcos circulares y simetría axial ($180^\\circ$).",
    concept: "<b>Expresión en el Cuerpo:</b> Busca la ligereza y el alargamiento. La música regular ($3/4$ o $4/4$) produce patrones continuos de gran alcance.",
    color: "#00f0ff",
    type: "smooth"
  },
  hiphop: {
    title: "Hip-Hop / Urban: Geometría Sincopada & Aislamiento",
    math: "<b>Estructura Matemática:</b> Ámbitos angulares, fractales de ramificación quebrada y desplazamientos en fases ($off-beat$).",
    concept: "<b>Expresión en el Cuerpo:</b> Aislamientos corporales (*popping, locking*). La música sincopada rompe la continuidad lineal con aceleraciones abruptas.",
    color: "#ff3385",
    type: "sharp"
  },
  afro: {
    title: "Danza Africana / Afro: Polirritmia & Espirales Terrenales",
    math: "<b>Estructura Matemática:</b> Espirales logarítmicas, proporciones áureas ($1.618$) y múltiples capas de ritmos ($3$ contra $2$).",
    concept: "<b>Expresión en el Cuerpo:</b> Movimiento orgánico y centrado en el torso. Las extremidades replican fractales naturales arborescentes en conexión con la tierra.",
    color: "#f3c669",
    type: "organic"
  }
};

let currentStyleKey = "ballet";
let isPulsing = true;
let pulseAngle = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupCanvas();
  setupEvents();
  animate();
});

function selectStyle(key) {
  currentStyleKey = key;
  document.querySelectorAll(".style-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  const style = danceStyles[key];
  document.getElementById("styleTitle").textContent = style.title;
  document.getElementById("styleMath").innerHTML = style.math;
  document.getElementById("styleConcept").innerHTML = style.concept;
}

function setupEvents() {
  document.getElementById("iterSlider").addEventListener("input", (e) => {
    document.getElementById("iterVal").textContent = e.target.value;
  });
  document.getElementById("bpmSlider").addEventListener("input", (e) => {
    document.getElementById("bpmVal").textContent = e.target.value;
  });
  document.getElementById("pulseBtn").addEventListener("click", () => {
    isPulsing = !isPulsing;
  });
}

// Renderizado de Canvas y Fractales
function animate() {
  const canvas = document.getElementById("fractalCanvas");
  const ctx = canvas.getContext("2d");
  const bpm = parseInt(document.getElementById("bpmSlider").value);
  const iterations = parseInt(document.getElementById("iterSlider").value);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isPulsing) {
    pulseAngle += (bpm / 60) * 0.03;
  }

  const currentStyle = danceStyles[currentStyleKey];
  ctx.strokeStyle = currentStyle.color;
  ctx.lineWidth = 2;

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);

  if (currentStyle.type === "smooth") {
    // Ballet: Árbol fractal simétrico y fluido
    drawBalletFractal(ctx, 100, iterations, pulseAngle);
  } else if (currentStyle.type === "sharp") {
    // Hip-hop: Estructura angular sincopada
    drawHipHopFractal(ctx, 90, iterations, pulseAngle);
  } else if (currentStyle.type === "organic") {
    // Afro: Espirales y capas de polirritmia
    drawAfroSpiral(ctx, iterations, pulseAngle);
  }

  ctx.restore();
  requestAnimationFrame(animate);
}

// Fractal de Ballet (Estructura fluida y simétrica)
function drawBalletFractal(ctx, len, depth, angle) {
  if (depth === 0) return;

  const swing = Math.sin(angle) * 0.2;
  
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  ctx.translate(0, -len);

  ctx.save();
  ctx.rotate(0.4 + swing);
  drawBalletFractal(ctx, len * 0.75, depth - 1, angle);
  ctx.restore();

  ctx.save();
  ctx.rotate(-0.4 - swing);
  drawBalletFractal(ctx, len * 0.75, depth - 1, angle);
  ctx.restore();
}

// Fractal de Hip-Hop (Geometría quebrada e impulsiva)
function drawHipHopFractal(ctx, len, depth, angle) {
  if (depth === 0) return;

  const snap = Math.floor(Math.sin(angle * 2) * 3) * 0.2;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  ctx.translate(0, -len);

  ctx.save();
  ctx.rotate(1.1 + snap);
  drawHipHopFractal(ctx, len * 0.65, depth - 1, angle);
  ctx.restore();

  ctx.save();
  ctx.rotate(-0.8 - snap);
  drawHipHopFractal(ctx, len * 0.65, depth - 1, angle);
  ctx.restore();
}

// Fractal Afro (Espirales orgánicas y polirritmia)
function drawAfroSpiral(ctx, depth, angle) {
  const count = depth * 12;
  ctx.beginPath();
  for (let i = 0; i < count; i++) {
    const r = i * 4;
    const a = i * 0.3 + Math.sin(angle) * 0.5;
    const x = r * Math.cos(a);
    const y = r * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}