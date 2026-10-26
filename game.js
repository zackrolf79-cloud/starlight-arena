/* Starlight Arena — study gymnastics game. All content comes from week.js. */
(() => {
"use strict";
const W = window.WEEK, T = W.theme;
const $ = (s, el = document) => el.querySelector(s);
const app = $("#app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
document.getElementById("bg").style.backgroundImage = `url(${T.background})`;
document.documentElement.style.setProperty("--c", T.accent);

/* ---------------- storage (local only; nothing leaves the browser) ---------------- */
const KEY = "starlight:" + W.id;
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { console.warn("save failed", e); } }
};
let S = store.get(KEY, null) || { ev: {} };
W.events.forEach(e => { S.ev[e.key] = S.ev[e.key] || { i: 0, scores: [], best: null }; });
const save = () => store.set(KEY, S);
const DEFAULT_LOOK = { leo: "starlight", sparkles: true };
let LOOK = Object.assign({}, DEFAULT_LOOK, store.get("starlight:look", {}));
if (!["starlight","galaxy","ocean","ruby","mint","sunset"].includes(LOOK.leo)) LOOK = Object.assign({}, DEFAULT_LOOK, { sparkles: LOOK.sparkles !== false });
let PORTRAIT = store.get("starlight:portrait", null);
let MUTED = store.get("starlight:mute", false);
const QS = new URLSearchParams(location.search);
let THEME = QS.get("theme") || store.get("starlight:theme", "gym");            // "gym" (default) | "wrestle"
let MODE3D = QS.get("mode") || store.get("starlight:view", "auto");           // "auto" | "3d" | "simple"
const lowEnd = () => (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) || matchMedia("(prefers-reduced-motion: reduce)").matches;
const has3D = () => !!(window.Arena3D && window.Arena3D.supported());
const use3D = () => has3D() && (MODE3D === "3d" || (MODE3D === "auto" && !lowEnd()));
/* Original kid-friendly league — no real promotions, wrestlers, logos or music. */
const WR = {
  league: "Starlight Superstar Wrestling", short: "SSW", ringName: n => `${n} “The Starlight”`,
  ev: {
    vault: { name: "Math Mayhem Championship", belt: "assets/ring/belt-vault.webp", moves: ["Ring Entrance Pose", "Rope Run Rebound", "Sparkle Crossbody", "Turnbuckle Tuck Flip", "Shooting Star Dropkick", "Moonsault Spin", "Double Rope Rebound", "Championship Pose!"] },
    bars: { name: "Word Warrior Championship", belt: "assets/ring/belt-bars.webp", moves: ["Crowd Pump", "Prefix Pounce", "Homophone Hurricane Flip", "Root Rocket Flip", "Author's Purpose Dropkick", "Spelling Bee Moonsault", "Rope-a-Rhyme Rebound", "Word Champ Pose!"] },
    beam: { name: "Power Surge Championship", belt: "assets/ring/belt-beam.webp", moves: ["Power-Up Pose", "Circuit Sprint", "Lightning Crossbody", "Battery Backflip", "Static Spark Dropkick", "Energy Moonsault", "Current Rebound", "Full Charge Pose!"] },
    floor: { name: "Colony Clash Championship", belt: "assets/ring/belt-floor.webp", moves: ["Colony Callout", "Breadbasket Bounce", "Charter Crossbody", "Tri-corner Tuck Flip", "Liberty Bell Dropkick", "Thirteen Star Moonsault", "Middle Colony Rebound", "Champion of the Colonies!"] }
  },
  anims: ["entrance", "roperun", "crossbody", "tuckflip", "dropkick", "moonsault", "rebound", "champ"]
};
const WRESTLE = () => THEME === "wrestle";
const evName = e => WRESTLE() ? WR.ev[e.key].name : e.name;
const evSkills = e => WRESTLE() ? WR.ev[e.key].moves : e.skills;
const bgURL = () => WRESTLE() ? "assets/wrestle-arena.webp" : T.background;

/* ---------------- sound (WebAudio synth, optional) ---------------- */
let AC = null;
const ac = () => { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch {} } return AC; };
function tone(f, t0, dur, type = "sine", vol = .15) {
  const c = ac(); if (!c || MUTED) return;
  const o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = f;
  const t = c.currentTime + t0; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .02); g.gain.exponentialRampToValueAtTime(.001, t + dur);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + .05);
}
const SFX = {
  click: () => tone(660, 0, .08, "triangle", .08),
  right: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, i * .08, .3, "triangle")),
  wrong: () => { tone(220, 0, .25, "sawtooth", .07); tone(196, .15, .3, "sawtooth", .06); },
  whoosh: () => { const c = ac(); if (!c || MUTED) return; const b = c.createBuffer(1, c.sampleRate * .4, c.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length); const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); f.type = "bandpass"; f.frequency.value = 1200; g.gain.value = .12; s.buffer = b; s.connect(f).connect(g).connect(c.destination); s.start(); },
  cheer: () => { const c = ac(); if (!c || MUTED) return; const b = c.createBuffer(1, c.sampleRate * 1.6, c.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / d.length) * (0.6 + 0.4 * Math.sin(i / 900)); const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); f.type = "lowpass"; f.frequency.value = 2500; g.gain.value = .18; s.buffer = b; s.connect(f).connect(g).connect(c.destination); s.start(); [784, 988, 1175, 1568].forEach((q, i) => tone(q, .1 + i * .12, .4, "triangle", .08)); }
};
/* ---------------- original music (procedural WebAudio; nothing sampled, nothing copied) ---------------- */
const MUS = { cache: {}, cur: null, want: null };
function renderSong(name) {
  if (MUS.cache[name]) return MUS.cache[name];
  const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext; if (!OAC) return Promise.resolve(null);
  const sr = 22050, bpm = name === "walkout" ? 138 : 112, b = 60 / bpm, dur = name === "walkout" ? 36 : 5;
  const c = new OAC(2, sr * dur, sr), out = c.createDynamicsCompressor(); out.connect(c.destination);
  let noiseB = c.createBuffer(1, sr, sr); { const d = noiseB.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  const env = (g, t, a, v, d) => { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + a); g.gain.exponentialRampToValueAtTime(.001, t + d); };
  const osc = (type, f, t, d, v, dest, a = .005, det = 0) => { const o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = f; o.detune.value = det; env(g, t, a, v, d); o.connect(g).connect(dest); o.start(t); o.stop(t + d + .05); return o; };
  const noise = (t, d, v, type, f, dest = out) => { const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(); s.buffer = noiseB; fl.type = type; fl.frequency.value = f; env(g, t, .002, v, d); s.connect(fl).connect(g).connect(dest); s.start(t); s.stop(t + d + .05); };
  const kick = t => { const o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(45, t + .12); env(g, t, .002, .9, .25); o.connect(g).connect(out); o.start(t); o.stop(t + .3); };
  const snare = t => { noise(t, .18, .45, "bandpass", 1900); osc("triangle", 190, t, .1, .3, out); };
  const hat = (t, v = .12) => noise(t, .05, v, "highpass", 8000);
  const crash = t => noise(t, 1.4, .25, "highpass", 5000);
  const N = m => 440 * Math.pow(2, (m - 69) / 12);
  if (name === "walkout") {
    // distorted "guitar" bus
    const ws = c.createWaveShaper(), cv = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; cv[i] = (1 + 6) * x / (1 + 6 * Math.abs(x)); } ws.curve = cv;
    const gtr = c.createGain(); gtr.gain.value = .32; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 3200; gtr.connect(ws).connect(lp).connect(out);
    const bass = c.createBiquadFilter(); bass.type = "lowpass"; bass.frequency.value = 700; bass.connect(out);
    const lead = c.createGain(); lead.gain.value = .5; const dl = c.createDelay(); dl.delayTime.value = b * .75; const fb = c.createGain(); fb.gain.value = .3; lead.connect(out); lead.connect(dl).connect(fb).connect(dl); dl.connect(out);
    const prog = [40, 36, 43, 38]; // E5 C5 G5 D5 power chords (original progression in E minor)
    const melody = [[71, 2], [74, 1], [76, 1], [79, 3], [76, 1], [74, 2], [71, 2], [74, 2], [72, 2], [71, 1], [69, 1], [67, 2], [69, 2], [71, 4], [76, 1], [79, 1], [81, 2], [79, 2], [76, 2], [74, 1], [76, 1], [79, 4], [83, 4], [81, 2], [79, 2], [76, 4]];
    // intro: crowd-swell riser + drum build (2 bars)
    noise(0, b * 8, .25, "bandpass", 900); const r = c.createOscillator(), rg = c.createGain(); r.type = "sawtooth"; r.frequency.setValueAtTime(110, 0); r.frequency.exponentialRampToValueAtTime(880, b * 8); rg.gain.setValueAtTime(0, 0); rg.gain.linearRampToValueAtTime(.08, b * 8); rg.gain.linearRampToValueAtTime(0, b * 8 + .05); r.connect(rg).connect(out); r.start(0); r.stop(b * 8 + .1);
    for (let i = 0; i < 16; i++) (i < 8 ? i % 2 === 0 : true) && snare(b * 4 + i * b / 4 * (i < 8 ? 1 : 1));
    const t0 = b * 8, bars = 18;
    for (let bar = 0; bar < bars; bar++) {
      const tb = t0 + bar * b * 4, root = prog[bar % 4], chorus = bar >= 8 && bar < 16, out2 = bar >= 16;
      if (bar % 8 === 0 || out2 && bar === 16) crash(tb);
      for (let s8 = 0; s8 < 8; s8++) {
        const t = tb + s8 * b / 2;
        hat(t, s8 % 2 ? .07 : .12);
        if (s8 === 0 || s8 === 3 || s8 === 4 || (chorus && s8 === 6)) kick(t);
        if (s8 === 2 || s8 === 6) snare(t);
        const pm = !chorus && !out2 ? .12 : .32; // palm-muted verse, open chorus
        [0, 7, 12].forEach((iv, k) => osc("sawtooth", N(root + iv), t, pm, .22, gtr, .004, k ? 6 : -6));
        osc("square", N(root - 12), t, b / 2 * .9, .28, bass);
      }
    }
    // chorus lead hook (bars 8-15)
    let tm = t0 + 8 * b * 4; for (const [m, len] of melody) { if (tm > t0 + 16 * b * 4) break; const o = osc("square", N(m), tm, len * b / 2 * .95, .12, lead, .01); const v = c.createOscillator(), vg = c.createGain(); v.frequency.value = 5.5; vg.gain.value = 6; v.connect(vg).connect(o.detune); v.start(tm); v.stop(tm + len * b / 2); tm += len * b / 2; }
    // big ending hit
    const te = t0 + bars * b * 4; crash(te); kick(te); [40, 47, 52, 56, 59].forEach(m => osc("sawtooth", N(m), te, 2.5, .16, gtr, .01));
  } else { // gymnastics fanfare: bright brass-like triad call + timpani roll
    const brass = c.createBiquadFilter(); brass.type = "lowpass"; brass.frequency.value = 2400; brass.connect(out);
    for (let i = 0; i < 10; i++) osc("sine", 98, i * .06, .2, .25 + i * .03, out);
    [[67, 0, .25], [67, .28, .14], [72, .45, .25], [76, .75, .25], [79, 1.05, 1.1], [76, 2.2, .2], [79, 2.4, 1.6]].forEach(([m, t, d]) => [0, 12].forEach(o => [-7, 7].forEach(det => osc("sawtooth", N(m + o - 12), t, d + .15, .09, brass, .03, det))));
    [60, 64, 67, 72].forEach(m => osc("sawtooth", N(m - 12), 2.4, 2, .07, brass, .08));
    crash(2.4); kick(2.4); kick(1.05);
  }
  return MUS.cache[name] = c.startRendering ? new Promise(res => { const pr = c.startRendering(); if (pr && pr.then) pr.then(res, () => res(null)); else c.oncomplete = e => res(e.renderedBuffer); }) : Promise.resolve(null);
}
async function playMusic(name, vol = .7) {
  stopMusic(.1); MUS.want = name; if (MUTED) return; const c = ac(); if (!c) return;
  const buf = await renderSong(name); if (!buf || MUS.want !== name || MUTED) return;
  if (c.state === "suspended") try { await c.resume(); } catch {}
  const src = c.createBufferSource(), g = c.createGain(); src.buffer = buf; g.gain.value = vol; src.connect(g).connect(c.destination); src.start();
  src.onended = () => { if (MUS.cur && MUS.cur.src === src) MUS.cur = null; };
  MUS.cur = { src, g, name };
}
function stopMusic(fade = .6) { MUS.want = null; const m = MUS.cur; if (!m) return; MUS.cur = null; const c = ac(); try { m.g.gain.setTargetAtTime(0, c.currentTime, fade / 3); m.src.stop(c.currentTime + fade + .1); } catch {} }
const muteBtn = $("#mute");
const paintMute = () => muteBtn.textContent = MUTED ? "🔇" : "🔊";
muteBtn.onclick = () => { MUTED = !MUTED; store.set("starlight:mute", MUTED); paintMute(); if (MUTED) stopMusic(.1); SFX.click(); };
paintMute();

