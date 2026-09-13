const cardsData = [
  {
    hanzi: "日",
    pinyin: "rì",
    meaning: "Sol / Día",
    category: "nature",
    etymology: "Representa originalmente un círculo con un punto en el centro, simbolizando la luz solar.",
    exHanzi: "今日 (jīnrì)",
    exTrans: "Hoy / Día actual"
  },
  {
    hanzi: "月",
    pinyin: "yuè",
    meaning: "Luna / Mes",
    category: "nature",
    etymology: "Pictograma que evoca la forma cóncava de la luna creciente.",
    exHanzi: "明月 (míngyuè)",
    exTrans: "Luna brillante"
  },
  {
    hanzi: "爱",
    pinyin: "ài",
    meaning: "Amor / Amar",
    category: "emotions",
    etymology: "Ideograma que combina garras, cubierta y un corazón (心) en el centro.",
    exHanzi: "热爱 (rè'ài)",
    exTrans: "Sentir pasión por algo"
  },
  {
    hanzi: "美",
    pinyin: "měi",
    meaning: "Belleza / Hermoso",
    category: "emotions",
    etymology: "Compuesto por 'oveja grande' (羊 + 大), símbolo tradicional de prosperidad y armonía visual.",
    exHanzi: "美术 (měishù)",
    exTrans: "Bellas artes"
  },
  {
    hanzi: "道",
    pinyin: "dào",
    meaning: "El Camino / Dao",
    category: "abstract",
    etymology: "Combina el símbolo de cabeza/pensamiento con el de movimiento en ruta.",
    exHanzi: "道理 (dàolǐ)",
    exTrans: "Razón / Principio lógico"
  },
  {
    hanzi: "梦",
    pinyin: "mèng",
    meaning: "Sueño / Soñar",
    category: "abstract",
    etymology: "Representa la visión nocturna entre la sombra de la hierba y la mente.",
    exHanzi: "梦想 (mèngxiǎng)",
    exTrans: "Sueño / Anhelo del corazón"
  }
];

let currentList = [...cardsData];
let currentIndex = 0;

function updateCardDisplay() {
  const card = currentList[currentIndex];
  document.getElementById("hanziDisplay").innerText = card.hanzi;
  document.getElementById("pinyinDisplay").innerText = card.pinyin;
  document.getElementById("meaningDisplay").innerText = card.meaning;
  document.getElementById("etymologyDisplay").innerText = card.etymology;
  document.getElementById("exampleHanzi").innerText = card.exHanzi;
  document.getElementById("exampleTrans").innerText = card.exTrans;
  
  document.getElementById("cardCounter").innerText = `${currentIndex + 1} / ${currentList.length}`;
  
  // Resetear giro al cambiar
  document.getElementById("cardInner").classList.remove("flipped");
}

function flipCard() {
  document.getElementById("cardInner").classList.toggle("flipped");
}

function nextCard() {
  if (currentIndex < currentList.length - 1) {
    currentIndex++;
    updateCardDisplay();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCardDisplay();
  }
}

function filterCards(cat) {
  document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (cat === "all") {
    currentList = [...cardsData];
  } else {
    currentList = cardsData.filter(item => item.category === cat);
  }
  
  currentIndex = 0;
  updateCardDisplay();
}

// Inicialización
updateCardDisplay();