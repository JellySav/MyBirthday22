const commands = {
  help: `
<span class="info-msg">COMMANDS LIST:</span>
- <span class="cmd-highlight">whois &lt;domain&gt;</span>     : Realiza recon sobre un dominio objetivo
- <span class="cmd-highlight">shodan &lt;target&gt;</span>    : Escaneo de puertos y servicios
- <span class="cmd-highlight">meta &lt;file&gt;</span>        : Analiza metadatos de archivos simulados
- <span class="cmd-highlight">clear</span>              : Limpia la pantalla de la terminal
- <span class="cmd-highlight">about</span>              : Información del analista
`,
  about: `
<span class="info-msg">[ANALYST PROFILE]</span>
Agent: Eavny / Yael
Specialization: Threat Hunting & Cybersecurity Simulation
Status: ACTIVE
`,
  clear: "CLEAR"
};

const mockWhois = {
  "neomart.cl": `
<span class="success-msg">[WHOIS RESULTS: neomart.cl]</span>
Registrant: NeoMart SpA
DNS Servers: ns1.cyber-range.org, ns2.cyber-range.org
Created: 2024-03-15
IP Address: 192.168.42.10
Status: ACTIVE / MONITORED
`,
  "willay.ai": `
<span class="success-msg">[WHOIS RESULTS: willay.ai]</span>
Registrant: Willay AgTech Solutions
DNS Servers: ns-aws.willay.ai
Created: 2026-01-10
IP Address: 10.0.8.100
Status: PROTECTED / ENCRYPTED
`
};

const mockShodan = `
<span class="info-msg">[SHODAN SCAN INITIATED]</span>
Port 22/tcp   - SSH (OpenSSH 8.9p1)
Port 80/tcp   - HTTP (nginx/1.18.0)
Port 443/tcp  - HTTPS (TLS v1.3)
Port 8080/tcp - ReAct AI Dashboard [RESTRICTED]
`;

function handleCommand(event) {
  event.preventDefault();
  const inputEl = document.getElementById("cmdInput");
  const rawCmd = inputEl.value.trim();
  if (!rawCmd) return;

  const terminalOutput = document.getElementById("terminalOutput");

  // Imprimir línea del comando ingresado
  const userLine = document.createElement("div");
  userLine.className = "log-line";
  userLine.innerHTML = `<span class="prompt-user">analyst@cyber-range:~$</span> ${escapeHTML(rawCmd)}`;
  terminalOutput.appendChild(userLine);

  inputEl.value = "";

  const parts = rawCmd.split(" ");
  const mainCmd = parts[0].toLowerCase();
  const arg = parts[1] ? parts[1].toLowerCase() : "";

  const responseLine = document.createElement("div");
  responseLine.className = "log-line";

  if (mainCmd === "clear") {
    terminalOutput.innerHTML = "";
    return;
  } else if (mainCmd === "help" || mainCmd === "about") {
    responseLine.innerHTML = commands[mainCmd];
  } else if (mainCmd === "whois") {
    if (!arg) {
      responseLine.innerHTML = `<span class="alert-msg">[ERROR] Uso: whois &lt;domain&gt; (Ejemplo: whois neomart.cl o whois willay.ai)</span>`;
    } else if (mockWhois[arg]) {
      responseLine.innerHTML = mockWhois[arg];
    } else {
      responseLine.innerHTML = `<span class="alert-msg">[OSINT WARN] No se encontraron registros públicos para: ${escapeHTML(arg)}</span>`;
    }
  } else if (mainCmd === "shodan") {
    responseLine.innerHTML = mockShodan;
  } else if (mainCmd === "meta") {
    responseLine.innerHTML = `
<span class="info-msg">[METADATA EXIF EXTRACTOR]</span>
File: ${escapeHTML(arg || "evidence_sample.jpg")}
Device: Sony Alpha 7 IV
GPS Coordinates: -33.0245, -71.5518 (Valparaíso Region, Chile)
Timestamp: 2026-08-12 14:22:01 UTC
`;
  } else {
    responseLine.innerHTML = `<span class="alert-msg">Comando no reconocido: '${escapeHTML(mainCmd)}'. Escribe 'help' para ver la lista.</span>`;
  }

  terminalOutput.appendChild(responseLine);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}