/* ---------------- confetti ---------------- */
const cv = $("#confetti"), cx = cv.getContext("2d"); let parts = [], cRun = false;
function confetti(n = 160) {
  cv.width = innerWidth; cv.height = innerHeight;
  const cols = [T.accent, T.accent2, T.gold, "#fff", "#b48cff"];
  for (let i = 0; i < n; i++) parts.push({ x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * .5, vx: (Math.random() - .5) * 3, vy: 2 + Math.random() * 3, r: Math.random() * 6, s: 4 + Math.random() * 6, c: cols[i % cols.length], life: 260 });
  if (!cRun) { cRun = true; requestAnimationFrame(tickC); }
}
function tickC() {
  cx.clearRect(0, 0, cv.width, cv.height);
  parts.forEach(p => { p.x += p.vx; p.y += p.vy; p.r += .1; p.life--; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore(); });
  parts = parts.filter(p => p.life > 0 && p.y < cv.height + 20);
  if (parts.length) requestAnimationFrame(tickC); else { cRun = false; cx.clearRect(0, 0, cv.width, cv.height); }
}

/* ---------------- character (painted sprite poses, tweened) ---------------- */
// Each pose sprite: [origW, origH, hipX, hipY] (hip = rotation anchor, as fractions). 0.32 rig units per source px.
const K = 0.32;
const SPR = { stand: [141, 484, .5, .58], run1: [340, 483, .45, .6], run2: [383, 470, .45, .6], hurdle: [361, 462, .62, .7], crouch: [345, 391, .22, .6],
  tuck: [313, 325, .5, .6], pike: [305, 310, .25, .18], stretch: [143, 610, .5, .6], stick: [282, 579, .5, .65], split: [482, 294, .5, .82],
  passe: [204, 475, .5, .57], tbal: [393, 468, .5, .57], straddle: [439, 407, .5, .62], wobble: [358, 477, .5, .58], salute: [139, 493, .5, .59], celebrate: [267, 399, .5, .7],
  /* wrestling ring gear (same character) */
  rentr: [299, 471, .45, .6], rbelt: [253, 486, .5, .62], rflex: [244, 483, .5, .6], rpoint: [303, 486, .42, .6], rrun: [419, 489, .45, .62], rkick: [476, 335, .45, .55], rtuck: [313, 367, .5, .55], rland: [370, 417, .45, .62] };
