# Starlight Arena: Aniston's Weekly Gymnastics Practice Game

This is a static browser game with no server, no build step and no API keys. Open `index.html` directly, or host the folder anywhere.

| Event | Subject |
|---|---|
| Vault | Math |
| Uneven Bars | ELA |
| Balance Beam | Science |
| Floor | Social Studies |

Each correct answer unlocks one of 8 skills in the event.

## Run / deploy
- **Locally:** run `python3 -m http.server` in this folder, or just double-click `index.html`.
- **GitHub Pages:** push this folder to a repo, then go to Settings → Pages and deploy from the branch root.
- **Netlify:** drag this folder onto app.netlify.com/drop.

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
- Skills use about 16 key poses with a short cross-fade between them, so motion is smooth but not frame-by-frame animation.
- Animations are a stylized 2D side view and only approximate the real skills.
- There are 8 questions per event, and judges' score variation is cosmetic.
- Progress and photos stay in that one browser on that device.

## 3D arena + Wrestling theme (v3)
- **3D mode** (Three.js r170 vendored in `vendor/`, no CDN): `arena3d.js` builds the arena, crowd, spotlights, equipment, ring, ramp and pyro. The gymnast is a sprite billboard driven by the same 2D rig. Cameras swoop around, go first-person on the vault run-up, and look down the beam.
- **Simple mode (2D)** is picked automatically on low-end devices, when WebGL fails, or when the game runs under 20 fps (saved). Toggle it with the 🖼 button. Override with `?mode=3d|simple|auto`.
- **Theme:** gymnastics (default) or **Starlight Superstar Wrestling**, an original league with no real WWE names, logos, wrestlers or music. Each subject is a championship belt, the moves are cartoony showmanship, there is a ring entrance with an announcer and pyro, and a belt ceremony. Switch on the title or Studio screen, or use `?theme=wrestle|gym`.
- **Music:** an original 36s arena-rock walkout and a 5s fanfare, synthesized with WebAudio (no audio files). Mute stops them.
- Limits: the ring gear has one colorway; ES modules don't load over file:// (it falls back to Simple mode); software-GPU devices drop to Simple mode.
