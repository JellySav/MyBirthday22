// Widget global para Jelly
document.addEventListener("DOMContentLoaded", () => {
  createJellyWidget();
});

function createJellyWidget() {
  const jellyContainer = document.createElement("div");
  jellyContainer.id = "jellyWidget";
  jellyContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: sans-serif;
  `;

  jellyContainer.innerHTML = `
    <div id="jellyBubble" style="
      display: none;
      background: #10001a;
      border: 2px solid #00f0ff;
      color: #fff;
      padding: 10px 14px;
      border-radius: 12px;
      margin-bottom: 8px;
      max-width: 220px;
      font-size: 0.85rem;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
    ">
      ¡Hola! Soy <b>Jelly</b> 🪼. ¡Bienvenidx a mi altar musical! Haz clic en las photocards para descubrir mis canciones favoritas.
    </div>
    <button id="jellyAvatar" style="
      background: #ff3385;
      border: 2px solid #fff;
      border-radius: 50%;
      width: 55px;
      height: 55px;
      cursor: pointer;
      font-size: 1.8rem;
      box-shadow: 0 0 12px #ff3385;
      transition: transform 0.2s;
    ">🪼</button>
  `;

  document.body.appendChild(jellyContainer);

  const avatarBtn = document.getElementById("jellyAvatar");
  const bubble = document.getElementById("jellyBubble");

  avatarBtn.addEventListener("click", () => {
    const isHidden = bubble.style.display === "none";
    bubble.style.display = isHidden ? "block" : "none";
  });
}