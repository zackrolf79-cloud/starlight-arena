/* Starlight Arena — optional 3D (2.5D) view. Three.js is vendored in ./vendor (no CDN).
   The 2D Rig keeps running the animation; this file only *draws* it: a painted sprite billboard
   inside a real 3D arena, with cinematic and first-person cameras. */
import * as THREE from "./vendor/three.module.min.js";

const S = 0.01;                                   // 1 rig unit = 1 cm
const BASEY = { vault: 0, bars: 0, beam: 1.25, floor: 0.1, ring: 1.0 };
let R = null, scene, cam, raf = 0, ctx = null, fps = { n: 0, t: 0, bad: 0 };
const loader = new THREE.TextureLoader(), texCache = {};
function tex(url) { if (!texCache[url]) { const t = loader.load(url); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; texCache[url] = t; } return texCache[url]; }
const std = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: .55, metalness: .1 }, o));
const lam = (color, o = {}) => new THREE.MeshLambertMaterial(Object.assign({ color }, o));
function box(w, h, d, m, x = 0, y = 0, z = 0) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); return b; }
function cyl(r, h, m, x, y, z, rx = 0, rz = 0, seg = 14) { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), m); c.position.set(x, y, z); c.rotation.set(rx, 0, rz); return c; }

export function supported() {
  try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch { return false; }
}

