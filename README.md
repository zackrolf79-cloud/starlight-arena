# Starlight Arena: Aniston's Weekly Gymnastics Practice Game

This is a static website and browser game with no server, no build step and no API keys. `index.html` is the home page and `play.html` is the game. Open either one directly, or host the folder anywhere.

| Event | Subject |
|---|---|
| Vault | Math |
| Uneven Bars | ELA |
| Balance Beam | Science |
| Floor | Social Studies |

Each correct answer unlocks one of 8 skills in the event.

## Run / deploy
- **Locally:** run `python3 -m http.server` in this folder, or just double-click `play.html`.
- **GitHub Pages:** push this folder to a repo, then go to Settings → Pages and deploy from the branch root.
- **Netlify:** drag this folder onto app.netlify.com/drop.

## Website (v7)
| Page | What it is |
|---|---|
| `index.html` | Landing page with a summary of this week's topics |
| `launch.html` | Game launcher: gymnastics or wrestling, in 3D or Simple 2D (links to `play.html?theme=gym\|wrestle&mode=3d\|simple`) |
| `lessons.html` | Weekly lessons archive: topics and coach notes for every week, with a link to replay any week (`play.html?week=<id>`) |
| `parents.html` | How the game lines up with the GVA AI expectations, plus privacy details and a button to clear this device's saved data |
| `play.html` | The game, with a 🏠 Home button |

Shared files are `site.css` and `site.js`, which add the header, footer and the "AI-made practice" label. Pages are mobile-first and tested at phone, tablet and desktop widths. They make no external requests.

### Archiving a week
1. Move the old `week.js` to `weeks/<its id>.js`, then update its `file` in `weeks/manifest.js`.
2. Put the new `week.js` in place and add `{ id, file: "week.js", label }` at the **top** of `weeks/manifest.js`.

