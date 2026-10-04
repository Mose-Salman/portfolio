"use strict";

const german = {
  "skip": "Zum Inhalt springen",
  "nav": "Hauptnavigation",
  "mobileNav": "Mobile Navigation",
  "language": "Sprache",
  "navExperience": "Erfahrung",
  "navWork": "Projekte",
  "navAbout": "Über mich",
  "navContact": "Kontakt",
  "menu": "Menü",
  "location": "HAMBURG, DEUTSCHLAND",
  "role": "DevOps & Halbleitersicherheit",
  "intro": "Ich entwickle zuverlässige Engineering-Workflows an der Schnittstelle von Softwarebereitstellung und Hardware-Sicherheit. Aktuell arbeite ich in eSE Development Operations bei NXP Semiconductors.",
  "explore": "Meine Projekte",
  "download": "Öffentlichen Lebenslauf ansehen",
  "email": "E-Mail",
  "portraitRole": "Ingenieur. Entwickler. Problemlöser.",
  "portraitSub": "Von sicherer Firmware bis zum produktiven Betrieb.",
  "focusLabel": "MEINE SCHWERPUNKTE",
  "secureFirmware": "Sichere Firmware",
  "infrastructure": "Infrastrukturautomatisierung",
  "expEyebrow": "01 — ERFAHRUNG",
  "expTitle": "Vertrauen schaffen.\nEntwicklung voranbringen.",
  "expIntro": "Seit Februar 2022 bei NXP – von Trust Provisioning bis zum Entwicklungsbetrieb für Secure Elements.",
  "companyLocation": "Hamburg, Deutschland",
  "nxpPeriod": "FEB 2022 — HEUTE",
  "companyNote": "Durchgehend bei NXP beschäftigt, als Werkstudent, Praktikant und Bachelorand.",
  "currentPeriod": "SEP 2026 — HEUTE",
  "currentBadge": "Aktuell",
  "eseContext": "Werkstudent · Secure Connected Edge · JCOP / Java Card",
  "ese1": "Pflege und Erweiterung von Jenkins-Pipelines für automatisierte Builds und Tests von JCOP- und embedded-Secure-Element-Software.",
  "ese2": "Aufbau von Observability mit Grafana / Prometheus und wiederverwendbaren Engineering-Dashboards.",
  "ese3": "Gemeinsame Entwicklung einer PostgreSQL-basierten KPI-Plattform mit SQL-Abfragen und Grafana-Visualisierungen.",
  "ese4": "Automatisierung reproduzierbarer Entwicklungs- und Testumgebungen mit Ansible sowie Bearbeitung von Pipeline- und Tooling-Anfragen.",
  "trustPeriod": "FEB 2022 — AUG 2026",
  "trustContext": "Engineering Operations & DevOps · Werkstudent, Praktikant und Bachelorand",
  "trust1": "Praktische Arbeit mit PKI-Administration, HSM-basiertem Signieren, Geräteauthentifizierung sowie Schlüssel- und Zertifikatslebenszyklen.",
  "trust2": "Entwicklung von Python- und Bash-Automatisierung für Provisioning und wiederkehrende Betriebsabläufe.",
  "trust3": "Unterstützung von CI/CD, Container-Deployments, Monitoring und kontrollierten Releases in Entwicklung, Test und Produktion.",
  "earlier": "Weitere Berufserfahrung",
  "research": "Studentische Forschungskraft im International Economics Program: Datenanalyse, Literaturrecherche und interaktive Lernmaterialien.",
  "robotics": "Praktikum im Bereich Robotics Engineering: autonome Roboter zur Probenentnahme und für Kommunikationsaufgaben.",
  "workEyebrow": "02 — AUSGEWÄHLTE PROJEKTE",
  "workTitle": "Von der Idee\nzum funktionierenden System.",
  "workIntro": "Eine Auswahl aus angewandtem Engineering, Forschung und produktivem Betrieb.",
  "thesisTag": "BACHELORARBEIT · NXP / HAW",
  "thesisTitle": "Post-Quanten-\nFirmware-Sicherheit.",
  "thesisText": "Implementierung der Firmware-Signaturprüfung mit SPHINCS+ und Vergleich von SPHINCS+ und LMS auf dem NXP i.MX93. Entwicklung einer Python-/PySide6-Anwendung mit SQLite für Schlüsselverwaltung und Firmware-Signierung.",
  "thesisNote": "Okt 2024 – Jan 2025 · Bachelorarbeit",
  "discuss": "Über das Projekt sprechen",
  "productionTag": "PRODUKTIVER BETRIEB",
  "yallaText": "Bereitstellung und Betrieb einer Hamburger Community-Website auf einem IONOS VPS. GitHub Actions, Docker / Compose und Nginx, mit Healthchecks, Prüfung von Security-Headern und releasebasierten Deployments.",
  "yallaNote": "Produktive Anwendung · Laufend",
  "visit": "Website besuchen",
  "embeddedTag": "EMBEDDED / IoT · HAW",
  "supplyTitle": "Sichere intelligente\nLieferkette.",
  "supplyText": "Intelligente Container mit Sensoren, GPS und IoT-Knoten zur Echtzeitverfolgung. Sichere Speicherung, Provisioning und Schlüsselverwaltung in einem verteilten Embedded-System unter Nutzung von RIOT-OS-Konzepten.",
  "sensors": "Sensoren",
  "supplyNote": "2023 · Hochschulprojekt",
  "protocolTag": "EMBEDDED-KOMMUNIKATION · HAW",
  "busTitle": "Bussysteme\nund Sensoren.",
  "busText": "Analyse von Ethernet, CAN, SPI, USB und RS485 für Embedded-Systeme. Vergleich der Protokolle und Dokumentation von Kommunikationsanforderungen und Auswahlkriterien.",
  "busNote": "2020 – 2021 · Hochschulprojekt",
  "moreGit": "Meine öffentlichen Repositories auf GitHub",
  "skillsEyebrow": "03 — WERKZEUGE",
  "skillsTitle": "Die Werkzeuge hinter der Arbeit.",
  "skillsIntro": "Praktische Umsetzung mit Blick auf Sicherheit und zuverlässigen Betrieb.",
  "automation": "CI/CD & Automatisierung",
  "observability": "Observability & Daten",
  "security": "Sicherheit & Embedded",
  "runtime": "Plattformen & Betrieb",
  "supportLabel": "Erfahrung in der Betriebsunterstützung",
  "aboutEyebrow": "04 — ÜBER MICH",
  "aboutTitle": "Neugierig im Denken.\nPraktisch im Handeln.",
  "aboutText": "Ich bin Absolvent der Information Engineering und lebe in Hamburg. Meine Arbeit verbindet Softwarebereitstellung, Embedded-Systeme und kryptografische Sicherheit. Ich entwickle gern klare, wartbare Abläufe für wiederkehrende Engineering-Aufgaben.",
  "aboutText2": "Neben meiner Engineering-Arbeit betreue ich die Community-Website von YallaDabka mit – und bringe dieselbe Sorgfalt für zuverlässige Bereitstellung in eine produktive Anwendung ein.",
  "ongoing": "AKTUELLES STUDIUM",
  "masterNote": "Seit 2025 eingeschrieben",
  "degree": "BACHELORABSCHLUSS",
  "training": "WEITERBILDUNG",
  "languagesTitle": "SPRACHEN",
  "languagesText": "Arabisch · Muttersprache\nEnglisch · C1 / Fließend\nDeutsch · A2 / Weiteres Lernen",
  "contactEyebrow": "05 — KONTAKT",
  "contactTitle": "Gemeinsam\nZuverlässiges entwickeln.",
  "contactText": "Interesse an DevOps, Platform Engineering oder Halbleitersicherheit? Ich freue mich auf den Austausch.",
  "cvEn": "Englischer Lebenslauf",
  "cvDe": "Deutscher Lebenslauf",
  "footer": "Hamburg, Deutschland · Persönliches Engineering-Portfolio"
};