function canvasTex(w, h, draw) { const c = document.createElement("canvas"); c.width = w; c.height = h; const g = c.getContext("2d"); draw(g, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.userData = { c, g, draw }; return t; }

/* ---------- arena shell: floor, stands, crowd, lights ---------- */
function arena(key) {
  const g = new THREE.Group();
  scene.background = new THREE.Color(0x0b0624); scene.fog = new THREE.Fog(0x0b0624, 16, 42);
  { const fl = new THREE.Mesh(new THREE.CircleGeometry(30, 48), std(0x1a1046, { roughness: .35, metalness: .3 })); fl.rotation.x = -Math.PI / 2; g.add(fl); }
  // stands: stepped tiers, gap at the back for the entrance ramp in the ring
  const gap = key === "ring" ? .32 : 0, tierM = lam(0x24154f);
  for (let row = 0; row < 7; row++) {
    const r = 12 + row * 1.1, y = .3 + row * .55;
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(r + .6, r + .6, .5, 64, 1, true, Math.PI + gap, Math.PI * 2 - gap * 2), tierM); ring.position.y = y; ring.material.side = THREE.DoubleSide; g.add(ring);
  }
  // crowd: instanced little fans that bounce + glowing light sticks
  const N = 1100, geo = new THREE.CapsuleGeometry(.17, .28, 3, 6), mat = lam(0xffffff), crowd = new THREE.InstancedMesh(geo, mat, N);
  const pal = [0xff5fd2, 0x8ff7f0, 0xffd34d, 0xb48cff, 0x7b9bff, 0xff9b6b, 0xffffff], seats = [], m4 = new THREE.Matrix4(), col = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const row = i % 7, a = Math.PI + gap + Math.random() * (Math.PI * 2 - gap * 2) - Math.PI / 2, r = 12.2 + row * 1.1;
    const s = { x: Math.sin(a) * r, z: Math.cos(a) * r, y: .85 + row * .55, ph: Math.random() * 6.3, sp: 3 + Math.random() * 4 }; seats.push(s);
    m4.makeTranslation(s.x, s.y, s.z); crowd.setMatrixAt(i, m4); crowd.setColorAt(i, col.setHex(pal[i % pal.length]).multiplyScalar(.55 + Math.random() * .4));
  }
  g.add(crowd);
  const sticks = new THREE.BufferGeometry(), sp = [], sc = [];
  for (let i = 0; i < 420; i++) { const s = seats[(i * 7) % N]; sp.push(s.x * .98, s.y + .45, s.z * .98); col.setHex(pal[i % 3]); sc.push(col.r, col.g, col.b); }
  sticks.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3)); sticks.setAttribute("color", new THREE.Float32BufferAttribute(sc, 3));
  const stickPts = new THREE.Points(sticks, new THREE.PointsMaterial({ size: .22, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(stickPts);
  // lights: soft fill + coloured spotlights with visible beams
  scene.add(new THREE.HemisphereLight(0xb9a8ff, 0x1a0b3a, 1.1));
  const key1 = new THREE.DirectionalLight(0xffffff, 1.6); key1.position.set(3, 8, 7); scene.add(key1);
  const beams = [];
  [[0xff5fd2, -7, -4], [0x8ff7f0, 7, -4], [0xb48cff, -6, 6], [0xffe9a6, 6, 6]].forEach(([c, x, z], i) => {
    const s = new THREE.SpotLight(c, 60, 30, .38, .5, 1.2); s.position.set(x, 11, z); s.target.position.set(0, 0, 0); scene.add(s, s.target);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(2.2, 11, 24, 1, true), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: .07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    cone.geometry.translate(0, -5.5, 0); cone.position.set(x, 11, z); g.add(cone); beams.push({ s, cone, x, z, ph: i * 1.7 });
  });
  // jumbotron above
  const jt = canvasTex(512, 256, (c, w, h) => { const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, "#3a0f7a"); gr.addColorStop(1, "#0b5d7a"); c.fillStyle = gr; c.fillRect(0, 0, w, h); c.fillStyle = "#fff"; c.font = "bold 46px Georgia"; c.textAlign = "center"; c.fillText(ctx.label || "", w / 2, h / 2 + 14); });
  const screen = new THREE.Mesh(new THREE.BoxGeometry(5, 2.5, .3), [lam(0x111111), lam(0x111111), lam(0x111111), lam(0x111111), new THREE.MeshBasicMaterial({ map: jt }), lam(0x111111)]);
  screen.position.set(0, 7.5, -10); if (key !== "ring") g.add(screen);
  return { g, crowd, seats, beams, stickPts };
}

/* ---------- equipment models (dimensions match the 2D stage geometry) ---------- */
function equipment(key) {
  const g = new THREE.Group(), blue = std(0x3150d9), mat = lam(0x3d63ff), gold = std(0xffd34d, { metalness: .6, roughness: .3 }), chrome = std(0xdad6f0, { metalness: .8, roughness: .25 });
  if (key === "vault") {
    g.add(box(26, .04, 1, lam(0x2b44c9), -13.5, .02, 0));                       // runway
    for (let x = -26; x < 0; x += 2) g.add(box(.05, .045, 1, lam(0xffffff), x, .03, 0));
    const board = box(1, .14, .6, std(0xff5fd2), -1.25, .12, 0); board.rotation.z = -.18; g.add(board);
    g.add(cyl(.07, 1.05, chrome, -.02, .55, 0)); g.add(box(.55, .06, .55, std(0x5b4b9c), -.02, .03, 0));
    const top = new THREE.Mesh(new THREE.CapsuleGeometry(.18, .6, 6, 16), blue); top.rotation.x = Math.PI / 2; top.scale.set(2.5, 1, .55); top.position.set(-.02, 1.13, 0); g.add(top);
    g.add(box(2.4, .2, 2.4, lam(0x2b2b8f), 2.3, .1, 0));
  } else if (key === "bars") {
    g.add(box(6, .12, 3, mat, .4, .06, 0));
    [[-1, 1.5], [.7, 2.3]].forEach(([x, y]) => {
      g.add(cyl(.022, 2.6, std(0xf2e6c9), x, y, 0, Math.PI / 2));
      [-1.25, 1.25].forEach(z => { g.add(cyl(.04, y, std(0xd9b24a, { metalness: .5 }), x, y / 2, z)); g.add(box(.9, .05, .12, std(0xb8902e), x, .03, z)); });
    });
  } else if (key === "beam") {
    g.add(box(5.4, .1, .1, std(0xf4dcb4, { roughness: .8 }), 0, 1.2, 0));
    [-2.2, 2.2].forEach(x => { g.add(cyl(.05, 1.15, std(0x3a3a9e, { metalness: .4 }), x, .6, 0)); g.add(box(.2, .06, 1.1, std(0x3a3a9e), x, .03, 0)); });
    g.add(box(8, .2, 3, mat, 0, .1, 0));
  } else if (key === "floor") {
    g.add(box(12, .1, 12, lam(0x2c48d6), 0, .05, 0));
    const w = lam(0xffffff); [[0, 5.8, 11.6, .06], [0, -5.8, 11.6, .06]].forEach(([x, z, a, b]) => { g.add(box(a, .02, b, w, x, .11, z)); g.add(box(b, .02, a, w, z, .11, x)); });
    const star = new THREE.Mesh(new THREE.CircleGeometry(1.2, 5), new THREE.MeshBasicMaterial({ color: 0xffd34d })); star.rotation.x = -Math.PI / 2; star.position.y = .105; g.add(star);
  } else if (key === "ring") {
    const skirt = canvasTex(512, 128, (c, w, h) => { c.fillStyle = "#2a0f5e"; c.fillRect(0, 0, w, h); for (let i = 0; i < 40; i++) { c.fillStyle = ["#ff5fd2", "#8ff7f0", "#ffd34d"][i % 3]; c.font = "28px serif"; c.fillText("★", Math.random() * w, 20 + Math.random() * (h - 20)); } c.fillStyle = "#fff"; c.font = "bold 54px Georgia"; c.textAlign = "center"; c.fillText("SSW", w / 2, h / 2 + 18); });
    g.add(new THREE.Mesh(new THREE.BoxGeometry(6.4, 1, 6.4), [lam(0xffffff, { map: skirt }), lam(0xffffff, { map: skirt }), lam(0xf4f0ff), lam(0x000000), lam(0xffffff, { map: skirt }), lam(0xffffff, { map: skirt })]).translateY(.5));
    g.add(box(6.2, .04, 6.2, std(0xf1ecff, { roughness: .9 }), 0, 1.02, 0));
    const ropeC = [0xff5fd2, 0xffffff, 0x8ff7f0], post = std(0xd0d0e0, { metalness: .8, roughness: .2 });
    [[-3, -3], [3, -3], [3, 3], [-3, 3]].forEach(([x, z]) => { g.add(cyl(.08, 1.75, post, x, 1.85, z)); g.add(box(.22, .32, .22, std(0xff5fd2), x, 2.55, z)); });
    [1.45, 1.9, 2.35].forEach((y, i) => { const m = std(ropeC[i], { emissive: ropeC[i], emissiveIntensity: .25 });
      g.add(cyl(.035, 6, m, 0, y, -3, 0, Math.PI / 2)); g.add(cyl(.035, 6, m, 0, y, 3, 0, Math.PI / 2)); g.add(cyl(.035, 6, m, -3, y, 0, Math.PI / 2)); g.add(cyl(.035, 6, m, 3, y, 0, Math.PI / 2)); });
    // entrance ramp + stage + video wall + pyro
    g.add(box(2.6, 1, 11, lam(0x3a1a7a), 0, .5, -9.6)); g.add(box(2.6, .03, 11, std(0xb48cff, { roughness: .2, metalness: .5 }), 0, 1.01, -9.6));
    [-1.32, 1.32].forEach(x => g.add(box(.08, .08, 11, new THREE.MeshBasicMaterial({ color: 0xff5fd2 }), x, 1.04, -9.6)));
    g.add(box(10, 1, 4, lam(0x2a0f5e), 0, .5, -17));
    const wall = canvasTex(512, 256, (c, w, h, t = performance.now() / 1000) => { const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, `hsl(${(t * 40) % 360},80%,45%)`); gr.addColorStop(1, `hsl(${(t * 40 + 120) % 360},80%,35%)`); c.fillStyle = gr; c.fillRect(0, 0, w, h); c.fillStyle = "#fff"; c.textAlign = "center"; c.font = "bold 40px Georgia"; c.fillText(ctx.label || "", w / 2, h / 2 - 10); c.font = "bold 30px Georgia"; c.fillStyle = "#ffe27a"; c.fillText("“THE STARLIGHT”", w / 2, h / 2 + 34); });
    const vw = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), new THREE.MeshBasicMaterial({ map: wall })); vw.position.set(0, 3.6, -18.9); g.add(vw); ctx.wall = wall;
    [-2.4, 2.4].forEach(x => [-1.2, 1.2].forEach(dx => g.add(box(.5, 6, .5, std(0x8888a8, { metalness: .7 }), x + dx * 2.2, 3, -18.6))));
  }
  return g;
}