const RING = new Set(["rentr", "rbelt", "rflex", "rpoint", "rrun", "rkick", "rtuck", "rland"]);
const RMAP = { stand: "rpoint", run1: "rrun", run2: "rrun", hurdle: "rrun", crouch: "rland", tuck: "rtuck", pike: "rtuck", stretch: "rkick", stick: "rflex", split: "rkick", passe: "rentr", tbal: "rentr", straddle: "rkick", wobble: "rpoint", salute: "rentr", celebrate: "rbelt" };
const LEOS = [["starlight", "Starlight (pink & teal)"], ["galaxy", "Galaxy (purple & gold)"], ["ocean", "Ocean (blue & silver)"], ["ruby", "Ruby (red & gold)"], ["mint", "Mint (green & violet)"], ["sunset", "Sunset (orange & blue)"]];
const sprURL = (n, L = LOOK) => RING.has(n) ? `assets/ring/${n}.webp` : `assets/gym/${L.leo || "starlight"}-${n}.webp`;
const pickT = p => { const n = pick(p); return WRESTLE() && !RING.has(n) ? RMAP[n] : n; };
const heroURL = (L = LOOK) => WRESTLE() ? "assets/ring/rbelt.webp" : sprURL("hero", L);
// preload so pose swaps never flash
function preload() { Object.keys(SPR).filter(n => WRESTLE() || !RING.has(n)).forEach(n => { const i = new Image(); i.src = sprURL(n); }); }
function rigSVG(L = LOOK) {
  const spark = L.sparkles ? `<g class="spk">${[[-14, -40], [16, -22], [-8, -5], [12, -52], [0, 20], [-18, 10]].map(([x, y], k) => `<path d="M${x} ${y - 4}l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="${1.1 + k * .27}s" repeatCount="indefinite"/></path>`).join("")}</g>` : "";
  return `<g data-j="root"><image class="spA" href="${sprURL("stand", L)}"/><image class="spB" href="" opacity="0"/>${spark}</g>`;
}
function pick(p) {
  if (p.spr) return p.spr;
  if (p.lhip <= -100 && p.lkn >= 120) return "tuck";
  if (p.lhip <= -140 && p.lkn < 30) return "pike";
  if (p.lhip >= 60 && p.rhip <= -80) return "split";
  if (p.rhip <= -60 && p.rkn >= 100) return "passe";
  if (p.lkn >= 80 && p.rkn >= 80 && p.lhip <= -40) return "crouch";
  if (p.sp === 12 && Math.abs(p.lhip) === 40) return p.lhip < 0 ? "run1" : "run2";
  if (p.rhip === -55) return "hurdle";
  if (p.lhip >= 30 && p.rhip <= -30) return "straddle";
  if (p.lsh === -95 && p.rsh === 70) return "tbal";
  if (p.rsh <= -140 && p.lsh >= 0) return "salute";
  if (p.lsh <= -150 && p.rsh >= 0) return "salute";
  if (p.lsh <= -150) return Math.abs(((p.r || 0) % 360)) < 20 && p.y > -80 && p.rhip > -30 ? "stick" : "stretch";
  return "stand";
}
const BASE = { x: 0, y: -66, r: 0, sx: 1, sp: 0, lsh: 10, lel: -12, rsh: -10, rel: -12, lhip: 2, lkn: 2, rhip: -2, rkn: 2, tail: 0 };
class Rig {
  constructor(g) { this.g = g; this.root = g.querySelector("[data-j=root]"); this.A = g.querySelector(".spA"); this.B = g.querySelector(".spB"); this.cur = ""; this.p = Object.assign({}, BASE); this.base = {}; this.tok = 0; this.show(WRESTLE() ? "rpoint" : "stand", true); this.apply(); }
  show(n, now) {
    if (n === this.cur) return; this.cur = n;
    const [w, h, ax, ay] = SPR[n], W2 = w * K, H2 = h * K;
    const [on, off] = [this.B, this.A]; this.A = on; this.B = off; // swap layers for a quick cross-fade
    on.setAttribute("href", sprURL(n)); on.setAttribute("x", -ax * W2); on.setAttribute("y", -ay * H2); on.setAttribute("width", W2); on.setAttribute("height", H2);
    on.style.transition = off.style.transition = now ? "none" : "opacity .09s linear"; on.setAttribute("opacity", 1); off.setAttribute("opacity", 0);
  }
  apply() { const p = this.p; this.root.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${p.r}) scale(${p.sx},1)`); }
  set(p) { Object.assign(this.p, BASE, this.base, p); this.show(pickT(this.p), true); this.apply(); }
  async play(frames) { // frames: [ [pose, ms, ease?], ... ]  pose is absolute over BASE+base; sprite chosen from target pose
    const tok = ++this.tok;
    for (const [pose, ms, ease] of frames) {
      if (tok !== this.tok) return;
      const from = Object.assign({}, this.p), to = Object.assign({}, BASE, this.base, pose);
      this.show(pickT(to));
      await new Promise(res => {
        const t0 = performance.now(), E = ease === "lin" ? (t => t) : ease === "out" ? (t => 1 - Math.pow(1 - t, 3)) : (t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        const step = now => { if (tok !== this.tok) return res(); const t = Math.min(1, (now - t0) / ms), e = E(t);
          for (const k in to) if (typeof to[k] === "number") this.p[k] = from[k] + (to[k] - from[k]) * e; this.apply(); t < 1 ? requestAnimationFrame(step) : res(); };
        requestAnimationFrame(step);
      });
    }
  }
}

/* ---------------- poses & skills ---------------- */
const P = {
  up: { lsh: -172, rsh: -168, lel: 0, rel: 0 },
  crouch: { y: -50, sp: 22, lhip: -45, rhip: -45, lkn: 85, rkn: 85, lsh: 45, rsh: 40 },
  tuck: { lhip: -128, rhip: -122, lkn: 140, rkn: 140, lsh: -70, rsh: -65, lel: -70, rel: -70 },
  pike: { lhip: -150, rhip: -148, lkn: 0, rkn: 0, lsh: -150, rsh: -150, lel: 0, rel: 0 },
  layout: { lsh: -176, rsh: -176, lel: 0, rel: 0, lhip: 8, rhip: 8, lkn: 0, rkn: 0 },
  split: { lhip: 75, rhip: -95, lkn: 5, rkn: 0, lsh: -120, rsh: -135, lel: 0, rel: 0 },
  arms: { lsh: -95, rsh: 70, lel: 0, rel: 0 },
  passe: { rhip: -70, rkn: 125, lsh: -172, rsh: -168, lel: 0, rel: 0 },
  lunge: { y: -58, rhip: -55, rkn: 55, lhip: 22, lkn: 0, lsh: -170, rsh: -170, lel: 0, rel: 0, sp: 8 }
};
const M = (...a) => Object.assign({}, ...a);
function flip(x0, dx, dir, shape, height = 120, twist = 0, land = 0) {
  const s = P[shape] || P.tuck;
  const fr = [[M(P.crouch, { x: x0 }), 220], [M(P.up, { x: x0 + dx * .12, y: -90 }), 160, "out"],
    [M(s, { x: x0 + dx * .5, y: -66 - height, r: dir * 180, sx: twist ? -1 : 1 }), 330, "lin"],
    [M(s, { x: x0 + dx * .85, y: -66 - height * .45 + land * .5, r: dir * 330, sx: twist > 1 ? 1 : (twist ? -1 : 1) }), 260, "lin"],
    [M(P.crouch, { x: x0 + dx, y: -50 + land, r: dir * 360 }), 160, "out"], [M(P.up, { x: x0 + dx, y: -66 + land, r: dir * 360 }), 260]];
  if (twist) fr[3][0].sx = 1;
  return fr;
}
const norm = rig => { rig.p.r = ((rig.p.r % 360) + 360) % 360; if (rig.p.r > 180) rig.p.r -= 360; };
function run(x0, x1, y = -66) { const n = 6, fr = []; for (let i = 1; i <= n; i++) { const a = i % 2 ? 1 : -1; fr.push([{ x: x0 + (x1 - x0) * i / n, y: y - 4, sp: 12, lhip: -40 * a, rhip: 40 * a, lkn: a > 0 ? 70 : 20, rkn: a > 0 ? 20 : 70, lsh: 50 * a, rsh: -50 * a, rel: -40, lel: -40 }, 120, "lin"]); } return fr; }
const HOME = { vault: { x: -300 }, bars: { x: -150 }, beam: { x: -40 }, floor: { x: -200 }, ring: { x: -200 } };
// stage geometry (viewBox 800x400)
const GEO = { ring: { gx: 400, gy: 330 }, vault: { gx: 400, gy: 360 }, bars: { gx: 400, gy: 360 }, beam: { gx: 400, gy: 250 }, floor: { gx: 400, gy: 350 } };
const HB = { x: 70, y: -230 }, LB = { x: -100, y: -150 };
function circle(cxp, cyp, a0, a1, R = 104, step = 30, extra = {}) { const fr = []; const d = a1 > a0 ? step : -step; for (let a = a0 + d; d > 0 ? a <= a1 : a >= a1; a += d) { const t = a * Math.PI / 180; fr.push([M(P.layout, extra, { x: cxp - R * Math.sin(t), y: cyp + R * Math.cos(t), r: a }), 85, "lin"]); } return fr; }
const hang = M(P.layout, { x: HB.x, y: HB.y + 104, r: 0 });
const support = { x: HB.x - 4, y: HB.y + 4, r: 0, lsh: -8, rsh: -8, lel: 0, rel: 0, sp: 0, lhip: 0, rhip: 0 };
const SK = {
  /* vault & floor & generic */
  salute: () => [[M(P.up), 500], [{ rsh: -150, lsh: 30, rel: 0, lel: 0 }, 400], [M(P.up), 400], [{}, 400]],
  finalpose: () => [[M(P.lunge), 450], [M(P.up, { y: -66, rhip: -10, lhip: 15, sp: -14 }), 450], [{ lsh: -150, rsh: 40, sp: -8, rhip: -20, rkn: 40, y: -64 }, 500], [{}, 500]],
  stick: () => [...run(-300, -140), [M(P.lunge, { x: -110 }), 160], [M(P.up, { x: -70, y: -150, r: 90 }), 200], [M(P.up, { x: -10, y: -216, r: 180 }), 220, "lin"], ...flip(-10, 220, 1, "layout", 70, 2, 0).slice(2), [M(P.up, { x: 210, r: 360 }), 700], [{ x: 210, r: 360 }, 300], [{ x: -300, r: 360 }, 1, "lin"]],
};
function vaultSkill(shape, twist) { return () => [...run(-300, -140), [M(P.lunge, { x: -110 }), 160], [M(P.up, { x: -70, y: -150, r: 90 }), 200], [M(P.up, { x: -10, y: -216, r: 180 }), 200, "lin"],
  ...(shape ? flip(-10, 220, 1, shape, 90, twist).slice(2) : [[M(P.up, { x: 120, y: -150, r: 300 }), 260, "lin"], [M(P.crouch, { x: 210, r: 360 }), 200], [M(P.up, { x: 210, r: 360 }), 300]]),
  [{ x: 210, r: 360 }, 300], [{ x: 210, r: 360, sx: -1 }, 150], ...run(210, -300).map(f => (f[0].sx = -1, f[0].r = 360, f)), [{ x: -300, r: 360, sx: 1 }, 150]]; }
Object.assign(SK, {
  run: () => [...run(-300, -40), [M(P.crouch, { x: -20 }), 150], [M(P.up, { x: 40, y: -150 }), 300, "out"], [M(P.crouch, { x: 90 }), 250], [M(P.up, { x: 90 }), 300], [{ x: 90, sx: -1 }, 150], ...run(90, -300).map(f => (f[0].sx = -1, f)), [{ x: -300 }, 150]],
  roundoff: () => vaultSkill(null)(), handspring: () => vaultSkill("layout")(), tuck: () => vaultSkill("tuck")(), pike: () => vaultSkill("pike")(), layout: () => vaultSkill("layout", 0)(), twist: () => vaultSkill("layout", 2)()
});
// floor passes travel across mat
const FL = {
  salute: SK.salute, finalpose: SK.finalpose,
  roundoff: () => [[M(P.lunge, { x: -200 }), 350], [M(P.up, { x: -140, y: -100, r: 90 }), 220], [M(P.up, { x: -90, y: -172, r: 180 }), 220, "lin"], [M(P.up, { x: -40, y: -110, r: 270, lhip: -30 }), 200, "lin"], [M(P.crouch, { x: -10, r: 360 }), 200], [M(P.up, { x: -10, r: 360 }), 350], [{ x: -200, r: 360 }, 700]],
  handspring: () => [[M(P.lunge, { x: -200 }), 300], ...flip(-200, 150, 1, "layout", 60).slice(1), ...flip(-50, 150, 1, "layout", 60).slice(1), [{ x: -200, r: 720 }, 800]],
  tuck: () => [[M(P.lunge, { x: -200 }), 300], ...flip(-200, 200, -1, "tuck", 130).slice(0), [{ x: -200, r: -360 }, 700]],
  leap: () => [[{ x: -200 }, 100], ...run(-200, -60), [M(P.split, { x: 40, y: -150, sp: -5 }), 320, "out"], [M(P.split, { x: 110, y: -120 }), 200], [M(P.crouch, { x: 150 }), 200], [M(P.up, { x: 150 }), 300], [{ x: -200 }, 700]],
  layout: () => [[M(P.lunge, { x: -200 }), 300], ...flip(-200, 220, -1, "layout", 150), [{ x: -200, r: -360 }, 700]],
  twist: () => [[M(P.lunge, { x: -200 }), 300], ...flip(-200, 230, -1, "layout", 160, 2), [{ x: -200, r: -360 }, 700]],
};
const BARS = {
  kip: () => [[{ x: -150 }, 100], ...run(-150, HB.x - 10), [M(P.up, { x: HB.x, y: HB.y + 104 }), 300, "out"], [M(P.pike, { x: HB.x + 40, y: HB.y + 96, r: -25, lsh: -180, rsh: -180 }), 380], [M(P.pike, { x: HB.x - 30, y: HB.y + 96, r: 25, lsh: -180, rsh: -180 }), 380], [M(P.pike, { x: HB.x + 20, y: HB.y + 60, r: 0, lhip: -100, rhip: -100, lsh: -120, rsh: -120 }), 330], [support, 380, "out"], [support, 300]],
  cast: () => [[support, 200], [{ ...support, r: 30, x: HB.x + 20, y: HB.y - 20, lhip: -40, rhip: -40 }, 250], [M(P.layout, { x: HB.x, y: HB.y - 104, r: 180 }), 600, "out"], [M(P.layout, { x: HB.x, y: HB.y - 104, r: 180 }), 400], ...circle(HB.x, HB.y, 180, 360), [hang, 200]],
  hipcircle: () => [[hang, 100], [M(P.pike, { x: HB.x - 10, y: HB.y + 60, lsh: -120, rsh: -120 }), 350], [support, 300], ...[60, 120, 180, 240, 300, 360].map(a => [M(P.pike, { lhip: -80, rhip: -80, x: HB.x - 18 * Math.sin(a * Math.PI / 180), y: HB.y + 18 * Math.cos(a * Math.PI / 180), r: -a, lsh: -20, rsh: -20 }), 110, "lin"]), [M(support, { r: -360 }), 200], [M(P.layout, { x: HB.x, y: HB.y - 104, r: -180 }), 500, "out"], ...circle(HB.x, HB.y, -180, -360), [M(hang, { r: -360 }), 200]],
  giant: () => [[hang, 100], [M(P.layout, { x: HB.x + 60, y: HB.y + 85, r: -35 }), 350], ...circle(HB.x, HB.y, -35, 360), [M(hang, { r: 360 }), 200]],
  giant2: () => [[hang, 100], [M(P.layout, { x: HB.x + 60, y: HB.y + 85, r: -35 }), 350], ...circle(HB.x, HB.y, -35, 720, 104, 30), [M(hang, { r: 720 }), 200]],
  pirouette: () => [[hang, 100], [M(P.layout, { x: HB.x + 60, y: HB.y + 85, r: -35 }), 300], ...circle(HB.x, HB.y, -35, 180), [M(P.layout, { x: HB.x, y: HB.y - 104, r: 180, sx: -1 }), 350], [M(P.layout, { x: HB.x, y: HB.y - 104, r: 180, sx: 1 }), 350], ...circle(HB.x, HB.y, 180, 360), [M(hang, { r: 360 }), 200]],
  transition: () => [[hang, 100], [M(P.layout, { x: HB.x - 60, y: HB.y + 85, r: 35 }), 350], [M(P.layout, { x: HB.x + 50, y: HB.y + 90, r: -30 }), 450], [M(P.pike, { x: 0, y: -260, r: -10, lsh: -180, rsh: -180 }), 380, "out"], [M(P.layout, { x: LB.x, y: LB.y + 60, r: 30, lhip: -60, rhip: -60 }), 380], [M(P.layout, { x: LB.x + 30, y: LB.y + 80, r: -20, lhip: -70, rhip: -70 }), 380], [M(P.up, { x: LB.x + 40, y: -66 }), 400], ...run(LB.x + 40, HB.x - 10), [hang, 400, "out"]],
  flyaway: () => [[hang, 100], [M(P.layout, { x: HB.x + 60, y: HB.y + 85, r: -35 }), 350], ...circle(HB.x, HB.y, -35, 300), [M(P.tuck, { x: HB.x + 120, y: HB.y - 30, r: 420 }), 380, "lin"], [M(P.tuck, { x: HB.x + 190, y: -170, r: 600 }), 330, "lin"], [M(P.crouch, { x: HB.x + 220, r: 720 }), 200], [M(P.up, { x: HB.x + 220, r: 720 }), 500], [{ x: HB.x + 220, r: 720 }, 400]],
};
const BEAM = {
  releve: () => [[M(P.up, { y: -70 }), 450], [M(P.passe, { y: -70 }), 450], [M(P.passe, { y: -70 }), 500], [{}, 400]],
  leap: () => [[{ x: -150 }, 400], [M(P.crouch, { x: -130 }), 200], [M(P.split, { x: -40, y: -140 }), 330, "out"], [M(P.split, { x: 30, y: -110 }), 200], [M(P.crouch, { x: 60 }), 200], [M(P.arms, { x: 60 }), 300], [{ x: -40 }, 600]],
  pirouette: () => [[M(P.passe, { y: -70 }), 350], [M(P.passe, { y: -70, sx: -1 }), 220, "lin"], [M(P.passe, { y: -70, sx: 1 }), 220, "lin"], [M(P.passe, { y: -70, sx: -1 }), 220, "lin"], [M(P.passe, { y: -70, sx: 1 }), 220, "lin"], [M(P.arms), 400], [{}, 300]],
  handstand: () => [[M(P.lunge), 350], [M(P.up, { x: -20, y: -110, r: 90 }), 300], [M(P.layout, { x: -40, y: -106, r: 180 }), 300, "out"], [M(P.layout, { x: -40, y: -106, r: 180, lhip: -30, rhip: 30 }), 600], [M(P.layout, { x: -40, y: -106, r: 180 }), 300], [M(P.up, { x: -60, y: -110, r: 90 }), 300], [M(P.lunge, { x: -40, r: 0, sx: -1 }), 1], [M(P.lunge, { x: -40 }), 1], [{}, 350]],
  cartwheel: () => [[M(P.lunge), 300], [M(P.up, { x: 0, y: -110, r: 90, lhip: 30, rhip: -30 }), 220], [M(P.layout, { x: 30, y: -106, r: 180, lhip: 40, rhip: -40 }), 220, "lin"], [M(P.up, { x: 60, y: -110, r: 270, lhip: 30, rhip: -30 }), 220, "lin"], [M(P.lunge, { x: 80, r: 360 }), 250], [M(P.arms, { x: 80, r: 360 }), 300], [{ x: -40, r: 360 }, 700]],
  splitjump: () => [[M(P.crouch), 220], [M(P.split, { y: -150, sp: -8 }), 320, "out"], [M(P.split, { y: -150, lhip: 90, rhip: -90 }), 120], [M(P.crouch), 300], [M(P.arms), 300], [{}, 300]],
  walkover: () => [[M(P.up), 300], [M(P.up, { sp: -60, y: -70 }), 350], [M(P.layout, { x: -70, y: -106, r: -180, rhip: -40 }), 450], [M(P.layout, { x: -90, y: -100, r: -260, rhip: -60, lhip: 20 }), 300], [M(P.lunge, { x: -100, r: -360 }), 350], [M(P.arms, { x: -100, r: -360 }), 300], [{ x: -40, r: -360 }, 600]],
  dismount: () => [[{ x: 60 }, 300], [{ x: 150 }, 500], [{ x: 220 }, 400], ...flip(220, 120, 1, "tuck", 110, 0, 110), [M(P.up, { x: 340, y: 44, r: 360 }), 600], [{ x: 340, y: 44, r: 360 }, 400]]
};
const ret = x => [[{ x, sx: -1, spr: "rpoint" }, 150], ...run(x, -200).map(f => (f[0].sx = -1, f[0].spr = "rrun", f)), [{ x: -200, spr: "rpoint" }, 150]];
const climb = () => [...run(-200, 230).map(f => (f[0].spr = "rrun", f)), [{ x: 262, y: -120, spr: "rentr" }, 260], [{ x: 272, y: -215, spr: "rpoint", sx: -1 }, 320, "out"], [{ x: 272, y: -215, spr: "rflex", sx: -1 }, 600]];
const RINGLIB = {
  entrance: () => [[{ spr: "rentr" }, 500], [{ spr: "rpoint" }, 500], [{ spr: "rflex", y: -72 }, 600], [{ spr: "rflex", y: -66 }, 300], [{}, 300]],
  roperun: () => [...run(-200, 255).map(f => (f[0].spr = "rrun", f)), [{ x: 285, r: -10, spr: "rrun" }, 140], [{ x: 255, r: 0, sx: -1, spr: "rrun" }, 140], ...run(255, -200).map(f => (f[0].sx = -1, f[0].spr = "rrun", f)), [{ x: -230, r: 10, sx: -1, spr: "rrun" }, 140], [{ x: -200, spr: "rflex" }, 500], [{ x: -200 }, 200]],
  crossbody: () => [...run(-200, -20).map(f => (f[0].spr = "rrun", f)), [{ x: 90, y: -170, r: -8, spr: "rkick" }, 360, "out"], [{ x: 180, y: -50, r: 0, spr: "rland" }, 300], [{ x: 180, spr: "rflex" }, 600], ...ret(180)],
  tuckflip: () => [...climb(), [{ x: 230, y: -330, r: -180, sx: -1, spr: "rtuck" }, 320, "out"], [{ x: 150, y: -150, r: -360, sx: -1, spr: "rtuck" }, 320, "lin"], [{ x: 130, y: -60, r: -360, sx: -1, spr: "rland" }, 220], [{ x: 130, r: -360, sx: 1, spr: "rflex" }, 600], [{ x: 130, r: 0, spr: "rpoint" }, 10], ...ret(130)],
  dropkick: () => [...run(-200, -40).map(f => (f[0].spr = "rrun", f)), [{ x: 60, y: -140, spr: "rkick" }, 300, "out"], [{ x: 120, y: -130, spr: "rkick", r: -6 }, 220], [{ x: 160, y: -60, spr: "rland" }, 300], [{ x: 160, spr: "rpoint" }, 500], ...ret(160)],
  moonsault: () => [...climb(), [{ x: 200, y: -330, r: 180, sx: -1, spr: "rtuck" }, 330, "out"], [{ x: 110, y: -160, r: 360, sx: -1, spr: "rtuck" }, 330, "lin"], [{ x: 90, y: -60, r: 360, sx: -1, spr: "rland" }, 220], [{ x: 90, r: 0, sx: 1, spr: "rbelt" }, 10], [{ x: 90, spr: "rflex" }, 600], ...ret(90)],
  rebound: () => [...RINGLIB.roperun().slice(0, -2), ...RINGLIB.roperun()],
  champ: () => [[{ spr: "rbelt", y: -72 }, 700], [{ spr: "rflex" }, 500], [{ spr: "rbelt", y: -80 }, 800], [{ spr: "rbelt" }, 400], [{}, 300]]
};
const LIB = { vault: SK, floor: FL, bars: BARS, beam: BEAM };
const wobble = (h) => { const b = h.x || 0, y = h.y; const f = []; [12, -14, 10, -8, 5, 0].forEach((r, i) => f.push([M(P.arms, h, { r: (h.r || 0) + r, x: b + (y < -150 ? r * .8 : 0), sp: r * .4, rhip: i % 2 ? -25 : 0, rkn: i % 2 ? 40 : 0, spr: i % 2 ? "tbal" : "wobble" }), 170])); f.push([M(h, { spr: h.spr || pick(M(BASE, h)) }), 250]); return f; };

/* ---------------- equipment art per stage ---------------- */
function equipment(key) {
  const G = GEO[key];
  if (key === "ring") { const rope = (y, c) => `<line x1="-300" y1="${y}" x2="300" y2="${y}" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
    return `<g transform="translate(${G.gx},${G.gy})"><ellipse cx="0" cy="66" rx="390" ry="14" fill="#000" opacity=".4"/>
    <path d="M-330 0 H330 L345 62 H-345z" fill="#2a0f5e" stroke="#ff5fd2" stroke-width="3"/><text x="0" y="42" text-anchor="middle" font-family="Georgia" font-weight="700" font-size="30" fill="#fff">★ SSW ★</text>
    <rect x="-330" y="-6" width="660" height="8" rx="3" fill="#f1ecff"/>
    ${[-300, 300].map(x => `<rect x="${x - 6}" y="-170" width="12" height="170" rx="4" fill="#cfcfe0"/><rect x="${x - 11}" y="-176" width="22" height="26" rx="6" fill="#ff5fd2"/>`).join("")}
    ${rope(-55, "#8ff7f0")}${rope(-100, "#fff")}${rope(-145, "#ff5fd2")}</g>`; }
  if (key === "vault") return `<g transform="translate(${G.gx},${G.gy})"><ellipse cx="0" cy="4" rx="390" ry="14" fill="#000" opacity=".3"/><rect x="-380" y="-6" width="760" height="10" rx="5" fill="#3d63ff"/><path d="M-150 0 l40 -18 h18 v18z" fill="#ff5fd2"/><rect x="-14" y="-110" width="8" height="110" fill="#c9c4e8"/><path d="M-30 0 h40 l-10 -10 h-20z" fill="#5b4b9c"/><rect x="-48" y="-122" width="92" height="20" rx="10" fill="#3150d9" stroke="#ffd34d" stroke-width="2"/><rect x="130" y="-10" width="200" height="12" rx="4" fill="#2b2b8f"/></g>`;
  if (key === "bars") return `<g transform="translate(${G.gx},${G.gy})"><ellipse cx="0" cy="4" rx="390" ry="14" fill="#000" opacity=".3"/><rect x="-380" y="-6" width="760" height="10" rx="5" fill="#3d63ff"/>
    ${[[LB.x, LB.y], [HB.x, HB.y]].map(([x, y]) => `<line x1="${x - 5}" y1="${y}" x2="${x - 30}" y2="0" stroke="#d9b24a" stroke-width="6"/><line x1="${x + 5}" y1="${y}" x2="${x + 30}" y2="0" stroke="#b8902e" stroke-width="6"/><circle cx="${x}" cy="${y}" r="5" fill="#ff8be0" stroke="#fff" stroke-width="1.5"/>`).join("")}</g>`;
  if (key === "beam") return `<g transform="translate(${G.gx},${G.gy})"><rect x="-270" y="0" width="540" height="14" rx="5" fill="#f4dcb4" stroke="#c99f6b"/><path d="M-220 14 l-20 96 h24 l14 -96z M220 14 l20 96 h-24 l-14 -96z" fill="#3a3a9e"/><ellipse cx="0" cy="114" rx="380" ry="10" fill="#000" opacity=".3"/><rect x="-380" y="106" width="760" height="10" rx="5" fill="#3d63ff"/></g>`;
  return `<g transform="translate(${G.gx},${G.gy})"><path d="M-390 0 L390 0 L360 -40 L-360 -40z" fill="#2c48d6" opacity=".9"/><path d="M-370 -4 L370 -4 L346 -34 L-346 -34z" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/><path d="M0 -24 l3 7 7 .5 -5.5 4.5 2 7 -6.5 -4 -6.5 4 2 -7 -5.5 -4.5 7 -.5z" fill="#ffd34d"/></g>`;
}
function stageSVG(key, scale = 1.25) {
  if (WRESTLE()) key = "ring";
  const G = GEO[key];
  return `<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="spot"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
  <ellipse cx="400" cy="${G.gy}" rx="320" ry="60" fill="url(#spot)"/><g transform="translate(400,${G.gy}) scale(${scale}) translate(-400,${-G.gy})">${equipment(key)}
  <g transform="translate(${G.gx},${key === "floor" ? G.gy - 20 : G.gy})" class="rigwrap">${rigSVG()}</g></g></svg>`;
}

