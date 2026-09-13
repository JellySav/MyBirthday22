// Estado inicial de la mascota
const pet = {
  hunger: 80,
  happy: 80,
  energy: 80,
  isSleeping: false,
  isDirty: false,
  petStage: "👾"
};

// Bucle de decrecimiento automático (Tick de tiempo)
setInterval(() => {
  if (!pet.isSleeping) {
    pet.hunger = Math.max(0, pet.hunger - 3);
    pet.happy = Math.max(0, pet.happy - 2);
    pet.energy = Math.max(0, pet.energy - 1);

    // Probabilidad de ensuciar la pantalla
    if (Math.random() < 0.1 && !pet.isDirty) {
      pet.isDirty = true;
    }
  } else {
    // Si duerme, recupera energía
    pet.energy = Math.min(100, pet.energy + 8);
  }

  updatePetDisplay();
}, 3000);

function updatePetDisplay() {
  document.getElementById("barHunger").style.width = pet.hunger + "%";
  document.getElementById("barHappy").style.width = pet.happy + "%";
  document.getElementById("barEnergy").style.width = pet.energy + "%";

  const bubble = document.getElementById("statusBubble");
  const avatar = document.getElementById("petAvatar");
  const poop = document.getElementById("poopDisplay");
  const lcd = document.getElementById("lcdScreen");

  // Mostrar u ocultar suciedad
  if (pet.isDirty) {
    poop.classList.add("visible");
    document.getElementById("iconClean").classList.add("active");
  } else {
    poop.classList.remove("visible");
    document.getElementById("iconClean").classList.remove("active");
  }

  // Comportamiento según necesidades
  if (pet.isSleeping) {
    avatar.innerText = "😴";
    bubble.innerText = "Zzz...";
    lcd.classList.add("sleeping");
  } else {
    lcd.classList.remove("sleeping");
    if (pet.hunger < 30) {
      avatar.innerText = "🥺";
      bubble.innerText = "¡Tengo hambre!";
      document.getElementById("iconHunger").classList.add("active");
    } else if (pet.happy < 30) {
      avatar.innerText = "😭";
      bubble.innerText = "¡Aburrido!";
      document.getElementById("iconPlay").classList.add("active");
    } else {
      avatar.innerText = pet.petStage;
      bubble.innerText = "¡Súper bien!";
      document.getElementById("iconHunger").classList.remove("active");
      document.getElementById("iconPlay").classList.remove("active");
    }
  }
}

function feedPet() {
  if (pet.isSleeping) return;
  pet.hunger = Math.min(100, pet.hunger + 25);
  document.getElementById("statusBubble").innerText = "¡Ñam ñam! 🍗";
  updatePetDisplay();
}

function playWithPet() {
  if (pet.isSleeping) return;
  if (pet.energy < 15) {
    document.getElementById("statusBubble").innerText = "Muy cansado...";
    return;
  }
  pet.happy = Math.min(100, pet.happy + 20);
  pet.energy = Math.max(0, pet.energy - 10);
  document.getElementById("statusBubble").innerText = "¡Yupiii! ⚽";
  updatePetDisplay();
}

function toggleSleep() {
  pet.isSleeping = !pet.isSleeping;
  updatePetDisplay();
}

function cleanPet() {
  if (pet.isDirty) {
    pet.isDirty = false;
    document.getElementById("statusBubble").innerText = "¡Limpio! ✨";
    updatePetDisplay();
  }
}

// Inicialización
updatePetDisplay();