function pyro() { // sparkle fountains (gym: sparkle bursts by the equipment, ring: by the stage)
  const n = 700, geo = new THREE.BufferGeometry(), pos = new Float32Array(n * 3), vel = new Float32Array(n * 3), life = new Float32Array(n);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: .12, color: 0xffe9a6, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  pts.frustumCulled = false; pos.fill(-999);
  return { pts, pos, vel, life, burst(x, y, z, k = 200, up = 7) { for (let i = 0, d = 0; i < n && d < k; i++) if (life[i] <= 0) { d++; life[i] = 1 + Math.random(); pos.set([x + (Math.random() - .5) * .3, y, z + (Math.random() - .5) * .3], i * 3); vel.set([(Math.random() - .5) * 2.5, up * (.6 + Math.random() * .6), (Math.random() - .5) * 2.5], i * 3); } },
    step(dt) { for (let i = 0; i < n; i++) { if (life[i] <= 0) continue; life[i] -= dt; vel[i * 3 + 1] -= 9 * dt; for (let k = 0; k < 3; k++) pos[i * 3 + k] += vel[i * 3 + k] * dt; if (life[i] <= 0) pos[i * 3 + 1] = -999; } geo.attributes.position.needsUpdate = true; } };
}

/* ---------- the gymnast billboard ---------- */
function makeHero() {
  const pivot = new THREE.Group(), mat = new THREE.MeshBasicMaterial({ transparent: true, alphaTest: .08, side: THREE.DoubleSide }), plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
  pivot.add(plane);
  const blob = new THREE.Mesh(new THREE.CircleGeometry(.35, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .35, depthWrite: false })); blob.rotation.x = -Math.PI / 2;
  return { pivot, plane, mat, blob, cur: "" };
}