/* ---------------- 3D glue (arena3d.js is an ES module; if it fails we stay in Simple mode) ---------------- */
function mount3D(stage, key, rig, label) {
  if (!use3D()) return false;
  const ok = window.Arena3D.mount(stage, { key: WRESTLE() ? "ring" : key, rig, label, K, spr: n => SPR[n] || SPR.stand, url: n => sprURL(n),
    onFail: () => { MODE3D = "simple"; }, onSlow: f => { if (/[?&]mode=3d/.test(location.search)) return; window.Arena3D.unmount(); MODE3D = "simple"; store.set("starlight:view", "simple"); toast(`Switched to Simple mode for smoother play (${f | 0} fps).`); } });
  return ok;
}
const A3 = (fn, ...a) => window.Arena3D && window.Arena3D.isOn() && window.Arena3D[fn](...a);
function toast(t) { const d = document.createElement("div"); d.className = "toast"; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 3500); }
function viewBtn() { return `<button class="btn ghost" id="vw" title="Switch between 3D arena and Simple 2D view">${use3D() ? "🖼 Simple mode" : "🎥 3D arena"}</button>`; }
function bindView(redraw) { const b = $("#vw"); if (!b) return; if (!has3D()) { b.disabled = true; b.title = "3D isn't available on this device — using Simple mode"; }
  b.onclick = () => { MODE3D = use3D() ? "simple" : "3d"; store.set("starlight:view", MODE3D); SFX.click(); redraw(); }; }
