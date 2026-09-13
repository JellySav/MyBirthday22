// Contenido histórico del diario
const journalVolumes = {
  origin: {
    pageNumber: "Página I de III",
    html: `
      <div class="page-content-grid">
        <div>
          <h2 class="entry-chapter">El Chispazo Inicial: Mi Encuentro con Tailandia</h2>
          <p class="handwritten-text">
            Fue precisamente la elegancia, la ambientación de época y la calidez humana de la saga <b>Suparburoot Jutathep</b> lo que encendió en mí una curiosidad insaciable por la cultura asiática.
          </p>
          <p>
            Ver la historia de los cinco jóvenes nobles formándose y enamorándose en la Tailandia de mediados del siglo XX no solo me cautivó visualmente, sino que se convirtió en mi puerta de entrada para explorar el cine, las costumbres, la historia y la belleza del idioma tailandés.
          </p>
        </div>
        <div>
          <div class="polaroid-frame">
            <img src="https://placehold.co/320x240/4a2f1d/f4ece1?text=Palacio+Jutathep+1958" alt="Palacio Jutathep">
            <div class="polaroid-caption">Donde todo comenzó... ✦</div>
          </div>
        </div>
      </div>
    `
  },
  jutathep: {
    pageNumber: "Página II de III",
    html: `
      <h2 class="entry-chapter">Tomo I: Suparburoot Jutathep (Los Cinco Caballeros)</h2>
      <p class="handwritten-text">
        Cinco hermanos unidos por la promesa de honor de su padre hacia la familia Dhevaprom, enfrentando el dilema entre el deber noble y el verdadero amor.
      </p>
      
      <div class="brothers-list">
        <div class="brother-card">
          <h3>1. Khun Chai Taratorn (El Historiador & Arqueólogo)</h3>
          <p>El mayor de los hermanos, responsable y dedicado al patrimonio cultural y al honor de la familia.</p>
        </div>
        <div class="brother-card">
          <h3>2. Khun Chai Pawornruj (El Diplomático en Suiza)</h3>
          <p>Afronta los prejuicios de estatus social mientras encuentra el amor entre paisajes nevados lejanos.</p>
        </div>
        <div class="brother-card">
          <h3>3. Khun Chai Puttipat (El Cirujano Dedicado)</h3>
          <p>Un médico racional cuyo mundo cambia por completo al proteger a una reina de belleza de corazón humilde.</p>
        </div>
        <div class="brother-card">
          <h3>4. Khun Chai Ratchanon (El Ingeniero Forestal)</h3>
          <p>Su amor por la naturaleza lo lleva a la frontera y a descubrir el misterio de una princesa oculta en la selva.</p>
        </div>
        <div class="brother-card">
          <h3>5. Khun Chai Ronnapee (El Piloto de la Fuerza Aérea)</h3>
          <p>El menor y más carismático, cuyo corazón cae rendido ante una actriz de danza tradicional.</p>
        </div>
      </div>
    `
  },
  dhevaprom: {
    pageNumber: "Página III de III",
    html: `
      <h2 class="entry-chapter">Tomo II: Duang Jai Dhevaprom (La Nueva Generación)</h2>
      <p class="handwritten-text">
        Décadas más tarde, los hijos de los Jutathep heredan los lazos, rencores del pasado y los giros del destino junto a los descendientes de los Dhevaprom.
      </p>

      <div class="page-content-grid">
        <div>
          <p>
            Esta continuación trae una mirada más moderna a los años 80 y 90, mostrando cómo las nuevas generaciones reescriben los compromisos de sus padres con su propia identidad, valentía y nuevos horizontes.
          </p>
          <div class="brother-card" style="border-left-color: var(--crimson-royal);">
            <h3>La Cuestión del Destino</h3>
            <p>¿Puede el amor sincero superar las viejas disputas entre linajes nobleza?</p>
          </div>
        </div>
        <div>
          <div class="polaroid-frame" style="transform: rotate(3deg);">
            <img src="https://placehold.co/320x240/6b1d2f/f4ece1?text=Duang+Jai+Dhevaprom" alt="Nueva Generación">
            <div class="polaroid-caption">El legado continúa 🌸</div>
          </div>
        </div>
      </div>
    `
  }
};

document.addEventListener("DOMContentLoaded", () => {
  switchVolume('origin');
});

function switchVolume(volumeKey) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  const vol = journalVolumes[volumeKey];
  document.getElementById("journalPage").innerHTML = vol.html;
  document.getElementById("pageNumber").textContent = vol.pageNumber;
}