### Custom domain (optional, not purchased)
1. Buy the domain at a registrar.
2. In the repo, go to Settings → Pages → Custom domain, enter it, and save. This adds a `CNAME` file.
3. At the DNS provider, add `A` records for `@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153. Optionally add `AAAA` records for 2606:50c0:8000::153 through 2606:50c0:8003::153.
4. Add a `CNAME` record for `www` pointing to `zackrolf79-cloud.github.io`. Don't use wildcard records.
5. Optionally verify the domain under your GitHub profile → Settings → Pages.
6. Tick **Enforce HTTPS** once it's offered, which can take up to 24 h.

## Swap the weekly content (edit only `week.js`)
1. Change `id` (for example `2026-wk-nov02`). Progress is saved per id, so a new id starts a fresh week.
2. Edit `title`, and edit each event's `subject`, `topic`, `notes` (the coach's note cards) and `questions`.
3. Each event needs **8 questions**. Each question has:
   - `q`, `choices` (4 options) and `a` (index of the correct choice)
   - `hint`, `steps` (the coach walk-through) and `explain`
4. `skills` and `anims` are the 8 skill names and their animation ids. Keep the existing ids per event; you can rename the skills freely.

## Swap the theme
- `theme.background`, `theme.podium` and `theme.gymnast` are image paths in `assets/`.
- `theme.colors` sets the accent colors.
- Event card art is set by each event's `icon`.
- **Gymnast sprites** are in `assets/gym/{leotard}-{pose}.webp`. There are 6 leotard variants (starlight, galaxy, ocean, ruby, mint, sunset) and 16 side-view poses plus `hero`. `SPR` in `game.js` lists each pose's size and hip anchor. Animation tweens position and rotation between pose sprites, and the sprite for each keyframe is picked from the pose data.

## AI policy (GVA)
- All questions are original practice. Never paste real quiz/test questions or their answers.
- Hints and the coach walk-through always come before "Show answer".
- The label "AI-made practice, not for graded work" is always visible.
- The only personal info is a first name (`athleteName`).

## Design Your Gymnast and photo privacy
- The studio lets you pick one of 6 painted leotard variants and turn sparkles on or off. Your choices are saved in localStorage.
- "Upload my gymnast" resizes the picture in the browser and saves it in localStorage. It is **never uploaded** anywhere.
- Tip shown in the game: "Make a gymnast picture in ChatGPT with a grown-up, save it, and upload it here."

## Limits
- The uploaded picture is used as a portrait only (title, HUD, map, podium). The animated gymnast is the painted character in the chosen leotard.
- Hair, skin and scrunchie are fixed to the reference design. Only the leotard colors change, and they are recolored from the original art.
- The priority skills are frame-by-frame (8-frame sequences, see v8). Other moves still use about 16 key poses with a short cross-fade between them. These are: kip, cast, the hip circle, pirouette, handstand, cartwheel, walkover, the wrestling strikes and slams, and the entrance walk.
- Animations are a stylized 2D side view and only approximate the real skills.
- There are 8 questions per event, and judges' score variation is cosmetic.
- Progress and photos stay in that one browser on that device.

## 3D arena + Wrestling theme (v3)
- **3D mode** (Three.js r170 vendored in `vendor/`, no CDN): `arena3d.js` builds the arena, crowd, spotlights, equipment, ring, ramp and pyro. The gymnast is a sprite billboard driven by the same 2D rig. Cameras swoop around, go first-person on the vault run-up, and look down the beam.
- **Simple mode (2D)** is picked automatically on low-end devices, when WebGL fails, or when the game runs under 20 fps (saved). Toggle it with the 🖼 button. Override with `?mode=3d|simple|auto`.
- **Theme:** gymnastics (default) or **Starlight Superstar Wrestling**, an original league with no real WWE names, logos, wrestlers or music. Each subject is a championship belt, the moves are cartoony showmanship, there is a ring entrance with an announcer and pyro, and a belt ceremony. Switch on the title or Studio screen, or use `?theme=wrestle|gym`.
- **Music:** an original 36s arena-rock walkout and a 5s fanfare, synthesized with WebAudio (no audio files). Mute stops them.
- Limits: the ring gear has one colorway; ES modules don't load over file:// (it falls back to Simple mode); software-GPU devices drop to Simple mode.

## Real matches + The Pink Cheetah (v4)
- **Every wrestling round is now a match against an original cartoon heel**, one per belt: Dr. Remainder (vault/math), The Typo Tornado (bars), Short Circuit Sasha (beam) and Baron Tea-Tax (floor). Each one has idle, attack, hit, taunt and pinned poses (`assets/opp/`). A match runs entrances → faceoff → questions → finisher → pin → belt ceremony. There is a cartoon referee (`assets/ref/`), a crowd, an announcer, Energy and Momentum bars, camera shake, impact flashes, rope bounce and WebAudio SFX. All of it works in both 3D and Simple 2D.
- **Right answer:** a non-violent cartoon move, and the opponent's momentum drops. **Wrong answer:** the opponent reverses and taunts, then the hint and coach walk-through come before the answer is shown (GVA policy unchanged: hints first, original questions, the "AI-made practice" label, first name only).
- **Aniston is "THE PINK CHEETAH"**: pink and black cheetah-print full-coverage gear, a cheetah-face emblem, pink lace-up boots, and wavy hair with pink streaks. The arena is pink and purple, with a cheetah-print ramp, a cheetah titantron (`assets/ring/titantron.webp`) and pink pyro.
- **Finisher, the Top-Rope Cheetah Pounce:** she climbs the turnbuckle and poses on the top rope while the crowd rises and the camera pushes in. Then she does a **gainer**: she takes off forward, does a full backflip while travelling toward the opponent, and lands in the cover. After that come the ref's 1-2-3, the bell and the belt.
- `?slowmo=N` (1–8) slows every animation. It is only for testing and screenshots.
- Gymnastics is unchanged.

## Ring cam (wrestling view)
- **3D:** a low, mat-level broadcast camera inside the ropes. Over-the-shoulder during the faceoff and questions, orbit/swing during moves, look-up at the top-rope perch, a follow through the Cheetah Pounce gainer, then a low pin shot with the ref's count close to the lens. Entrances start on the ramp and cut inside the ring.
- **Simple 2D:** a pan/zoom camera that frames the real on-screen sprite positions, with blurred foreground ropes/turnbuckles and crowd parallax.
- Gymnastics views are unchanged.

## Motion + graphics (v7)
- **Secondary motion:** one rAF loop (`rigFX`) layers squash and stretch on every rig. That includes stretch in the air, a damped landing squash with a follow-through bounce, and a crouch anticipation squash. It also adds a lean into travel that overshoots when she stops, idle breathing, motion trails on fast flips, and a longer blended cross-fade between poses. The 3D billboards read the same `rig.fx`.
- **3D depth:** the billboards get a rim-light shader, soft body shading and soft radial contact shadows sized to the pose. There are also after-image trails, chalk and mat-dust puffs on landings, and floating dust motes.
- **2D effects:** chalk and sparkle puffs on landings and at the bar, moving light rays, sparkle fountains after gym skills, and ring pyro on big hits, the finisher and the win.
- **Fixes:**
  - the salute and celebrate poses now have sleeves;
  - action poses are leaner;
  - the stick, pike, tuck and passe anchors are re-centred;
  - her hands meet the high bar (`GR`);
  - the scrunchie keeps its colour when the leotard changes;
  - the crowd no longer covers the entrance ramp;
  - the 2D finisher title moves clear of her.

## Smoother animation (v8)
- **Frame sequences.** Seven new 8-frame sheets were painted in the same anime style, one per leotard for the gym and in the Pink Cheetah singlet for the ring:
  - `grun`: the run cycle;
  - `gsalto`: the salto: stretch, tuck, open, land;
  - `gleap`: the split leap;
  - `ggiant`: the giant swing;
  - `gtumb`: hurdle, round-off and back handspring;
  - `crun`: the Cheetah's run;
  - `cgain`: the gainer.
- **Cutting the sheets.** `anim8/cut8.py` (outside the repo) cuts each sheet into `assets/gym/{leotard}-{seq}{i}.webp` and `assets/ring/{seq}{i}.webp`. Every frame is anchored at the feet (or at the hands on bars) so nothing jumps between frames.
- **The hybrid method:**
  - The painted frames carry the body shape.
  - The engine adds root motion, rotation and squash.
  - Each segment plays a frame range (`seq` + `f:[a,b]`) with its easing.
  - Neighbouring frames cross-blend (a two-layer smoothstep in SVG, a second billboard plane in 3D).
  - Everything runs on 60fps delta-time `requestAnimationFrame`.
- **Runs.** Runs are stride-locked: the frame advances with distance (`cyc`), so feet don't skate.
- **Giant swing.** The giant swing picks its frame from the bar angle (`gf()`).
- **Timings unchanged.** Segment timings are unchanged, so match cues (impacts, finisher, pin) still line up.
- **Priority moves:**
  - vault: run, hurdle, round-off entry, tuck, layout and pike saltos;
  - the top-rope gainer finisher;
  - floor: round-off, handspring, saltos, the leap and a stride-locked jog back;
  - beam: the leap and split jump;
  - bars: the giant swings;
  - all wrestling runs (rope runs, the run-up before a dropkick or crossbody) use the Cheetah run cycle.
- **Vault camera (3D).** A side-on tracking shot follows her for the whole flight, and the aim follows her tightly so fast skills stay in frame.
- **AI label.** On phones the label is a solid bottom bar. The page reserves room for it, including the iPhone safe area, so it never covers text. It sits above pop-ups and lets taps pass through.