function themeChips() { return `<div class="themes" role="group" aria-label="Theme"><button class="chip ${!WRESTLE() ? "on" : ""}" data-theme="gym">🤸 Gymnastics</button><button class="chip ${WRESTLE() ? "on" : ""}" data-theme="wrestle">🤼 Wrestling</button></div>`; }
function bindTheme(redraw) { app.querySelectorAll("[data-theme]").forEach(b => b.onclick = () => { THEME = b.dataset.theme; store.set("starlight:theme", THEME); applyTheme(); preload(); SFX.click(); redraw(); }); }
function applyTheme() { document.getElementById("bg").style.backgroundImage = `url(${bgURL()})`; document.body.classList.toggle("wrestle", WRESTLE()); document.title = WRESTLE() ? `${WR.league} · Study Wrestling` : "Starlight Arena · Study Gymnastics"; }

/* ---------------- portrait ---------------- */
const portraitImg = (cls = "portrait") => `<img class="${cls}" alt="My gymnast" src="${PORTRAIT || heroURL()}" style="${PORTRAIT ? "" : "object-position:50% 4%;object-fit:cover;background:#2a1460"}">`;

/* ---------------- screens ---------------- */
const medalFor = s => s == null ? "" : s >= 9.5 ? "🥇" : s >= 8.5 ? "🥈" : "🥉";
const fmt = n => (Math.round(n * 1000) / 1000).toFixed(3);
function done() { return W.events.every(e => S.ev[e.key].best != null); }