const originals = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => {
  originals.set(element, Array.from(element.childNodes, node => node.cloneNode(true)));
});
const originalLabels = new Map();
document.querySelectorAll("[data-i18n-aria]").forEach(element => {
  originalLabels.set(element, element.getAttribute("aria-label"));
});

function setLanguage(language, updateUrl = true) {
  const isGerman = language === "de";
  const lang = isGerman ? "de" : "en";
  originals.forEach((nodes, element) => {
    const translated = german[element.dataset.i18n];
    if (isGerman && translated !== undefined) {
      const lines = translated.split("\n");
      const children = [];
      lines.forEach((line, index) => {
        if (index) children.push(document.createElement("br"));
        children.push(document.createTextNode(line));
      });
      element.replaceChildren(...children);
    } else {
      element.replaceChildren(...nodes.map(node => node.cloneNode(true)));
    }
  });
  originalLabels.forEach((label, element) => {
    element.setAttribute("aria-label", isGerman ? german[element.dataset.i18nAria] : label);
  });
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-language]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.language === lang));
  });
  document.querySelectorAll(".cv-link").forEach(link => {
    link.href = `resume-${lang}.html`;
  });
  document.title = isGerman
    ? "Mostafa Salman · DevOps & Halbleitersicherheit"
    : "Mostafa Salman · DevOps & Semiconductor Security";
  document.querySelector('meta[name="description"]').content = isGerman
    ? "Mostafa Salman, DevOps Engineer in Hamburg. NXP eSE Development Operations, CI/CD, Observability, PKI/HSM und Post-Quanten-Firmware-Sicherheit."
    : "Mostafa Salman, DevOps engineer in Hamburg. NXP eSE development operations, CI/CD, observability, PKI/HSM and post-quantum firmware security.";
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (isGerman) url.searchParams.set("lang", "de");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
  }
}

document.querySelectorAll("[data-language]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
document.querySelectorAll(".mobile-nav nav a").forEach(link => {
  link.addEventListener("click", () => { document.querySelector(".mobile-nav").open = false; });
});
setLanguage(new URL(window.location.href).searchParams.get("lang"), false);
