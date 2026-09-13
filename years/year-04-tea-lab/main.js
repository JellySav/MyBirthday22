let selected = [];

function toggleIngredient(id, name, color, effect) {
  const index = selected.findIndex(item => item.id === id);

  if (index >= 0) {
    selected.splice(index, 1);
  } else {
    if (selected.length >= 3) {
      alert("¡La taza solo admite hasta 3 ingredientes botánicos a la vez!");
      return;
    }
    selected.push({ id, name, color, effect });
  }

  updateUI();
}

function updateUI() {
  // Actualizar botones seleccionados
  document.querySelectorAll(".ing-card").forEach(card => {
    const ingId = card.getAttribute("onclick").split("'")[1];
    if (selected.some(item => item.id === ingId)) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });

  // Actualizar lista de seleccionados
  const list = document.getElementById("selectedList");
  if (selected.length === 0) {
    list.innerHTML = `<li class="empty-msg">No has seleccionado ingredientes aún.</li>`;
  } else {
    list.innerHTML = selected.map(item => `<li><strong>${item.name}</strong></li>`).join("");
  }
}

function brewTea() {
  if (selected.length === 0) {
    alert("Agrega al menos un ingrediente botánico antes de infusionar.");
    return;
  }

  const liquid = document.getElementById("teaLiquid");
  const steam = document.getElementById("steamContainer");
  const propertiesText = document.getElementById("propertiesText");
  const swatches = document.getElementById("colorSwatches").children;

  // Lógica de mezcla de color simple
  const primaryColor = selected[0].color;
  const secondaryColor = selected[1] ? selected[1].color : primaryColor;

  liquid.style.height = "85%";
  liquid.style.backgroundColor = primaryColor;
  steam.classList.add("active");

  // Mostrar propiedades combinadas
  const effectsList = selected.map(s => s.effect).join("<br>• ");
  propertiesText.innerHTML = `<strong>Perfil de Infusión:</strong><br>• ${effectsList}`;

  // Actualizar Paleta Cromática
  swatches[0].style.backgroundColor = primaryColor;
  swatches[1].style.backgroundColor = secondaryColor;
  swatches[2].style.backgroundColor = selected[2] ? selected[2].color : "#1e1b18";
}

function resetCup() {
  selected = [];
  document.getElementById("teaLiquid").style.height = "0%";
  document.getElementById("steamContainer").classList.remove("active");
  document.getElementById("propertiesText").innerText = "Selecciona ingredientes e infusiona para ver las notas botánicas.";
  
  const swatches = document.getElementById("colorSwatches").children;
  swatches[0].style.backgroundColor = "#3d2f26";
  swatches[1].style.backgroundColor = "#5c4436";
  swatches[2].style.backgroundColor = "#8a6851";

  updateUI();
}