function title() {
  const started = W.events.some(e => S.ev[e.key].i > 0 || S.ev[e.key].best != null);
  stopMusic();
  app.innerHTML = `<section class="title"><div><div class="sub">${esc(W.subtitle)}</div>
    <h1 class="glow">${esc(WRESTLE() ? WR.league : W.title)}</h1><p class="sub">${WRESTLE() ? `Welcome to the ring, <b>${esc(WR.ringName(W.athleteName))}</b>! Answer questions to unlock signature moves in four title matches — Math, ELA, Science and Social Studies — then claim every championship belt.` : `Welcome to the arena, <b>${esc(W.athleteName)}</b>! Answer questions to perform skills on Vault, Bars, Beam and Floor — then take the podium.`}</p>
    ${themeChips()}
    <div class="row"><button class="btn" id="go">${started ? "▶ Continue" : "✨ Start"}</button><button class="btn teal" id="studio">🎨 Design Your ${WRESTLE() ? "Superstar" : "Gymnast"}</button>${viewBtn()}</div>
    <p class="policy">🛈 This is <b>AI-made practice, not for graded work</b>. Questions are original practice about this week's topics — not your real quiz questions. Try first, use hints, and do your own schoolwork. Don't use this during a test.</p></div>
    <div class="hero"><img src="${heroURL()}" alt="Cartoon gymnast">${PORTRAIT ? portraitImg("portrait big") : ""}</div></section>`;
  $("#go").onclick = () => { SFX.click(); map(); };
  $("#studio").onclick = () => { SFX.click(); studio(); };
  bindTheme(title); bindView(title);
}

function map() {
  const tot = W.events.reduce((a, e) => a + (S.ev[e.key].best || 0), 0);
  app.innerHTML = `<div class="top">${portraitImg()}<div class="grow"><h2 class="glow">${WRESTLE() ? "Championship Card" : "Arena Map"}</h2><div>${WRESTLE() ? "Title points" : "All-around"}: <b>${fmt(tot)}</b> / 40</div></div>
    <button class="btn ghost" id="studio">🎨 Studio</button>${done() ? `<button class="btn" id="pod">🏆 ${WRESTLE() ? "Belt Ceremony" : "Podium"}</button>` : ""}<button class="btn ghost" id="home">⌂</button></div>
    <div class="grid">${W.events.map(e => { const st = S.ev[e.key]; const pct = st.best != null ? 100 : st.i / 8 * 100;
      return `<div class="card" style="--c:${e.color}" data-k="${e.key}"><img src="${WRESTLE() ? WR.ev[e.key].belt : e.icon}" alt="${esc(evName(e))}" ${WRESTLE() ? `style="object-fit:contain;background:radial-gradient(#3a1a7a,#120a3a);padding:12px"` : ""}><div class="medal">${medalFor(st.best)}</div>
      <div class="meta"><div class="subj">${esc(e.subject)}</div><h3>${esc(evName(e))}</h3><div style="font-size:13px;opacity:.85">${esc(e.topic)}</div>
      <div class="bar"><i style="width:${pct}%"></i></div><div style="font-size:13px">${st.best != null ? "Best: " + fmt(st.best) : st.i + " / 8 skills"}</div>
      <div class="row"><button class="btn" data-play>${st.best != null ? (WRESTLE() ? "Rematch" : "Again") : st.i ? "Resume" : WRESTLE() ? "Title Match" : "Compete"}</button><button class="btn ghost" data-notes>📝 Notes</button></div></div></div>`; }).join("")}</div>`;
  $("#home").onclick = title; $("#studio").onclick = studio; if ($("#pod")) $("#pod").onclick = podium;
  app.querySelectorAll(".card").forEach(c => { const e = W.events.find(x => x.key === c.dataset.k);
    c.querySelector("[data-notes]").onclick = ev => { ev.stopPropagation(); SFX.click(); notes(e); };
    c.querySelector("[data-play]").onclick = ev => { ev.stopPropagation(); SFX.click(); startEvent(e); };
    c.onclick = () => startEvent(e); });
}

function notes(e, after) {
  const m = document.createElement("div"); m.className = "modal";
  m.innerHTML = `<div class="panel" style="--c:${e.color}"><h2>📝 Coach's Notes · ${esc(evName(e))}</h2><div style="opacity:.85">${esc(e.subject)} — ${esc(e.topic)}</div>
   <div class="notes">${e.notes.map((n, i) => `<div class="note" style="--r:${(i % 2 ? 1 : -1) * (0.6 + i * .2)}deg"><h4>${esc(n.t)}</h4>${esc(n.b)}</div>`).join("")}</div>
   <button class="btn" id="cl">Got it!</button></div>`;
  document.body.appendChild(m); $("#cl", m).onclick = () => { m.remove(); after && after(); };
}

/* ---------------- event play ---------------- */
let EV = null;
function startEvent(e, skipEntrance) {
  const st = S.ev[e.key]; if (st.i >= 8) { st.i = 0; st.scores = []; save(); }
  if (WRESTLE() && !skipEntrance && st.i === 0) return entrance(e);
  if (!WRESTLE() && st.i === 0) playMusic("fanfare", .55); else if (!WRESTLE()) stopMusic();
  document.documentElement.style.setProperty("--c", e.color);
  app.innerHTML = `<div class="hud" style="--c:${e.color}">${portraitImg()}<span class="pill">${esc(evName(e))} · ${esc(e.subject)}</span><span class="pill" id="sk"></span><span class="pill" id="sc"></span>
    <span style="flex:1"></span>${viewBtn()}<button class="btn ghost" id="nt">📝 Notes</button><button class="btn ghost" id="bk">🗺 Map</button></div>
    <div class="skills" style="--c:${e.color}">${evSkills(e).map((s, i) => `<span data-i="${i}">${esc(s)}</span>`).join("")}</div>
    <div class="stage" style="background-image:url(${bgURL()})">${stageSVG(e.key)}<div class="callout" id="co"></div></div>
    <div class="panel qcard" id="qc" style="--c:${e.color}"></div>`;
  const rig = new Rig($(".rigwrap [data-j=root]").parentNode);
  const home = WRESTLE() ? HOME.ring : st.i > 0 && e.key === "bars" ? hang : (HOME[e.key] || {});
  rig.set(home);
  EV = { e, st, rig, home };
  mount3D($(".stage"), e.key, rig, WRESTLE() ? WR.ev[e.key].name.replace(" Championship", "") : e.name);
  bindView(() => { rig.tok++; stopMusic(.1); startEvent(e, true); });
  $("#bk").onclick = () => { rig.tok++; stopMusic(); map(); }; $("#nt").onclick = () => notes(e);
  if (st.i === 0 && !st.seenNotes) { st.seenNotes = true; save(); notes(e, () => question()); } else question();
}
function hud() { const { e, st } = EV; $("#sk").textContent = `Skill ${Math.min(st.i + 1, 8)} / 8`; const avg = st.scores.length ? st.scores.reduce((a, b) => a + b, 0) / st.scores.length : 0; $("#sc").textContent = `Score ${fmt(avg)}`;
  app.querySelectorAll(".skills span").forEach((s, i) => s.className = i < st.i ? "done" : i === st.i ? "now" : ""); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; }