/* ---------- public API ---------- */
export function mount(stage, opts) {
  unmount();
  ctx = Object.assign({ key: "vault", label: "", t0: performance.now(), mode: "idle", fpUntil: 0, entrance: null }, opts);
  try {
    if (!R) { R = new THREE.WebGLRenderer({ antialias: (devicePixelRatio || 1) < 2, powerPreference: "high-performance" }); R.outputColorSpace = THREE.SRGBColorSpace; }
  } catch (e) { opts.onFail && opts.onFail(e); return false; }
  R.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  const cvs = R.domElement; cvs.className = "three"; stage.appendChild(cvs); stage.classList.add("is3d");
  scene = new THREE.Scene(); cam = new THREE.PerspectiveCamera(50, 2, .05, 80);
  ctx.A = arena(ctx.key); scene.add(ctx.A.g); scene.add(equipment(ctx.key));
  ctx.hero = makeHero(); scene.add(ctx.hero.pivot, ctx.hero.blob);
  ctx.fx = pyro(); scene.add(ctx.fx.pts);
  ctx.camPos = new THREE.Vector3(0, 3, 9); ctx.look = new THREE.Vector3(0, 1.2, 0); cam.position.copy(ctx.camPos);
  ctx.stage = stage; fps = { n: 0, t: performance.now(), bad: 0 };
  const loop = now => { raf = requestAnimationFrame(loop); if (!document.body.contains(cvs)) return unmount(); frame(now); };
  raf = requestAnimationFrame(loop);
  return true;
}
export function unmount() { cancelAnimationFrame(raf); raf = 0; if (R && R.domElement.parentNode) { R.domElement.parentNode.classList.remove("is3d"); R.domElement.remove(); } if (scene) scene.traverse(o => { o.geometry && o.geometry.dispose(); }); scene = null; ctx = null; }
export const isOn = () => !!ctx;
export function perform(name) { if (!ctx) return; ctx.mode = "perform"; ctx.t0 = performance.now(); ctx.move = name; ctx.fx.burst(ctx.key === "ring" ? -3 : 0, 2.2, -2.5, 60, 4); }
export function idle() { if (!ctx) return; ctx.mode = "idle"; ctx.t0 = performance.now(); }
export function firstPerson(ms) { if (ctx) ctx.fpUntil = performance.now() + ms; }
export function entrance(ms) { if (!ctx) return; ctx.mode = "entrance"; ctx.t0 = performance.now(); ctx.entMs = ms; ctx.fx.burst(-3.5, 1, -17.5, 250, 9); ctx.fx.burst(3.5, 1, -17.5, 250, 9); }
export function celebrate() { if (!ctx) return; const x = ctx.key === "ring" ? 3 : 2; ctx.fx.burst(-x, 1, 0, 150, 7); ctx.fx.burst(x, 1, 0, 150, 7); }

