// Builds the transit-map SVGs in assets/. Run from the repo root: node scripts/build-map.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.argv[2] ?? '.';
mkdirSync(join(OUT, 'assets'), { recursive: true });

const themes = {
  dark:  { card: '#10151c', stroke: '#262c36', fg: '#eef0f2', muted: '#a9b1bc', career: '#ff7a45', build: '#3fb7ff', cert: '#5ed37f' },
  light: { card: '#fbfaf7', stroke: '#e2e0d8', fg: '#16181d', muted: '#5b6470', career: '#e8590c', build: '#0a7ccf', cert: '#1f9d55' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// label: [x, y, text, cls, anchor]
const labels = [];
const L = (x, y, t, cls, a = 'middle') => labels.push([x, y, t, cls, a]);

const BY = 350, CY = 190, CY2 = 510, XY = 620;

// Career line
L(60, CY - 34, 'CUT', 'n', 'start'); L(60, CY - 18, 'Adv. Diploma in IT', 's', 'start');
L(290, CY - 34, 'WWISE', 'n'); L(290, CY - 18, 'facilitator · 2025', 's');
L(388, BY + 74, 'CTU', 'n', 'start'); L(388, BY + 90, 'facilitator · NQF 6', 's', 'start');
L(600, CY2 - 34, 'SETA Assessor', 'n'); L(600, CY2 - 18, 'ETDP registered', 's');
L(900, CY2 - 34, 'MCT', 'n'); L(900, CY2 - 18, 'next stop', 's');

// Build line (chronological by repo creation)
const build = [
  [60, 'AZ-104 Labs', 'Azure · Entra ID', 'up', 'start'],
  [160, 'TiroMoMangaung', 'Flutter · Firebase', 'down'],
  [265, 'FreshFadez', 'Flutter UI', 'up'],
  [470, 'UnitTesting', 'C# · .NET tests', 'down'],
  [570, 'MzansiPayrollSystem', 'C# · WinForms · MSTest', 'up'],
  [670, 'Robotics Intro', 'Arduino · C++', 'down'],
  [765, 'RobotoRemote', 'C# ↔ Arduino', 'up'],
  [850, 'MoTiroong', 'gov client · in build', 'down'],
  [952, 'Mashibini Prayer', 'daily prayer app', 'up', 'end'],
];
for (const [x, n, s, d, a = 'middle'] of build) {
  if (d === 'up') { L(x, BY - 40, n, 'n', a); L(x, BY - 24, s, 's', a); }
  else { L(x, BY + 34, n, 'n', a); L(x, BY + 50, s, 's', a); }
}

// Cert line
const cert = [
  [60, 'Fundamentals', 'AZ/SC/DP-900 · Cisco', 'down', 'start'],
  [215, 'AWS · OCI', 'CCP · OCI Associate', 'up'],
  [370, 'Associate ×4', 'AZ-104 AZ-204 DP-700 PL-300', 'down'],
  [525, 'AZ-140', 'Virtual Desktop specialty', 'up'],
  [680, 'Security', 'SC-200 SC-300 ISO 27001', 'down'],
];
for (const [x, n, s, d, a = 'middle'] of cert) {
  if (d === 'up') { L(x, XY - 40, n, 'n', a); L(x, XY - 24, s, 's', a); }
  else { L(x, XY + 34, n, 'n', a); L(x, XY + 50, s, 's', a); }
}

const legend = ['Career line', 'Build line', 'Cert line', 'Interchange', '15 certs passed · 9 builds'];
const title = 'Jabulile Mashibini';
const subtitle = 'Network map · software engineer & educator · South Africa';
const corner = ['not to scale', 'rev. 2026.09'];

// Collect glyphs per font so Google Fonts can subset them
const displayText = new Set([...title, ...subtitle, ...labels.filter((l) => l[3] === 'n').map((l) => l[2]).join('')]);
const monoText = new Set([...corner.join(''), ...legend.join(''), ...labels.filter((l) => l[3] === 's').map((l) => l[2]).join('')]);

async function fontFaces(family, weights, chars) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weights.join(';')}&text=${encodeURIComponent([...chars].join(''))}`;
  const css = await (await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36' } })).text();
  const faces = [...css.matchAll(/font-weight:\s*(\d+);[\s\S]*?src:\s*url\(([^)]+)\)/g)];
  if (!faces.length) throw new Error('no faces for ' + family + '\n' + css);
  const out = [];
  for (const [, w, src] of faces) {
    const b64 = Buffer.from(await (await fetch(src)).arrayBuffer()).toString('base64');
    out.push(`@font-face{font-family:'${family}';font-weight:${w};src:url(data:font/woff2;base64,${b64}) format('woff2')}`);
  }
  return out.join('');
}

const fonts = (await fontFaces('Red Hat Display', [500, 700, 900], displayText)) + (await fontFaces('Red Hat Mono', [400], monoText));

const st = (x, y, color, t, { r = 9, dashed = false } = {}) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${t.card}" stroke="${color}" stroke-width="${r > 9 ? 6 : 5}"${dashed ? ' stroke-dasharray="4 4"' : ''}/>`;
const ix = (x, y, t, dashed = false) =>
  `<circle cx="${x}" cy="${y}" r="13" fill="${t.card}" stroke="${t.fg}" stroke-width="5"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;

function svg(t) {
  const W = 1000, H = 780;
  const lines = `
<path d="M60 ${CY} H310 Q370 ${CY} 370 ${CY + 70} V${CY2 - 70} Q370 ${CY2} 440 ${CY2} H780" fill="none" stroke="${t.career}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M780 ${CY2} H900" fill="none" stroke="${t.career}" stroke-width="9" stroke-linecap="round" stroke-dasharray="1 16"/>
<path d="M60 ${BY} H850" fill="none" stroke="${t.build}" stroke-width="9" stroke-linecap="round"/>
<path d="M850 ${BY} H940" fill="none" stroke="${t.build}" stroke-width="9" stroke-linecap="round" stroke-dasharray="1 16"/>
<path d="M60 ${XY} H830 Q900 ${XY} 900 ${XY - 70} V${CY2 + 10}" fill="none" stroke="${t.cert}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
  const stations = [
    st(60, CY, t.career, t), st(290, CY, t.career, t), st(600, CY2, t.career, t),
    ...build.map(([x, n]) => n === 'MoTiroong' ? st(x, BY, t.build, t, { r: 12 }) : n === 'Mashibini Prayer' ? st(940, BY, t.build, t, { dashed: true }) : st(x, BY, t.build, t)),
    ...cert.map(([x]) => st(x, XY, t.cert, t)),
    ix(370, BY, t), ix(900, CY2, t, true),
  ].join('');
  const text = labels.map(([x, y, s, c, a]) => `<text x="${x}" y="${y}" class="${c}" text-anchor="${a}">${esc(s)}</text>`).join('');
  const lg = [
    [t.career, legend[0]], [t.build, legend[1]], [t.cert, legend[2]],
  ].map(([c, s], i) => `<rect x="${48 + i * 150}" y="${H - 44}" width="26" height="7" rx="3.5" fill="${c}"/><text x="${84 + i * 150}" y="${H - 36}" class="s">${s}</text>`).join('')
    + `<circle cx="${510}" cy="${H - 40}" r="7" fill="${t.card}" stroke="${t.fg}" stroke-width="3"/><text x="${526}" y="${H - 36}" class="s">${legend[3]}</text>`
    + `<text x="952" y="${H - 36}" class="s" text-anchor="end">${esc(legend[4])}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Jabulile Mashibini as a transit map: career, build and certification lines">
<style>${fonts}
.n{font:700 15px 'Red Hat Display',Segoe UI,Helvetica,sans-serif;fill:${t.fg}}
.s{font:400 11px 'Red Hat Mono',Consolas,monospace;fill:${t.muted}}
.t{font:900 46px 'Red Hat Display',Segoe UI,Helvetica,sans-serif;fill:${t.fg};letter-spacing:-0.9px}
.u{font:500 16px 'Red Hat Display',Segoe UI,Helvetica,sans-serif;fill:${t.muted}}</style>
<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="16" fill="${t.card}" stroke="${t.stroke}" stroke-width="2"/>
<text x="48" y="84" class="t">${title}</text>
<text x="48" y="114" class="u">${esc(subtitle)}</text>
<text x="952" y="74" class="s" text-anchor="end">${corner[0]}</text><text x="952" y="92" class="s" text-anchor="end">${corner[1]}</text>
${lines}
${stations}
${text}
<line x1="48" x2="952" y1="${H - 74}" y2="${H - 74}" stroke="${t.stroke}" stroke-width="2"/>
${lg}
</svg>
`;
}

for (const [name, t] of Object.entries(themes)) writeFileSync(join(OUT, 'assets', `map-${name}.svg`), svg(t));

for (const [name, c] of Object.entries({ career: '#ff7a45', build: '#3fb7ff', cert: '#5ed37f' })) {
  writeFileSync(join(OUT, 'assets', `line-${name}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 12" width="32" height="12"><rect x="0" y="2" width="32" height="8" rx="4" fill="${c}"/></svg>\n`);
}
console.log('ok');
