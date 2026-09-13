const caseDatabase = {
  moonlight: {
    title: "Episodio 11: El Asesinato del Soneto a la Luz de la Luna",
    details: "Un caso trágico en la isla Tsukikage donde los asesinatos siguen las notas de la sonata de Beethoven. Conan reflexiona profundamente tras no poder evitar el suicidio del culpable, jurando desde entonces que un detective que acorrala a un asesino hasta la muerte no es mejor que un asesino."
  },
  desperate: {
    title: "Episodios 190-192: La Desesperada Resurrección",
    details: "Shinichi toma un antídoto experimental del APTX 4869 para aparecer en la obra teatral de la secundaria Teitan justo cuando Ran comenzaba a sospechar fuertemente de la identidad de Conan."
  },
  movie26: {
    title: "Película 26: Black Iron Submarine",
    details: "La Organización de Negro despliega a Pingüino y Pinga para infiltrar la red de reconocimiento facial global de la Interpol. Una prueba definitiva de la lealtad y el vínculo inquebrantable entre Conan y Ai Haibara."
  }
};

function switchSection(sectionId) {
  document.querySelectorAll(".office-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  
  document.getElementById(sectionId + "Section").classList.add("active");
  event.target.classList.add("active");
}

function showCaseDetails(caseKey) {
  const c = caseDatabase[caseKey];
  const display = document.getElementById("caseDisplay");
  
  display.innerHTML = `
    <h3 style="color: var(--manila-paper); margin-top: 0;">${c.title}</h3>
    <p style="color: #e4e4e7; line-height: 1.6;">${c.details}</p>
  `;
}

function openSuspectModal(suspectKey) {
  alert(` Examining expediente de investigación para ${suspectKey.toUpperCase()}... Acceso a notas confidenciales concedido.`);
}