const tmp = new THREE.Vector3();
function frame(now) {
  const W = ctx.stage.clientWidth, H = ctx.stage.clientHeight; if (!W || !H) return;
  if (R.domElement.width !== Math.round(W * R.getPixelRatio()) || R.domElement.height !== Math.round(H * R.getPixelRatio())) { R.setSize(W, H, false); cam.aspect = W / H; cam.updateProjectionMatrix(); }
  const dt = Math.min(.05, (now - (ctx.last || now)) / 1000), t = now / 1000; ctx.last = now;
  // auto-fallback if the device is struggling (avg < ~20fps over the first 3 s)
  fps.n++; if (now - fps.t > 3000 && !fps.done) { fps.done = true; if (fps.n / 3 < 20 && ctx.onSlow) { ctx.onSlow(fps.n / 3); return; } }
  const A = ctx.A, key = ctx.key, by = BASEY[key];
  A.beams.forEach(b => { const tx = Math.sin(t * .5 + b.ph) * 3, tz = Math.cos(t * .4 + b.ph) * 2; b.s.target.position.set(tx, 0, tz); b.cone.lookAt(tx, 0, tz); b.cone.rotateX(-Math.PI / 2); });
  // crowd bounce: update a slice each frame (cheap on tablets)
  const m4 = new THREE.Matrix4(), N = A.seats.length, hype = ctx.mode === "idle" ? 1 : 2.4;
  for (let i = (ctx.slice = ((ctx.slice || 0) + 1) % 3); i < N; i += 3) { const s = A.seats[i]; m4.makeTranslation(s.x, s.y + Math.max(0, Math.sin(t * s.sp + s.ph)) * .09 * hype, s.z); A.crowd.setMatrixAt(i, m4); }
  A.crowd.instanceMatrix.needsUpdate = true; A.stickPts.material.size = .18 + Math.sin(t * 6) * .05;
  if (ctx.wall && (ctx.wallT = (ctx.wallT || 0) + dt) > .15) { ctx.wallT = 0; const w = ctx.wall.userData; w.draw(w.g, w.c.width, w.c.height); ctx.wall.needsUpdate = true; }
  ctx.fx.step(dt);
  if (ctx.mode !== "entrance" && Math.random() < dt * .5) ctx.fx.burst((Math.random() < .5 ? -1 : 1) * 4, 0, -3, 40, 6);

  // --- hero billboard from the Rig ---
  const rig = ctx.rig, p = rig.p, h = ctx.hero, name = rig.cur || "stand", spr = ctx.spr(name);
  if (h.cur !== name) { h.cur = name; h.mat.map = tex(ctx.url(name)); h.mat.needsUpdate = true; }
  const [sw, sh, ax, ay] = spr, w = sw * ctx.K * S, hh = sh * ctx.K * S;
  let hx = p.x * S, hy = by - p.y * S, hz = 0;
  if (ctx.mode === "entrance") { const u = Math.min(1, (now - ctx.t0) / ctx.entMs); hx = 0; hz = -16 + u * 13.2; hy = 1 + .66 + Math.abs(Math.sin(u * 40)) * .03; }
  h.pivot.position.set(hx, hy, hz);
  const yaw = Math.max(-1.1, Math.min(1.1, Math.atan2(cam.position.x - hx, cam.position.z - hz)));
  h.pivot.rotation.set(0, ctx.mode === "entrance" ? Math.atan2(cam.position.x - hx, cam.position.z - hz) : yaw, 0); h.pivot.rotateZ(-(p.r || 0) * Math.PI / 180);
  h.plane.scale.set(w * (p.sx || 1), hh, 1); h.plane.position.set((.5 - ax) * w * (p.sx || 1), (ay - .5) * hh, 0);
  const groundY = key === "beam" && Math.abs(hx) < 2.7 && hy > 1.4 ? 1.255 : key === "ring" && Math.abs(hx) < 3.1 && Math.abs(hz) < 3.1 ? 1.03 : key === "ring" && hz < -3 ? 1.04 : key === "floor" ? .11 : key === "vault" && hx > 1.1 && hx < 3.5 ? .205 : .02;
  h.blob.position.set(hx, groundY + .005, hz); const air = Math.max(0, hy - .66 - groundY); h.blob.scale.setScalar(Math.max(.3, 1 - air * .4)); h.blob.material.opacity = Math.max(.1, .35 - air * .1);

  // --- cameras ---
  let fov = 50, roll = 0; const look = tmp; let fp = false;
  if (ctx.mode === "entrance") {
    const u = Math.min(1, (now - ctx.t0) / ctx.entMs);
    if (u < .22) { ctx.camPos.set(Math.sin(t * .3) * 2, 5 - u * 6, 4); look.set(0, 3, -17); }                                   // wide on the video wall + pyro
    else { const k = (u - .22) / .78; ctx.camPos.set(2.4 - k * 1.2, 1.9 + (1 - k) * .8, hz + 4.2 - k * 1.2); look.set(hx, hy + .25, hz); } // tracking in front of her
  } else if (key === "vault" && (name === "run1" || name === "run2") && (p.sx || 1) > 0 && p.x < -100) {
    fp = true; fov = 78; const bob = Math.sin(t * 22) * .035;
    ctx.camPos.set(hx + .05, hy + .78 + bob, 0); look.set(0, 1.05, 0); ctx.snap = true;
  } else if (ctx.fpUntil > now && key === "beam") {
    fp = true; fov = 70; roll = Math.sin(t * 2.3) * .04;
    ctx.camPos.set(hx + .08, 1.25 + 1.48 + Math.sin(t * 7) * .015, Math.sin(t * 1.7) * .02); look.set(hx + 2.6, 1.05, 0); ctx.snap = true;
  } else if (ctx.mode === "perform") {
    const u = (now - ctx.t0) / 1000, ang = -.75 + Math.min(1.5, u * .45), rad = Math.max(3.6, 6 - u * .7), ht = Math.max(.9, 2.6 - u * .5);
    ctx.camPos.set(hx + Math.sin(ang) * rad, by + ht, Math.cos(ang) * rad + hz); look.set(hx, hy, hz);
  } else {
    const a = Math.sin(t * .18) * .6, cx = key === "vault" ? -.5 : key === "bars" ? 0 : 0, rad = key === "floor" ? 9 : key === "ring" ? 9.5 : 7;
    ctx.camPos.set(cx + Math.sin(a) * rad, by + 2.3, Math.cos(a) * rad); look.set(hx * .5 + cx * .5, by + .9, 0);
  }
  h.plane.visible = !fp;
  const k = ctx.snap ? 1 : 1 - Math.pow(.02, dt); ctx.snap = fp;
  cam.position.lerp(ctx.camPos, k); ctx.look.lerp(look, k); cam.lookAt(ctx.look); cam.rotateZ(roll);
  if (Math.abs(cam.fov - fov) > .1) { cam.fov += (fov - cam.fov) * Math.min(1, dt * 8); cam.updateProjectionMatrix(); }
  R.render(scene, cam);
}
window.Arena3D = { supported, mount, unmount, isOn, perform, idle, firstPerson, entrance, celebrate };
window.dispatchEvent(new Event("arena3d-ready"));