function question() {
  const { e, st } = EV; hud();
  const Q = e.questions[st.i]; let ded = 0, tries = 0, stage = 0; // 0 none, 1 hint, 2 coach, 3 answer
  const order = shuffle(Q.choices.map((c, i) => i));
  const qc = $("#qc");
  qc.innerHTML = `<div style="font-size:13px;opacity:.8">Next ${THEME==="wrestle"?"move":"skill"}: <b>${esc(evSkills(e)[st.i])}</b> — answer to perform it!</div><div class="q">${esc(Q.q)}</div>
    <div class="choices">${order.map(i => `<button class="choice" data-i="${i}">${esc(Q.choices[i])}</button>`).join("")}</div>
    <div class="helpers"><button class="btn ghost" id="hb">💡 Hint</button><button class="btn ghost" id="cb" disabled>🧑‍🏫 Coach walk-through</button><button class="btn ghost" id="ab" disabled>👀 Show answer</button></div>
    <div id="cz"></div><div class="feedback" id="fb"></div>`;
  const cz = $("#cz"), fb = $("#fb");
  const showHint = () => { if (stage >= 1) return; stage = 1; ded = Math.max(ded, .3); cz.innerHTML = `<div class="coach">💡 <b>Hint:</b> ${esc(Q.hint)}</div>`; $("#cb").disabled = false; };
  const showCoach = () => { if (stage >= 2) return; showHint(); stage = 2; ded = Math.max(ded, .6); let k = 0;
    cz.innerHTML += `<div class="coach">🧑‍🏫 <b>Coach walk-through</b> — let's do it together:<ol id="ol"></ol><button class="btn teal" id="nx" style="margin-top:6px;min-height:40px">Next step ▸</button></div>`;
    const next = () => { $("#ol").insertAdjacentHTML("beforeend", `<li>${esc(Q.steps[k++])}</li>`); if (k >= Q.steps.length) { $("#nx").remove(); $("#ab").disabled = false; fb.textContent = "Now try answering — or tap Show answer."; } };
    next(); $("#nx").onclick = next; };
  $("#hb").onclick = () => { SFX.click(); showHint(); };
  $("#cb").onclick = () => { SFX.click(); showCoach(); };
  $("#ab").onclick = () => { ded = 1.2; finish(true); };
  qc.querySelectorAll(".choice").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    if (i === Q.a) { b.classList.add("right"); finish(false); return; }
    tries++; b.classList.add("wrong"); b.disabled = true; SFX.wrong(); EV.rig.play(wobble(EV.home));
    ded = Math.max(ded, .3);
    if (tries === 1) { fb.textContent = "Wobble! Check the hint and try again."; showHint(); }
    else { fb.textContent = "Let's slow down — your coach will walk through it."; showCoach(); }
  });
  function finish(shown) {
    qc.querySelectorAll(".choice").forEach(b => { b.disabled = true; if (+b.dataset.i === Q.a) b.classList.add("right"); });
    qc.querySelector(".helpers").remove();
    const score = Math.max(8, 10 - ded);
    fb.innerHTML = `${shown ? "📘 Here's the answer:" : "🎉 Correct!"} ${esc(Q.explain)} <span style="opacity:.8">(+${score.toFixed(1)})</span>`;
    if (!shown) SFX.right();
    perform(score);
  }
}
async function perform(score) {
  const { e, st, rig } = EV; const co = $("#co");
  co.textContent = evSkills(e)[st.i]; co.classList.add("show"); SFX.whoosh();
  const frames = WRESTLE() ? RINGLIB[WR.anims[st.i]]() : (LIB[e.key][e.anims[st.i]] || SK.salute)();
  if (!WRESTLE() && e.key === "beam" && window.Arena3D && window.Arena3D.isOn()) { // 3D: first-person walk down the beam first
    A3("firstPerson", 1500); await rig.play([[{ x: -200, spr: "stand" }, 10], [{ x: -40, spr: "stand" }, 1400, "lin"]]); }
  A3("perform", e.anims[st.i]);
  await rig.play(frames); norm(rig); A3("celebrate"); A3("idle");
  if (!document.body.contains(co)) return;
  co.classList.remove("show"); SFX.cheer(); confetti(40);
  st.scores.push(score); st.i++;
  EV.home = WRESTLE() ? HOME.ring : e.key === "bars" && st.i < 8 ? hang : (HOME[e.key] || {});
  if (st.i < 8) { save(); rig.base = {}; await rig.play([[EV.home, 450]]); norm(rig); question(); }
  else finishEvent();
}
function finishEvent() {
  const { e, st } = EV; const avg = st.scores.reduce((a, b) => a + b, 0) / 8;
  st.best = Math.max(st.best || 0, avg); save(); hud();
  const judges = [0, 1, 2, 3].map(() => Math.max(0, Math.min(10, avg + (Math.random() - .5) * .2)));
  const m = document.createElement("div"); m.className = "modal";
  m.innerHTML = `<div class="panel" style="text-align:center">${WRESTLE() ? `<img class="beltwin" src="${WR.ev[e.key].belt}" alt="">` : ""}<h2 class="glow">${WRESTLE() ? `${esc(WR.ev[e.key].name)} — match won!` : `${esc(e.name)} complete!`}</h2><div>${WRESTLE() ? "The crowd meter is in…" : "The judges are in…"}</div>
    <div class="judges">${judges.map((j, i) => `<div class="judge" style="animation-delay:${i * .25}s"><small>${WRESTLE() ? ["Crowd", "Style", "Power", "Showtime"][i] : "Judge " + (i + 1)}</small><b>${j.toFixed(2)}</b></div>`).join("")}</div>
    <div class="big-score">${fmt(avg)} ${medalFor(avg)}</div><p>${avg >= 9.5 ? "Gold-medal routine! You nailed it." : avg >= 8.5 ? "Silver! Try again with fewer hints for gold." : "Bronze! Read the Coach's Notes and go again — you've got this."}</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn" id="m1">${done() ? (WRESTLE() ? "🏆 Belt Ceremony" : "🏆 To the Podium") : (WRESTLE() ? "🗺 Next match" : "🗺 Next event")}</button><button class="btn ghost" id="m2">↻ ${WRESTLE() ? "Rematch" : "Redo event"}</button></div></div>`;
  document.body.appendChild(m); confetti(180); SFX.cheer();
  $("#m1", m).onclick = () => { m.remove(); done() ? podium() : map(); };
  $("#m2", m).onclick = () => { m.remove(); st.i = 0; st.scores = []; save(); startEvent(e); };
}

function podium() {
  if (WRESTLE()) return ceremony();
  playMusic("fanfare", .6);
  const tot = W.events.reduce((a, e) => a + (S.ev[e.key].best || 0), 0);
  app.innerHTML = `<div class="top"><h2 class="glow" style="flex:1">🏆 Medal Ceremony</h2><button class="btn ghost" id="bk">🗺 Map</button></div>
    <div class="podium" style="background-image:url(${T.podium})"><img class="champ" src="${sprURL("celebrate")}" alt="Champion gymnast">
    ${PORTRAIT ? `<img class="portrait" style="position:absolute;left:62%;top:8%;width:90px;height:90px" src="${PORTRAIT}" alt="My gymnast">` : ""}
    <div class="medals">${W.events.map(e => `<div><span>${medalFor(S.ev[e.key].best)}</span>${esc(e.name)}<br><b>${S.ev[e.key].best != null ? fmt(S.ev[e.key].best) : "—"}</b></div>`).join("")}<div><span>⭐</span>All-around<br><b>${fmt(tot)}</b></div></div></div>
    <p style="text-align:center">Amazing work, ${esc(W.athleteName)}! Remember: this was practice — show what you know on your real assignments on your own. 💜</p>`;
  $("#bk").onclick = map;
  confetti(250); SFX.cheer();
}

