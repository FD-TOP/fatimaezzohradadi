import { CV_CONTENT } from './cv-content.mjs';

const CONTACT = {
  email: 'fatimaezzohradadi1@gmail.com',
  phone: '+33 7 53 67 04 09',
  portfolio: 'https://fatimaezzohradadi.fr',
};

function skillBar(skill, lvlLabel, maxLevel = 10) {
  const pct = (skill.level / maxLevel) * 100;
  return `
    <div class="skill-row">
      <div class="skill-top">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-lvl">${lvlLabel} ${skill.level}</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width:${pct}%"></div>
      </div>
    </div>
  `;
}

function statBar(label, pct, type) {
  return `
    <div class="stat-bar">
      <div class="stat-label"><span>${label}</span><span>${pct}%</span></div>
      <div class="stat-track ${type}"><div class="stat-fill" style="width:${pct}%"></div></div>
    </div>
  `;
}

export function buildCvHtml(lang, photoDataUri) {
  const c = CV_CONTENT[lang];
  const g = c.gaming;

  const skillTree = c.skillsWithLevels.map(s => skillBar(s, g.lvl)).join('');

  const quests = c.experiences.map(e => `
    <article class="quest">
      <div class="quest-head">
        <div>
          <h3>${e.title}</h3>
          <div class="quest-guild">${e.place}</div>
        </div>
        <span class="quest-date">${e.date}</span>
      </div>
      <ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </article>
  `).join('');

  const lore = c.education.map(e => `
    <div class="lore-item">
      <strong>${e.place}</strong>
      <span>${e.title} · ${e.date}</span>
    </div>
  `).join('');

  const localization = c.languages.map(l => `
    <div class="loc-item"><span>${l.name}</span> <em>(${l.level})</em></div>
  `).join('');

  const achievements = c.certifications.map(cert => `
    <div class="achieve-item">
      <span class="achieve-icon">★</span>
      <div><strong>${cert.title}</strong><span>${cert.issuer}</span></div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>CV — Fatima Ezzohra Dadi</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: Consolas, 'Courier New', monospace;
      font-size: 6.8pt;
      line-height: 1.38;
      color: rgba(255,255,255,0.82);
      background: #050508;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .cv {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      overflow: hidden;
      padding: 5mm 6mm 5mm;
      display: flex;
      flex-direction: column;
      gap: 3.5mm;
    }

    /* ── TOP HUD ── */
    .hud {
      display: grid;
      grid-template-columns: 30mm 1fr auto;
      gap: 4mm;
      align-items: start;
      flex-shrink: 0;
    }
    .avatar {
      width: 30mm;
      height: 30mm;
      border-radius: 6px;
      overflow: hidden;
      border: 2px solid #ff2d75;
      box-shadow: 0 0 18px rgba(255,45,117,0.35);
    }
    .avatar img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    .hud-center h1 {
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 16pt;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: linear-gradient(90deg, #ff2d75, #bc13fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.05;
      margin-bottom: 2mm;
    }
    .hud-center .role {
      font-size: 7pt;
      color: rgba(255,255,255,0.55);
      margin-bottom: 2.5mm;
    }
    .stat-bar { margin-bottom: 1.5mm; }
    .stat-label {
      display: flex;
      justify-content: space-between;
      font-size: 6pt;
      color: rgba(255,255,255,0.5);
      margin-bottom: 1mm;
      letter-spacing: 1px;
    }
    .stat-track {
      height: 5px;
      background: rgba(255,255,255,0.08);
      border-radius: 3px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .stat-fill {
      height: 100%;
      border-radius: 2px;
    }
    .stat-track.code .stat-fill { background: linear-gradient(90deg, #ff2d75, #ff5c8a); }
    .stat-track.design .stat-fill { background: linear-gradient(90deg, #bc13fe, #d946ef); }
    .hud-contact {
      text-align: right;
      font-size: 6.2pt;
      color: rgba(255,255,255,0.55);
      line-height: 1.55;
      padding-top: 1mm;
    }
    .hud-contact strong { color: #ff2d75; }

    /* ── BOXES ── */
    .grid {
      flex: 1;
      display: grid;
      grid-template-columns: 64mm 1fr;
      grid-template-rows: 1fr;
      gap: 3.5mm;
      min-height: 0;
      overflow: hidden;
      align-items: stretch;
    }
    .col {
      display: flex;
      flex-direction: column;
      gap: 3mm;
      min-height: 0;
      height: 100%;
    }
    .box {
      background: #0d0d14;
      border: 1px solid rgba(255,45,117,0.28);
      border-radius: 6px;
      padding: 2.5mm 3mm;
      flex-shrink: 0;
    }
    .box.grow {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .box.grow .box-body { flex: 1; }
    .box-title {
      font-size: 6.5pt;
      font-weight: 700;
      color: #ff2d75;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      margin-bottom: 2mm;
      padding-bottom: 1.5mm;
      border-bottom: 1px solid rgba(255,45,117,0.2);
      display: flex;
      align-items: center;
      gap: 2mm;
    }
    .box-title::before {
      content: '◆';
      color: #bc13fe;
      font-size: 5pt;
    }

    /* Player stats */
    .stat-line {
      display: flex;
      gap: 2mm;
      margin-bottom: 1.2mm;
      font-size: 6.4pt;
    }
    .stat-line .lbl {
      color: #ff2d75;
      font-weight: 700;
      min-width: 14mm;
      text-transform: uppercase;
      font-size: 6pt;
    }
    .stat-line .val { color: rgba(255,255,255,0.78); }

    /* Skill tree */
    .skill-row { margin-bottom: 2mm; }
    .skill-top {
      display: flex;
      justify-content: space-between;
      font-size: 6pt;
      margin-bottom: 0.8mm;
    }
    .skill-name { color: rgba(255,255,255,0.8); }
    .skill-lvl { color: #bc13fe; font-weight: 700; }
    .skill-track {
      height: 4px;
      background: rgba(255,255,255,0.06);
      border-radius: 2px;
      overflow: hidden;
    }
    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, #bc13fe, #ff2d75);
      border-radius: 2px;
    }

    /* Lore */
    .lore-item {
      margin-bottom: 2mm;
      line-height: 1.35;
    }
    .lore-item strong {
      display: block;
      font-size: 6.8pt;
      color: #fff;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .lore-item span {
      font-size: 6pt;
      color: rgba(255,255,255,0.45);
    }

    /* Localization */
    .loc-item {
      font-size: 6.4pt;
      margin-bottom: 1.2mm;
      color: rgba(255,255,255,0.75);
    }
    .loc-item em { color: rgba(255,255,255,0.4); font-style: normal; font-size: 6pt; }

    /* Achievements */
    .achieve-item {
      display: flex;
      gap: 2mm;
      margin-bottom: 1.5mm;
      align-items: flex-start;
    }
    .achieve-icon { color: #ff2d75; font-size: 7pt; line-height: 1; }
    .achieve-item strong {
      display: block;
      font-size: 6.4pt;
      color: #fff;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .achieve-item span { font-size: 6pt; color: rgba(255,255,255,0.4); }

    /* Mission */
    .mission-text {
      font-size: 6.8pt;
      color: rgba(255,255,255,0.65);
      line-height: 1.48;
      font-family: 'Segoe UI', Arial, sans-serif;
    }

    /* Quest log */
    .quests { display: flex; flex-direction: column; gap: 2.5mm; }
    .quest {
      padding-bottom: 2mm;
      border-bottom: 1px solid rgba(255,45,117,0.1);
    }
    .quest:last-child { border-bottom: none; padding-bottom: 0; }
    .quest-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3mm;
      margin-bottom: 1mm;
    }
    .quest h3 {
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 7.6pt;
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.5mm;
    }
    .quest-guild {
      font-size: 6.4pt;
      color: #ff6b9d;
      font-weight: 600;
    }
    .quest-date {
      font-size: 5.8pt;
      font-weight: 700;
      color: #ff2d75;
      border: 1px solid rgba(255,45,117,0.5);
      border-radius: 3px;
      padding: 0.8mm 2mm;
      white-space: nowrap;
      flex-shrink: 0;
      background: rgba(255,45,117,0.08);
    }
    .quest ul {
      margin-left: 3.5mm;
      font-size: 6.4pt;
      color: rgba(255,255,255,0.55);
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .quest ul li { margin-bottom: 0.5mm; }
    .quest ul li::marker { color: #bc13fe; }

    .interests-line {
      font-size: 6.2pt;
      color: rgba(255,255,255,0.45);
      margin-top: 1mm;
    }
  </style>
</head>
<body>
  <div class="cv">
    <header class="hud">
      <div class="avatar">
        <img src="${photoDataUri}" alt="Fatima Ezzohra Dadi">
      </div>
      <div class="hud-center">
        <h1>Fatima Ezzohra Dadi</h1>
        <p class="role">${c.role}</p>
        ${statBar(g.bar1, g.bar1Pct, 'code')}
        ${statBar(g.bar2, g.bar2Pct, 'design')}
      </div>
      <div class="hud-contact">
        <div><strong>${g.tel}</strong> ${CONTACT.phone}</div>
        <div><strong>${g.mail}</strong> ${CONTACT.email}</div>
        <div><strong>${g.portfolio}</strong> ${CONTACT.portfolio}</div>
        <div>${c.contact.license}</div>
      </div>
    </header>

    <div class="grid">
      <div class="col">
        <div class="box">
          <div class="box-title">${g.playerStats}</div>
          <div class="stat-line"><span class="lbl">${g.classLabel}</span><span class="val">${g.classValue}</span></div>
          <div class="stat-line"><span class="lbl">${g.guildLabel}</span><span class="val">${g.guildValue}</span></div>
          <div class="stat-line"><span class="lbl">${g.serverLabel}</span><span class="val">${g.serverValue}</span></div>
        </div>

        <div class="box">
          <div class="box-title">${g.skillTree}</div>
          ${skillTree}
        </div>

        <div class="box">
          <div class="box-title">${g.lore}</div>
          ${lore}
        </div>

        <div class="box">
          <div class="box-title">${g.localization}</div>
          ${localization}
        </div>

        <div class="box grow">
          <div class="box-title">${g.achievements}</div>
          <div class="box-body">
            ${achievements}
            <p class="interests-line">${c.interests}</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="box">
          <div class="box-title">${g.mission}</div>
          <p class="mission-text">${c.profile}</p>
        </div>

        <div class="box grow">
          <div class="box-title">${g.questLog}</div>
          <div class="box-body quests">${quests}</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}
