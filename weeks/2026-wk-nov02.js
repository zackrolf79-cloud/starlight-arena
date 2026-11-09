/* =====================================================================
   WEEK CONTENT FILE — swap this file each week (see README.md).
   Week of Nov 2, 2026 · meet theme: Aurora Peaks Classic (see themes.md).
   Questions are ORIGINAL AI-made practice written about the same concepts
   as the lessons; none are copied from GVA lessons, quizzes, tests, or
   activity sheets. Hints + coach walk-through come before the answer.
   athleteName is FIRST NAME ONLY (privacy).
   Optional "wrestle" block overrides belt names, moves and opponents.
   ===================================================================== */
window.WEEK = {
 "id": "2026-wk-nov02",
 "title": "Aurora Peaks Classic",
 "subtitle": "Week of Nov 2 · Grade 5",
 "athleteName": "Aniston",
 "theme": {
  "background": "assets/arena.webp",
  "podium": "assets/podium.webp",
  "gymnast": "assets/gym/starlight-hero.webp",
  "accent": "#4ff0b0",
  "accent2": "#a98bff",
  "gold": "#ffd34d",
  "leotard": [
   "#2fbf9a",
   "#7b5cff",
   "#4ff0b0"
  ],
  "hair": "#6b3b1f",
  "skin": "#f3c39b"
 },
 "wrestle": {
  "show": "Northern Lights Throwdown",
  "ev": {
   "vault": {
    "name": "Fraction Frenzy Championship",
    "moves": [
     "Benchmark Lock-Up",
     "Round-to-a-Half Shoulder Block",
     "Common Denominator Crossbody",
     "LCM Suplex Toss",
     "Mixed Number Dropkick",
     "Equivalent Fraction Tuck Flip",
     "Missing Addend Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "bars": {
    "name": "Sentence Slam Championship",
    "moves": [
     "Homophone Lock-Up",
     "Context Clue Shoulder Block",
     "Signal Word Crossbody",
     "Claim & Evidence Suplex Toss",
     "FANBOYS Dropkick",
     "Comma Catch Tuck Flip",
     "Complex Clause Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "beam": {
    "name": "Circuit Breaker Championship",
    "moves": [
     "Power Source Lock-Up",
     "Live Wire Shoulder Block",
     "Closed Loop Crossbody",
     "Battery Blast Suplex Toss",
     "Switch Flip Dropkick",
     "Bright Bulb Tuck Flip",
     "Current Flow Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "floor": {
    "name": "Trade Route Championship",
    "moves": [
     "Market Lock-Up",
     "Cod & Timber Shoulder Block",
     "Cash Crop Crossbody",
     "Supply & Demand Suplex Toss",
     "Shipbuilder Dropkick",
     "Profit Tuck Flip",
     "Compass Rose Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   }
  },
  "opp": {
   "vault": {
    "name": "The Unlike Denominator",
    "tag": "the Mismatch Menace",
    "color": "#a6e22e",
    "taunts": [
     "My pieces NEVER match!",
     "Good luck finding a common denominator!",
     "I'll chop you into twelfths!"
    ],
    "boo": "The Unlike Denominator scrambles the pieces!"
   },
   "bars": {
    "name": "Run-On Ronnie",
    "tag": "the Comma Crasher",
    "color": "#ff4d4d",
    "taunts": [
     "I never stop for commas and I just keep going and going!",
     "Their, there, whatever!",
     "I'll fragment your sentence!"
    ],
    "boo": "Run-On Ronnie skips the comma!"
   },
   "beam": {
    "name": "Captain Open Circuit",
    "tag": "the Gap Maker",
    "color": "#ffd21f",
    "taunts": [
     "Snip! Your circuit has a gap!",
     "Lights out, Cheetah!",
     "No loop, no glow!"
    ],
    "boo": "Captain Open Circuit flips the switch OFF!"
   },
   "floor": {
    "name": "Count Copper-Coin",
    "tag": "the Price Gouger",
    "color": "#e0a030",
    "taunts": [
     "Buy only from ME!",
     "Prices just went UP!",
     "No competition allowed!"
    ],
    "boo": "Count Copper-Coin corners the market!"
   }
  }
 },
 "events": [
  {
   "key": "vault",
   "name": "Vault",
   "subject": "Math",
   "topic": "Estimating & adding fractions with unlike denominators",
   "icon": "assets/vault.webp",
   "color": "#4ff0b0",
   "skills": [
    "Power Run",
    "Round-off Entry",
    "Handspring",
    "Tuck Salto",
    "Pike Salto",
    "Layout",
    "Full Twist",
    "Stuck Landing!"
   ],
   "anims": [
    "run",
    "roundoff",
    "handspring",
    "tuck",
    "pike",
    "layout",
    "twist",
    "stick"
   ],
   "notes": [
    {
     "t": "Benchmark buddies",
     "b": "To estimate, round each fraction to 0, 1/2 or 1. Compare the top to the bottom: tiny top → about 0; top about half the bottom → about 1/2; top almost the bottom → about 1."
    },
    {
     "t": "Mixed numbers",
     "b": "Keep the whole number, then round the fraction part. 4 7/8 is about 5, and 2 1/10 is about 2."
    },
    {
     "t": "Same-size pieces",
     "b": "You can only add or subtract fractions when the pieces are the same size, so first find a common denominator."
    },
    {
     "t": "LCM shortcut",
     "b": "The least common multiple of the denominators is the smallest common denominator. Multiply top AND bottom by the same number."
    },
    {
     "t": "Tidy the answer",
     "b": "Simplify if you can. If the top is bigger than the bottom, change it to a mixed number (13/10 = 1 3/10)."
    },
    {
     "t": "Missing addend",
     "b": "? + 1/4 = 3/4 → subtract: 3/4 − 1/4. Then check by adding back."
    }
   ],
   "questions": [
    {
     "q": "Estimate: 7/8 + 5/12. About how much is the sum?",
     "choices": [
      "about 1/2",
      "about 1",
      "about 1 1/2",
      "about 2"
     ],
     "a": 2,
     "hint": "Round each fraction to 0, 1/2 or 1 first. Is 7 close to 8? Is 5 close to half of 12?",
     "steps": [
      "7/8: the top is almost the bottom → about 1.",
      "5/12: half of 12 is 6, and 5 is close to 6 → about 1/2.",
      "1 + 1/2 = 1 1/2.",
      "Estimate: about 1 1/2 ✔"
     ],
     "explain": "7/8 ≈ 1 and 5/12 ≈ 1/2, so the sum is about 1 1/2."
    },
    {
     "q": "Estimate: 9/10 − 4/9. About how much is left?",
     "choices": [
      "about 0",
      "about 1/2",
      "about 1",
      "about 1 1/2"
     ],
     "a": 1,
     "hint": "Round 9/10 and 4/9 to benchmarks, then subtract.",
     "steps": [
      "9/10 is almost a whole → about 1.",
      "Half of 9 is 4.5, and 4 is close → 4/9 is about 1/2.",
      "1 − 1/2 = 1/2.",
      "Estimate: about 1/2 ✔"
     ],
     "explain": "9/10 ≈ 1 and 4/9 ≈ 1/2, so about 1/2."
    },
    {
     "q": "A gymnast stretches for 3 1/8 minutes, then warms up for 2 5/6 minutes. About how many minutes is that?",
     "choices": [
      "about 5",
      "about 5 1/2",
      "about 6",
      "about 7"
     ],
     "a": 2,
     "hint": "Keep the whole numbers. Round each fraction part to 0, 1/2 or 1.",
     "steps": [
      "3 1/8: 1/8 is tiny → about 3.",
      "2 5/6: 5/6 is almost 1 → about 3.",
      "3 + 3 = 6.",
      "Estimate: about 6 minutes ✔"
     ],
     "explain": "3 1/8 ≈ 3 and 2 5/6 ≈ 3, so about 6 minutes."
    },
    {
     "q": "What is 1/4 + 3/8?",
     "choices": [
      "4/12",
      "1/2",
      "5/8",
      "4/8"
     ],
     "a": 2,
     "hint": "Fourths and eighths are different sizes. How many eighths make 1/4?",
     "steps": [
      "8 is a multiple of 4, so use 8 as the common denominator.",
      "1/4 = 2/8 (multiply top and bottom by 2).",
      "2/8 + 3/8 = 5/8. Add only the tops!",
      "Check: 5/8 is a little more than 1/2, which matches 1/4 + 3/8 ✔"
     ],
     "explain": "1/4 + 3/8 = 2/8 + 3/8 = 5/8."
    },
    {
     "q": "What is 2/3 + 1/4?",
     "choices": [
      "3/7",
      "11/12",
      "9/12",
      "3/12"
     ],
     "a": 1,
     "hint": "Find the LCM of 3 and 4. Never add the bottoms!",
     "steps": [
      "Multiples of 3: 3, 6, 9, 12. Multiples of 4: 4, 8, 12. LCM = 12.",
      "2/3 = 8/12 (×4 top and bottom).",
      "1/4 = 3/12 (×3 top and bottom).",
      "8/12 + 3/12 = 11/12 ✔"
     ],
     "explain": "2/3 + 1/4 = 8/12 + 3/12 = 11/12."
    },
    {
     "q": "The beam team runs 3/4 of a lap, then 5/6 of a lap. How far is that in all?",
     "choices": [
      "8/10 lap",
      "19/24 lap",
      "1 1/12 laps",
      "1 7/12 laps"
     ],
     "a": 3,
     "hint": "Use the LCM of 4 and 6 as the denominator. Is the answer more than 1 lap?",
     "steps": [
      "LCM of 4 and 6 is 12.",
      "3/4 = 9/12 and 5/6 = 10/12.",
      "9/12 + 10/12 = 19/12.",
      "19/12 = 12/12 + 7/12 = 1 7/12 laps ✔"
     ],
     "explain": "3/4 + 5/6 = 19/12 = 1 7/12 laps."
    },
    {
     "q": "What is 7/10 − 1/4?",
     "choices": [
      "6/6",
      "3/10",
      "9/20",
      "11/20"
     ],
     "a": 2,
     "hint": "Find a common denominator for 10 and 4, then subtract the tops.",
     "steps": [
      "Multiples of 10: 10, 20. Multiples of 4: 4, 8, 12, 16, 20. LCM = 20.",
      "7/10 = 14/20 and 1/4 = 5/20.",
      "14/20 − 5/20 = 9/20.",
      "Check: 9/20 + 5/20 = 14/20 = 7/10 ✔"
     ],
     "explain": "7/10 − 1/4 = 14/20 − 5/20 = 9/20."
    },
    {
     "q": "A ribbon routine is 5/6 of a minute long. The first part took 1/3 of a minute. How long is the rest? (1/3 + ? = 5/6)",
     "choices": [
      "4/3 min",
      "1/6 min",
      "2/3 min",
      "1/2 min"
     ],
     "a": 3,
     "hint": "A missing addend means subtract: 5/6 − 1/3. Make sixths first.",
     "steps": [
      "1/3 = 2/6.",
      "5/6 − 2/6 = 3/6.",
      "3/6 simplifies to 1/2.",
      "Check: 1/3 + 1/2 = 2/6 + 3/6 = 5/6 ✔"
     ],
     "explain": "The rest is 3/6 = 1/2 minute."
    }
   ]
  },
  {
   "key": "bars",
   "name": "Uneven Bars",
   "subject": "ELA",
   "topic": "Homophones, context clues, claims & clauses",
   "icon": "assets/bars.webp",
   "color": "#ffd34d",
   "skills": [
    "Glide Kip",
    "Cast to Handstand",
    "Clear Hip Circle",
    "Giant Swing",
    "Pirouette Turn",
    "Transition Leap",
    "Double Giant",
    "Flyaway Dismount"
   ],
   "anims": [
    "kip",
    "cast",
    "hipcircle",
    "giant",
    "pirouette",
    "transition",
    "giant2",
    "flyaway"
   ],
   "notes": [
    {
     "t": "Homophones",
     "b": "Same sound, different spelling and meaning: one/won, sun/son, pair/pear, to/too/two, their/there. Read the whole sentence to pick the right one."
    },
    {
     "t": "Context clues",
     "b": "Look around a new word for a definition, a synonym, an antonym or an example."
    },
    {
     "t": "Signal words",
     "b": "'and', 'also', 'or' often point to a SIMILAR meaning. 'unlike', 'however', 'although' often point to an OPPOSITE meaning."
    },
    {
     "t": "Claim + evidence",
     "b": "A claim is what the author wants you to believe. Reasons explain why, and evidence (facts, numbers, examples) proves it. Opinions are not evidence."
    },
    {
     "t": "Clauses",
     "b": "A main clause can stand alone. A subordinate clause starts with a word like because, although, if, until or once, and can't stand alone."
    },
    {
     "t": "Commas",
     "b": "Compound: main clause, + FANBOYS + main clause. Complex: put a comma after the subordinate clause when it comes FIRST."
    }
   ],
   "questions": [
    {
     "q": "Choose the word that fits: “Aniston ___ first place on the bars.”",
     "choices": [
      "one",
      "won",
      "own",
      "wan"
     ],
     "a": 1,
     "hint": "Is this word a number, or does it mean 'came out the winner'?",
     "steps": [
      "'one' is the number 1.",
      "'won' is the past tense of win.",
      "She came out the winner, so we need the 'win' word.",
      "Answer: won ✔"
     ],
     "explain": "'Won' means she was the winner; 'one' is a number."
    },
    {
     "q": "“Unlike her jittery teammate, Mia felt serene before the meet.” What does serene mean?",
     "choices": [
      "nervous",
      "calm",
      "angry",
      "sleepy"
     ],
     "a": 1,
     "hint": "Find the signal word. Does it point to a similar or an opposite meaning?",
     "steps": [
      "The signal word is 'Unlike', so it is an antonym clue.",
      "Mia is the OPPOSITE of her jittery (shaky, nervous) teammate.",
      "The opposite of nervous is calm.",
      "serene = calm ✔"
     ],
     "explain": "'Unlike' signals an opposite: serene means calm."
    },
    {
     "q": "“The gymnast bounced off a springboard, a bouncy board that launches you into the air.” Which kind of context clue is this?",
     "choices": [
      "antonym",
      "example",
      "definition",
      "synonym"
     ],
     "a": 2,
     "hint": "Look at the words right after the comma. What do they tell you?",
     "steps": [
      "After the comma, the sentence explains exactly what a springboard IS.",
      "Telling the meaning of a word is a definition.",
      "There is no opposite or list of examples.",
      "Answer: definition clue ✔"
     ],
     "explain": "The sentence tells what a springboard is, so it's a definition clue."
    },
    {
     "q": "Which signal word usually tells you that an OPPOSITE meaning is coming?",
     "choices": [
      "also",
      "and",
      "however",
      "or"
     ],
     "a": 2,
     "hint": "Three of these words connect similar ideas. Which one turns the idea around?",
     "steps": [
      "'also' and 'and' add something similar.",
      "'or' often gives another word with the same meaning.",
      "'however' shows a contrast, or a change in direction.",
      "Answer: however ✔"
     ],
     "explain": "'However' signals contrast, so an opposite meaning is coming."
    },
    {
     "q": "An author claims, “Every gymnast should warm up before practice.” Which sentence is the best EVIDENCE for this claim?",
     "choices": [
      "Warming up is my favorite part of the day.",
      "In one study of young athletes, those who warmed up had fewer pulled muscles.",
      "Leotards come in many bright colors.",
      "Some gyms have blue floor mats."
     ],
     "a": 1,
     "hint": "Evidence is a fact or result that PROVES the claim. It is not just someone's feelings.",
     "steps": [
      "Choice A is an opinion: it tells a feeling.",
      "Choices C and D are facts, but they are not about warming up.",
      "Choice B is a fact about warm-ups and injuries.",
      "It supports the claim, so the answer is B ✔"
     ],
     "explain": "A study result about warm-ups and fewer injuries is evidence for the claim."
    },
    {
     "q": "“Although the beam was narrow, Zoe stayed balanced.” Which part is the SUBORDINATE clause?",
     "choices": [
      "Zoe stayed balanced",
      "Although the beam was narrow",
      "the beam",
      "stayed balanced"
     ],
     "a": 1,
     "hint": "Find the part that starts with a subordinating conjunction and can't stand alone.",
     "steps": [
      "'Zoe stayed balanced' makes sense alone, so it is the main clause.",
      "'Although the beam was narrow…' leaves you waiting for more.",
      "It starts with 'Although', a subordinating conjunction.",
      "Answer: Although the beam was narrow ✔"
     ],
     "explain": "The clause that starts with 'Although' is subordinate."
    },
    {
     "q": "Which compound sentence is punctuated correctly?",
     "choices": [
      "The crowd cheered and, the judges smiled.",
      "The crowd, cheered and the judges smiled.",
      "The crowd cheered, and the judges smiled.",
      "The crowd cheered the judges, smiled."
     ],
     "a": 2,
     "hint": "Two main clauses joined by a FANBOYS word need a comma placed BEFORE the conjunction.",
     "steps": [
      "Main clause 1: The crowd cheered. Main clause 2: the judges smiled.",
      "They are joined by 'and', which is a FANBOYS word.",
      "The comma goes right before 'and'.",
      "Answer: The crowd cheered, and the judges smiled. ✔"
     ],
     "explain": "Use a comma before the FANBOYS conjunction: “cheered, and”."
    },
    {
     "q": "Which complex sentence is punctuated correctly?",
     "choices": [
      "Once the music starts she, begins her routine.",
      "Once the music starts, she begins her routine.",
      "Once, the music starts she begins her routine.",
      "Once the music, starts she begins her routine."
     ],
     "a": 1,
     "hint": "When the subordinate clause comes first, put the comma at the END of that clause.",
     "steps": [
      "The subordinate clause is 'Once the music starts'.",
      "It comes first in the sentence.",
      "So the comma goes right after 'starts'.",
      "Answer: Once the music starts, she begins her routine. ✔"
     ],
     "explain": "Put a comma after a subordinate clause that comes first."
    }
   ]
  },
  {
   "key": "beam",
   "name": "Balance Beam",
   "subject": "Science",
   "topic": "Circuits: closed, open & switches",
   "icon": "assets/beam.webp",
   "color": "#a98bff",
   "skills": [
    "Relevé Pose",
    "Split Leap",
    "Full Turn",
    "Handstand",
    "Cartwheel",
    "Split Jump",
    "Back Walkover",
    "Salto Dismount"
   ],
   "anims": [
    "releve",
    "leap",
    "pirouette",
    "handstand",
    "cartwheel",
    "splitjump",
    "walkover",
    "dismount"
   ],
   "notes": [
    {
     "t": "Circuit recipe",
     "b": "Every circuit needs a power source (like a battery), wires (a path) and a device that uses the energy (like a bulb)."
    },
    {
     "t": "Closed circuit",
     "b": "A closed circuit is a complete loop with no gaps. Electric current flows, and the bulb lights."
    },
    {
     "t": "Open circuit",
     "b": "An open circuit has a gap or break, such as a loose wire or an open switch. The current stops, and the bulb goes out."
    },
    {
     "t": "Switches",
     "b": "A switch is a gate in the path. ON closes the circuit and OFF opens it."
    },
    {
     "t": "Battery energy",
     "b": "A battery changes stored chemical energy into electrical energy. The bulb then changes electrical energy into light and heat."
    },
    {
     "t": "Evidence",
     "b": "Use what you observe: bulb ON → closed circuit; bulb OFF → open circuit (or a dead battery)."
    }
   ],
   "questions": [
    {
     "q": "Which set has the three parts every circuit needs?",
     "choices": [
      "a magnet, water and a bulb",
      "a power source, wires and a device",
      "only a light bulb",
      "a switch and nothing else"
     ],
     "a": 1,
     "hint": "Think: where does the energy come from, how does it travel, and what uses it?",
     "steps": [
      "The energy comes from a power source, like a battery.",
      "Wires make the path it travels along.",
      "A device, such as a bulb, uses the energy.",
      "Answer: power source, wires and a device ✔"
     ],
     "explain": "A circuit needs a power source, wires and a device."
    },
    {
     "q": "The scoreboard bulb is glowing. What does that tell you about its circuit?",
     "choices": [
      "It is open, with a gap in the path.",
      "It has no battery.",
      "It is closed: a complete loop.",
      "The wires are cut."
     ],
     "a": 2,
     "hint": "Current can only flow through a path with no gaps.",
     "steps": [
      "The bulb is ON, so current must be flowing.",
      "Current flows only in a complete path.",
      "A complete path is a closed circuit.",
      "Answer: closed ✔"
     ],
     "explain": "A glowing bulb is evidence of a closed circuit."
    },
    {
     "q": "During a test, one wire pops off the battery. What happens to the bulb?",
     "choices": [
      "It gets brighter.",
      "It turns off because the circuit is now open.",
      "It changes color.",
      "Nothing changes."
     ],
     "a": 1,
     "hint": "Did the loose wire make a gap in the loop?",
     "steps": [
      "The wire came off, so now there is a gap.",
      "A gap makes the circuit open.",
      "With no complete path, the current stops.",
      "The bulb turns off ✔"
     ],
     "explain": "A loose wire opens the circuit, so the bulb goes out."
    },
    {
     "q": "What is the job of a switch in a circuit?",
     "choices": [
      "It makes brand-new electricity.",
      "It opens or closes the path to control the current.",
      "It stores water.",
      "It turns light into sound."
     ],
     "a": 1,
     "hint": "Think of a switch as a gate on the path.",
     "steps": [
      "A switch does not create energy. The battery supplies it.",
      "Switch ON connects the path, so the circuit is closed.",
      "Switch OFF breaks the path, so the circuit is open.",
      "So it controls the flow ✔"
     ],
     "explain": "A switch opens or closes the circuit."
    },
    {
     "q": "Inside a battery, what energy change happens?",
     "choices": [
      "electrical → chemical",
      "chemical → electrical",
      "light → chemical",
      "sound → electrical"
     ],
     "a": 1,
     "hint": "What kind of energy is STORED in a battery, and what comes out into the wires?",
     "steps": [
      "A battery stores energy in chemicals.",
      "When the circuit closes, the battery sends electrical energy into the wires.",
      "So stored chemical energy becomes electrical energy.",
      "Answer: chemical → electrical ✔"
     ],
     "explain": "A battery changes chemical energy into electrical energy."
    },
    {
     "q": "In a flashlight bulb, electrical energy is changed mostly into…",
     "choices": [
      "chemical energy",
      "sound only",
      "light and heat",
      "nothing at all"
     ],
     "a": 2,
     "hint": "What do you see, and feel, when a bulb is on?",
     "steps": [
      "The bulb glows, so there is light.",
      "A bulb also gets warm, so there is heat.",
      "Electrical energy becomes light and heat.",
      "Answer: light and heat ✔"
     ],
     "explain": "A bulb changes electrical energy into light and heat."
    },
    {
     "q": "Kai says, “My circuit is closed.” Which observation is the BEST evidence?",
     "choices": [
      "The wires are red.",
      "The bulb is glowing.",
      "The battery is brand new.",
      "He built it fast."
     ],
     "a": 1,
     "hint": "Evidence should show whether current is flowing.",
     "steps": [
      "The wire color and build speed don't tell you whether current flows.",
      "A new battery could still be in an open circuit.",
      "A glowing bulb shows that current is flowing.",
      "Best evidence: the bulb is glowing ✔"
     ],
     "explain": "A glowing bulb shows that the circuit is closed."
    },
    {
     "q": "The arena light switch is flipped to OFF. What kind of circuit is it now?",
     "choices": [
      "closed, so the light is on",
      "open, so the light is off",
      "brighter",
      "a battery"
     ],
     "a": 1,
     "hint": "Flipping a switch OFF makes a gap in the path.",
     "steps": [
      "OFF lifts the switch's metal piece, which makes a gap.",
      "A gap makes the circuit open.",
      "With no current, the light is off.",
      "Answer: open, so the light is off ✔"
     ],
     "explain": "Switch OFF opens the circuit, so the light goes off."
    }
   ]
  },
  {
   "key": "floor",
   "name": "Floor Exercise",
   "subject": "Social Studies",
   "topic": "Colonial trade & economic growth",
   "icon": "assets/floor.webp",
   "color": "#ff7ad9",
   "skills": [
    "Opening Pose",
    "Round-off",
    "Back Handspring",
    "Back Tuck",
    "Switch Leap",
    "Layout",
    "Full Twist",
    "Final Pose!"
   ],
   "anims": [
    "salute",
    "roundoff",
    "handspring",
    "tuck",
    "leap",
    "layout",
    "twist",
    "finalpose"
   ],
   "notes": [
    {
     "t": "New England",
     "b": "Rocky soil and cold winters → fishing, shipbuilding and logging (forests for lumber)."
    },
    {
     "t": "Middle Colonies",
     "b": "Furs, iron and lots of grain. Busy ports shipped these goods out."
    },
    {
     "t": "Southern Colonies",
     "b": "Cash crops grown to SELL: tobacco, rice, cotton and indigo (a blue dye)."
    },
    {
     "t": "Jamestown tobacco",
     "b": "John Rolfe grew a milder tobacco at Jamestown. It sold well in England and became Virginia's money crop."
    },
    {
     "t": "Triangular Trade & mercantilism",
     "b": "Mercantilism: colonies sent raw materials to Britain and bought its goods, making Britain rich. Trade routes linked the colonies, Britain and Europe, West Africa and the West Indies. Enslaved Africans were forced across the Atlantic against their will. This was cruel and wrong. Bringing enslaved people into the U.S. was banned in 1808."
    },
    {
     "t": "Market economy",
     "b": "Supply (how much there is) and demand (how much people want) set prices. Sellers try to make a profit, and competition between sellers keeps prices fair. Trade → profit → more jobs, ships and towns = economic growth."
    }
   ],
   "questions": [
    {
     "q": "Which list matches the New England colonies' economy?",
     "choices": [
      "tobacco and rice",
      "furs and iron only",
      "fishing, shipbuilding and logging",
      "cotton and indigo"
     ],
     "a": 2,
     "hint": "Think about rocky soil, cold winters, thick forests and the ocean.",
     "steps": [
      "Rocky soil made big farms hard.",
      "The ocean gave fish, and forests gave lumber.",
      "Lumber was used to build ships.",
      "Answer: fishing, shipbuilding and logging ✔"
     ],
     "explain": "New England: fishing, shipbuilding and logging."
    },
    {
     "q": "Which was NOT a Southern cash crop?",
     "choices": [
      "tobacco",
      "rice",
      "indigo",
      "codfish"
     ],
     "a": 3,
     "hint": "Cash crops are PLANTS grown to sell. Which one isn't a plant?",
     "steps": [
      "Tobacco, rice and indigo are all plants grown on Southern farms.",
      "Codfish is a fish, not a crop.",
      "Fishing belonged to New England.",
      "Answer: codfish ✔"
     ],
     "explain": "Codfish came from New England fishing, not Southern farms."
    },
    {
     "q": "The Middle Colonies traded which group of goods?",
     "choices": [
      "furs, iron and grain",
      "only sugar",
      "gold and silver mines",
      "cotton and indigo"
     ],
     "a": 0,
     "hint": "This region was known for its farms, its forests' animals and its metal.",
     "steps": [
      "Their farms grew lots of grain.",
      "Furs came from trading for animal pelts.",
      "Iron was mined and made into tools.",
      "Answer: furs, iron and grain ✔"
     ],
     "explain": "Middle Colonies: furs, iron and grain."
    },
    {
     "q": "Who grew a tobacco at Jamestown that became a money-making crop?",
     "choices": [
      "John Rolfe",
      "William Penn",
      "George Washington",
      "Ben Franklin"
     ],
     "a": 0,
     "hint": "He was a Jamestown settler, and the crop sold well in England.",
     "steps": [
      "Jamestown, Virginia, needed a way to earn money.",
      "John Rolfe planted a milder kind of tobacco there.",
      "English buyers wanted it.",
      "Answer: John Rolfe ✔"
     ],
     "explain": "John Rolfe's tobacco became Jamestown's cash crop."
    },
    {
     "q": "What was the main idea of mercantilism?",
     "choices": [
      "Colonies could trade with any country they wanted.",
      "Colonies existed to make the home country rich: they sent it raw materials and bought its goods.",
      "No one used money.",
      "The colonies ruled Britain."
     ],
     "a": 1,
     "hint": "Who was supposed to get richer from the colonies?",
     "steps": [
      "Britain controlled colonial trade.",
      "Colonies sent raw materials, like lumber and tobacco, to Britain.",
      "Britain made finished goods and sold them back to the colonies.",
      "That made Britain rich, which was the goal of mercantilism ✔"
     ],
     "explain": "Under mercantilism, colonies helped make the home country wealthy."
    },
    {
     "q": "Which statement about the Triangular Trade is TRUE?",
     "choices": [
      "It only moved goods between two colonies.",
      "Enslaved Africans were forced across the Atlantic against their will, which was cruel and wrong.",
      "It happened in Asia.",
      "Everyone in it was paid fairly."
     ],
     "a": 1,
     "hint": "The routes made a 'triangle' across the Atlantic Ocean. Think about who was forced to travel.",
     "steps": [
      "The routes linked the colonies, Britain and Europe, West Africa and the West Indies.",
      "Ships carried goods, and they also carried enslaved African people who were taken by force.",
      "Enslaved people were not paid and were treated cruelly.",
      "Bringing enslaved people into the U.S. was banned in 1808 ✔"
     ],
     "explain": "Enslaved Africans were taken by force, which was cruel and wrong. Importing enslaved people was banned in 1808."
    },
    {
     "q": "Many colonists want sugar, but only a little sugar arrives at the port. What usually happens to the price?",
     "choices": [
      "It goes up.",
      "It goes down.",
      "It becomes free.",
      "It never changes."
     ],
     "a": 0,
     "hint": "High demand plus low supply means buyers compete for a small amount.",
     "steps": [
      "Demand is high, because lots of people want sugar.",
      "Supply is low, because there is only a little.",
      "Buyers will pay more to get some.",
      "So the price goes up ✔"
     ],
     "explain": "Low supply and high demand make the price go up."
    },
    {
     "q": "How did trade help the colonies' economies grow?",
     "choices": [
      "Trade stopped people from working.",
      "Selling goods earned profit, which paid for more ships, farms, shops and jobs.",
      "Trade made all prices zero.",
      "Only kings could trade."
     ],
     "a": 1,
     "hint": "Follow the money: what happens after a seller makes a profit?",
     "steps": [
      "Colonists sold fish, lumber, grain and crops.",
      "Selling for more than it cost to make or grow earns a profit.",
      "Profit was spent on more ships, land and workers.",
      "More jobs and bigger towns mean economic growth ✔"
     ],
     "explain": "Trade brought profit, and the profit was spent on more ships, farms and jobs, so the economy grew."
    }
   ]
  }
 ]
};