/* ---------------- wrestling: ring entrance + belt ceremony ---------------- */
function entrance(e) {
  const name = WR.ringName(W.athleteName), lines = ["Ladies and gentlemen… boys and girls…", `This is the ${WR.ev[e.key].name}!`, "Making her way to the ring…", "from the Starlight Gym…", `${name}!!!`];
  app.innerHTML = `<div class="hud"><span class="pill">🎤 ${esc(WR.league)}</span><span style="flex:1"></span>${viewBtn()}<button class="btn" id="sk">Skip ▶ To the ring</button></div>
    <div class="stage entrance" style="background-image:url(${bgURL()})">
      <div class="ent2d"><div class="beams"><i></i><i></i><i></i><i></i></div><div class="pyro l"></div><div class="pyro r"></div><img class="walker" src="assets/ring/rentr.webp" alt="${esc(W.athleteName)} walking out"></div>
      <div class="announce" id="an"></div></div>
    <p class="tip" style="text-align:center">🎵 Original walkout song made with code for ${esc(W.athleteName)} · tap 🔊 to mute</p>`;
  const fake = { p: { x: 0, y: -66, r: 0, sx: 1 }, cur: "rentr" }, MS = 13000;
  const is3d = mount3D($(".stage"), "ring", fake, WR.ev[e.key].name.replace(" Championship", ""));
  if (is3d) A3("entrance", MS);
  playMusic("walkout", .75);
  let k = 0, done = false; const an = $("#an");
  const go = () => { if (done) return; done = true; clearInterval(iv); clearTimeout(to); stopMusic(1.2); startEvent(e, true); };
  const iv = setInterval(() => { if (!document.body.contains(an)) return clearInterval(iv); if (k < lines.length) { an.innerHTML = `<span>${esc(lines[k++])}</span>`; if (k === lines.length) { SFX.cheer(); confetti(80); } }
    fake.cur = ["rentr", "rpoint", "rentr", "rflex", "rbelt"][k % 5]; }, 2200);
  an.innerHTML = `<span>🎤</span>`;
  const to = setTimeout(go, MS + 1500);
  $("#sk").onclick = () => { SFX.click(); go(); };
  bindView(() => { clearInterval(iv); clearTimeout(to); done = true; entrance(e); });
}
function ceremony() {
  playMusic("walkout", .6);
  const won = W.events.filter(e => S.ev[e.key].best != null), tot = W.events.reduce((a, e) => a + (S.ev[e.key].best || 0), 0);
  app.innerHTML = `<div class="top"><h2 class="glow" style="flex:1">🏆 Championship Belt Ceremony</h2><button class="btn ghost" id="bk">🗺 Card</button></div>
    <div class="podium ceremony" style="background-image:url(assets/wrestle-arena.webp)"><div class="announce show"><span>…and the NEW undisputed champion… ${esc(WR.ringName(W.athleteName))}!</span></div>
      <img class="champ" src="assets/ring/rbelt.webp" alt="Champion holding a belt">
      <div class="belts">${W.events.map(e => `<div class="${S.ev[e.key].best != null ? "won" : ""}"><img src="${WR.ev[e.key].belt}" alt=""><small>${esc(WR.ev[e.key].name)}</small><b>${S.ev[e.key].best != null ? fmt(S.ev[e.key].best) : "—"}</b></div>`).join("")}</div></div>
    <p style="text-align:center">${won.length}/4 belts · ${fmt(tot)} title points. Amazing work, ${esc(W.athleteName)}! Remember: this was practice — show what you know on your real assignments on your own. 💜</p>`;
  $("#bk").onclick = () => { stopMusic(); map(); };
  confetti(250); SFX.cheer();
}

/* ---------------- Design Your Gymnast studio ---------------- */
function studio() {
  app.innerHTML = `<div class="top"><h2 class="glow" style="flex:1">🎨 Design Your ${WRESTLE() ? "Superstar" : "Gymnast"}</h2><button class="btn ghost" id="bk">🗺 Map</button><button class="btn ghost" id="home">⌂</button></div>
   <div class="studio"><div><div class="preview"><img id="hero" src="${heroURL()}" alt="My gymnast"><svg viewBox="-110 -150 220 230" id="pv"></svg></div>
     <div class="panel" style="margin-top:12px"><h3>📷 Upload my gymnast</h3>
       <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">${portraitImg()}<label class="btn teal" style="cursor:pointer">Choose picture<input type="file" accept="image/*" id="up" hidden></label>${PORTRAIT ? `<button class="btn ghost" id="rm">Remove</button>` : ""}</div>
       <p class="tip">💡 Tip: Make a gymnast picture in ChatGPT with a grown-up, save it, and upload it here.<br><small>Your picture stays in this browser only — it is never uploaded anywhere. Use a drawing, not a real photo of you.</small></p></div></div>
   <div class="panel" id="opts"></div></div>`;
  $("#bk").onclick = () => { stopMusic(); map(); }; $("#home").onclick = title;
  let dTok = 0;
  const draw = async () => { const my = ++dTok; $("#hero").src = heroURL(); $("#pv").innerHTML = rigSVG(); const r = new Rig($("#pv")); r.set({ y: 0 });
    const demo = WRESTLE() ? [[{ y: 0, spr: "rentr" }, 700], [{ y: 0, spr: "rflex" }, 700], [{ y: 0, spr: "rkick", x: 10 }, 600], [{ y: 0, spr: "rland" }, 500], [{ y: 0, spr: "rbelt" }, 900], [{ y: 0 }, 500]] : [[{ y: 0, ...P.up }, 500], [{ y: 0, ...P.lunge, y: 8 }, 400], [{ y: 0, ...P.split, y: -40 }, 450, "out"], [{ y: 0, ...P.crouch, y: 16 }, 300], [{ y: 0, ...P.arms }, 500], [{ y: 0, ...P.passe }, 600], [{ y: 0 }, 500]];
    while (my === dTok && document.body.contains(r.g)) await r.play(demo); };
  const renderOpts = () => {
    $("#opts").innerHTML = `<div class="opt"><label class="h">Theme</label>${themeChips()}<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" id="song">🎵 Play walkout song</button><button class="btn ghost" id="fan">🎺 Gym fanfare</button><button class="btn ghost" id="stop">⏹</button></div></div>
      ${WRESTLE() ? `<p class="tip">🤼 Ring gear: sparkly pink &amp; teal singlet, glitter cape, kneepads and boots. Leotard colours below are used in Gymnastics mode.</p>` : ""}<div class="opt"><label class="h">Leotard</label><div class="leos">${LEOS.map(([v, n]) => `<button class="leo ${LOOK.leo === v ? "on" : ""}" data-k="leo" data-v='"${v}"'><img src="assets/gym/${v}-hero.webp" alt=""><span>${n}</span></button>`).join("")}</div></div>
      <div class="opt"><label class="h">Sparkles</label><div class="swatches">${[[true, "Sparkles on ✨"], [false, "No sparkles"]].map(([v, n]) => `<button class="chip ${LOOK.sparkles === v ? "on" : ""}" data-k="sparkles" data-v='${v}'>${n}</button>`).join("")}</div></div>
      <p class="tip">Your gymnast keeps her high bun and pink-and-teal scrunchie in every event. Pick a leotard and she'll wear it on vault, bars, beam and floor.</p>`
      + `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" id="sv">💾 Save my look</button><button class="btn ghost" id="rs">Reset</button></div><div id="msg" class="feedback"></div>`;
    $("#opts").querySelectorAll("[data-k]").forEach(b => b.onclick = () => { LOOK[b.dataset.k] = JSON.parse(b.dataset.v); SFX.click(); store.set("starlight:look", LOOK); preload(); renderOpts(); draw(); });
    bindTheme(studio); $("#song").onclick = () => playMusic("walkout"); $("#fan").onclick = () => playMusic("fanfare"); $("#stop").onclick = () => stopMusic(.2);
    $("#sv").onclick = () => { store.set("starlight:look", LOOK); SFX.right(); confetti(60); $("#msg").textContent = "Saved! Your gymnast will compete in every event."; };
    $("#rs").onclick = () => { LOOK = Object.assign({}, DEFAULT_LOOK); store.set("starlight:look", LOOK); renderOpts(); draw(); };
  };
  renderOpts(); draw();
  $("#up").onchange = ev => { const f = ev.target.files[0]; if (!f) return; const rd = new FileReader();
    rd.onload = () => { const im = new Image(); im.onload = () => { const c = document.createElement("canvas"), s = 256; c.width = c.height = s; const g = c.getContext("2d"); const m = Math.min(im.width, im.height);
      g.drawImage(im, (im.width - m) / 2, Math.max(0, (im.height - m) * .15), m, m, 0, 0, s, s); PORTRAIT = c.toDataURL("image/jpeg", .85); store.set("starlight:portrait", PORTRAIT); SFX.right(); studio(); }; im.src = rd.result; };
    rd.readAsDataURL(f); };
  if ($("#rm")) $("#rm").onclick = () => { PORTRAIT = null; localStorage.removeItem("starlight:portrait"); studio(); };
}

applyTheme(); preload();
window.__game = { map, podium, studio, startEvent, title, entrance, ceremony, S, W, playMusic, stopMusic, get EV() { return EV; } }; // for testing
title();
// if the 3D module finishes loading after first paint, refresh the title so the toggle is accurate
window.addEventListener("arena3d-ready", () => { if ($(".title")) title(); });
})();
