const recommendations = {
  angst: {
    title: "I Told Sunset About You (ITSAY)",
    type: "BL Tailandés",
    desc: "Prepara pañuelos. Una exploración hiper-realista sobre el descubrimiento personal, la culpa, la rivalidad académica y el primer amor en Phuket."
  },
  fluff: {
    title: "Cherry Magic! (Thirty Years of Virginity Can Make You a Wizard?! )",
    type: "BL Japonés",
    desc: "Cero drama tóxico, 100% ternura. Un oficinista descubre que al cumplir 30 años puede leer la mente de las personas al tocarlas, y descubre que el empleado estrella de la empresa está enamorado de él."
  },
  action: {
    title: "Manner of Death",
    type: "BL Tailandés / Thriller Forense",
    desc: "Un médico forense es forzado a falsificar la autopsia de un aparente suicidio que en realidad fue un asesinato, llevándolo a colaborar con el principal sospechoso."
  }
};

function switchTab(tabId) {
  document.querySelectorAll(".vault-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId + "-section").classList.add("active");
  event.target.classList.add("active");
}

function recommendSeries(mood) {
  const rec = recommendations[mood];
  const resultDiv = document.getElementById("recommendationResult");

  resultDiv.innerHTML = `
    <h3 style="color: var(--pink-blush); margin-top: 0; font-family: 'Fredoka', cursive;">✨ Recomendación Recomendada: ${rec.title}</h3>
    <p style="color: #d8b4fe; font-weight: bold; font-size: 0.9rem;">[${rec.type}]</p>
    <p style="color: #f5f3ff; line-height: 1.6;">${rec.desc}</p>
  `;
}