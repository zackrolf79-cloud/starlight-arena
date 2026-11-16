/* =====================================================================
   WEEK CONTENT FILE — swap this file each week (see README.md).
   Week of Nov 16, 2026 · meet theme: Thunder Mesa Invitational (see themes.md).
   Questions are ORIGINAL AI-made practice written about the same concepts
   as the lessons; none are copied from GVA lessons, quizzes, tests, or
   activity sheets. Hints + coach walk-through come before the answer.
   athleteName is FIRST NAME ONLY (privacy).
   Optional "wrestle" block overrides belt names, moves and opponents.
   ===================================================================== */
window.WEEK = {
 "id": "2026-wk-nov16",
 "title": "Thunder Mesa Invitational",
 "subtitle": "Week of Nov 16 · Grade 5",
 "athleteName": "Aniston",
 "theme": {
  "background": "assets/arena.webp",
  "podium": "assets/podium.webp",
  "gymnast": "assets/gym/starlight-hero.webp",
  "accent": "#ffe566",
  "accent2": "#8b6fff",
  "gold": "#ffd34d",
  "leotard": [
   "#5b3dff",
   "#ffe566",
   "#8b6fff"
  ],
  "hair": "#6b3b1f",
  "skin": "#f3c39b"
 },
 "wrestle": {
  "show": "Thunder Mesa Throwdown",
  "ev": {
   "vault": {
    "name": "Improper Fraction Rumble Championship",
    "moves": [
     "Benchmark Lock-Up",
     "Improper Fraction Shoulder Block",
     "Mixed-to-Improper Crossbody",
     "Quotient-and-Remainder Suplex Toss",
     "Common Denominator Dropkick",
     "Regroup Tuck Flip",
     "Reasonableness Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "bars": {
    "name": "Figurative Slam Championship",
    "moves": [
     "Homonym Lock-Up",
     "Simile Shoulder Block",
     "Metaphor Crossbody",
     "Personification Suplex Toss",
     "Hyperbole Dropkick",
     "Idiom Tuck Flip",
     "Haiku Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "beam": {
    "name": "Energy Surge Championship",
    "moves": [
     "Work-Ability Lock-Up",
     "Mechanical Shoulder Block",
     "Chemical Store Crossbody",
     "Circuit Path Suplex Toss",
     "Conductor Dropkick",
     "Charge-Flow Tuck Flip",
     "Insulator Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "floor": {
    "name": "Liberty Road Championship",
    "moves": [
     "Cotton Gin Lock-Up",
     "Steel Plow Shoulder Block",
     "Bifocal Crossbody",
     "War-Debt Suplex Toss",
     "Proclamation Dropkick",
     "Stamp Act Tuck Flip",
     "Committee Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   }
  },
  "opp": {
   "vault": {
    "name": "The Over-Numerator",
    "tag": "the Top-Heavy Terror",
    "color": "#ffe566",
    "taunts": [
     "My top is BIGGER than my bottom!",
     "You'll never rename this fraction!",
     "Estimates? I never check my work!"
    ],
    "boo": "The Over-Numerator stacks the top too high!"
   },
   "bars": {
    "name": "Literal Lex",
    "tag": "the Figure Freeze",
    "color": "#8b6fff",
    "taunts": [
     "A beehive gym? I only see bees!",
     "No similes in MY ring!",
     "Waiting a million years? I'll start a timer!"
    ],
    "boo": "Literal Lex freezes every figure of speech!"
   },
   "beam": {
    "name": "Insulator Ike",
    "tag": "the Current Blocker",
    "color": "#5ce1ff",
    "taunts": [
     "Rubber grips on EVERY wire!",
     "No path, no power!",
     "Conductors? Banned from this ring!"
    ],
    "boo": "Insulator Ike blocks the current!"
   },
   "floor": {
    "name": "Lord Stamp",
    "tag": "the Taxing Tyrant",
    "color": "#ff6b8a",
    "taunts": [
     "A tax stamp on EVERY move!",
     "No representation for you!",
     "Stay east of the ropes — I proclaimed it!"
    ],
    "boo": "Lord Stamp taxes the ring without a vote!"
   }
  }
 },
 "events": [
  {
   "key": "vault",
   "name": "Vault",
   "subject": "Math",
   "topic": "Estimating, mixed numbers & improper fractions",
   "icon": "assets/vault.webp",
   "color": "#ffe566",
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
     "t": "Benchmark estimates",
     "b": "Before you calculate, round each fraction part to 0, 1/2 or 1. A tiny top (like 1/9) is about 0; a top near half the bottom is about 1/2; a top almost as big as the bottom (like 5/6) is about 1. Then add or subtract the rounded values to check if an exact answer is reasonable."
    },
    {
     "t": "Unlike denominators first",
     "b": "Rewrite fraction parts as equivalent fractions with a common denominator, often the LCM, before you add or subtract."
    },
    {
     "t": "Improper fractions",
     "b": "An improper fraction has a numerator bigger than its denominator, so its value is greater than 1. Example: 17/5 is improper."
    },
    {
     "t": "Mixed → improper",
     "b": "Multiply the denominator by the whole number, add the numerator, and keep the same denominator. 4 3/8 → (8×4)+3 = 35, so 35/8."
    },
    {
     "t": "Improper → mixed",
     "b": "Divide the numerator by the denominator. The quotient is the whole number, the remainder is the new numerator, and the denominator stays the same. 23/5 → 23÷5 = 4 remainder 3 → 4 3/5."
    },
    {
     "t": "A no-regroup path",
     "b": "One way to add or subtract mixed numbers: common denominator, convert both to improper fractions, add or subtract, then convert the result back to a mixed number."
    },
    {
     "t": "Regroup if you stay mixed",
     "b": "If you keep mixed numbers, borrow 1 whole when the top fraction is too small to subtract, or rename a fraction of 1 or more as an extra whole when you add."
    }
   ],
   "questions": [
    {
     "q": "Aniston pours 2 1/9 liters of water and 3 5/6 liters of sports drink into a cooler. About how many liters is that?",
     "choices": [
      "about 4",
      "about 5",
      "about 6",
      "about 8"
     ],
     "a": 2,
     "hint": "Round each fraction part to the benchmark 0, 1/2 or 1, then add the rounded mixed numbers.",
     "steps": [
      "2 1/9: 1/9 is a tiny piece, so this is about 2.",
      "3 5/6: 5/6 is almost a whole, so this is about 4.",
      "2 + 4 = 6.",
      "Estimate: about 6 liters ✔"
     ],
     "explain": "2 1/9 ≈ 2 and 3 5/6 ≈ 4, so the total is about 6 liters."
    },
    {
     "q": "Write 4 3/8 as an improper fraction.",
     "choices": [
      "7/8",
      "32/8",
      "35/8",
      "43/8"
     ],
     "a": 2,
     "hint": "Multiply the denominator by the whole number, then add the numerator. Keep the same denominator.",
     "steps": [
      "Denominator × whole number: 8 × 4 = 32.",
      "Add the numerator: 32 + 3 = 35.",
      "Keep the denominator 8.",
      "4 3/8 = 35/8 ✔"
     ],
     "explain": "4 3/8 = (8×4+3)/8 = 35/8."
    },
    {
     "q": "Write 23/5 as a mixed number.",
     "choices": [
      "5 3/5",
      "4 3/5",
      "3 4/5",
      "4 5/3"
     ],
     "a": 1,
     "hint": "Divide the top by the bottom. The quotient is the whole; the remainder is the new numerator.",
     "steps": [
      "23 ÷ 5 = 4 with a remainder of 3.",
      "The whole number is 4.",
      "The remainder 3 stays over the same denominator 5.",
      "23/5 = 4 3/5 ✔"
     ],
     "explain": "23÷5 = 4 remainder 3, so 23/5 = 4 3/5."
    },
    {
     "q": "What is 3 1/4 − 1 1/2?",
     "choices": [
      "2 1/4",
      "1 3/4",
      "2 3/4",
      "1 1/4"
     ],
     "a": 1,
     "hint": "Use a common denominator of 4. You will need to regroup, because 1/4 is smaller than 1/2.",
     "steps": [
      "1 1/2 = 1 2/4, so the problem is 3 1/4 − 1 2/4.",
      "1/4 is smaller than 2/4, so borrow 1 whole: 3 1/4 → 2 5/4.",
      "2 5/4 − 1 2/4 = 1 3/4.",
      "Check: 1 3/4 + 1 1/2 = 1 3/4 + 1 2/4 = 2 5/4 = 3 1/4 ✔"
     ],
     "explain": "After regrouping, 3 1/4 − 1 1/2 = 1 3/4."
    },
    {
     "q": "What is 1 2/3 + 2 1/4?",
     "choices": [
      "3 3/7",
      "3 11/12",
      "3 1/12",
      "4 1/12"
     ],
     "a": 1,
     "hint": "Find a common denominator for 3 and 4, rewrite, then add. You can convert to improper fractions first if you like.",
     "steps": [
      "LCM of 3 and 4 is 12.",
      "1 2/3 = 1 8/12 = 20/12. 2 1/4 = 2 3/12 = 27/12.",
      "20/12 + 27/12 = 47/12.",
      "47/12 = 3 11/12 ✔"
     ],
     "explain": "1 2/3 + 2 1/4 = 20/12 + 27/12 = 47/12 = 3 11/12."
    },
    {
     "q": "Which step correctly changes a mixed number into an improper fraction?",
     "choices": [
      "Add the numerator and the denominator, and drop the whole number.",
      "Multiply the denominator by the whole number, add the numerator, and keep the denominator.",
      "Multiply the whole number by the numerator only.",
      "Subtract the denominator from the numerator."
     ],
     "a": 1,
     "hint": "Think about 2 1/3. That is two wholes plus 1/3. How many thirds is that?",
     "steps": [
      "Each whole equals the denominator number of pieces: 2 wholes = 6 thirds.",
      "Then add the extra 1 third: 6 + 1 = 7 thirds.",
      "The denominator stays 3, so 2 1/3 = 7/3.",
      "Rule: (denominator × whole) + numerator, same denominator ✔"
     ],
     "explain": "Multiply the denominator by the whole number, add the numerator, and keep the denominator."
    },
    {
     "q": "A floor strip is 6 1/2 yards long. The team uses 3 3/5 yards of it. How much is left?",
     "choices": [
      "2 1/10 yd",
      "3 1/10 yd",
      "2 9/10 yd",
      "3 9/10 yd"
     ],
     "a": 2,
     "hint": "Subtract the mixed numbers. Use tenths, and regroup if the fraction is too small.",
     "steps": [
      "LCM of 2 and 5 is 10.",
      "6 1/2 = 6 5/10 and 3 3/5 = 3 6/10.",
      "5/10 is smaller than 6/10, so borrow: 6 5/10 → 5 15/10.",
      "5 15/10 − 3 6/10 = 2 9/10 yards ✔"
     ],
     "explain": "6 1/2 − 3 3/5 = 2 9/10 yards."
    },
    {
     "q": "What is 5 1/6 − 2 2/3?",
     "choices": [
      "3 1/6",
      "2 1/2",
      "3 1/2",
      "2 5/6"
     ],
     "a": 1,
     "hint": "Rewrite both fraction parts with denominator 6, then subtract. Regroup if you need to.",
     "steps": [
      "2/3 = 4/6, so the problem is 5 1/6 − 2 4/6.",
      "1/6 is smaller than 4/6, so borrow 1 whole: 5 1/6 → 4 7/6.",
      "4 7/6 − 2 4/6 = 2 3/6.",
      "3/6 simplifies to 1/2, so the answer is 2 1/2 ✔"
     ],
     "explain": "5 1/6 − 2 2/3 = 2 3/6 = 2 1/2."
    }
   ]
  },
  {
   "key": "bars",
   "name": "Uneven Bars",
   "subject": "ELA",
   "topic": "Figurative language, homonyms & poetry",
   "icon": "assets/bars.webp",
   "color": "#8b6fff",
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
     "t": "Homonyms",
     "b": "A homonym is spelled and pronounced the same as another word but means something different, like watch (a timepiece) and watch (to look). Use the sentence and the part of speech to pick the meaning. The prefix homo- means “same,” and the root nym means “name.”"
    },
    {
     "t": "Literal vs figurative",
     "b": "Literal language uses a word’s dictionary meaning. Figurative language uses an imaginative comparison or expression, such as calling a busy city a “concrete jungle.”"
    },
    {
     "t": "Simile & metaphor",
     "b": "A simile compares with like or as (“as bright as a spotlight”). A metaphor compares without like or as (“the vault run was a rocket”)."
    },
    {
     "t": "Other figures",
     "b": "Personification gives human traits to nonhuman things. Hyperbole exaggerates. An idiom means something beyond its exact words (“the ball is in your court”). Alliteration repeats beginning consonant sounds. Onomatopoeia imitates a sound (“POOF!”). Imagery appeals to the senses."
    },
    {
     "t": "Poetry parts",
     "b": "Poems are built from lines, and a stanza is a group of lines. Some poems rhyme; some do not. A haiku has three lines with 5, then 7, then 5 syllables."
    },
    {
     "t": "Theme",
     "b": "A poem’s theme is its bigger message. Use word choice, context, and figurative language as evidence when you name the theme."
    },
    {
     "t": "Context & references",
     "b": "Use context clues, roots and affixes, or a dictionary or glossary when a word could mean more than one thing."
    }
   ],
   "questions": [
    {
     "q": "In the sentence “Please watch the floor routine,” what does the homonym watch mean?",
     "choices": [
      "a clock worn on a wrist",
      "look at carefully",
      "a kind of leap",
      "a small boat"
     ],
     "a": 1,
     "hint": "A homonym keeps the same spelling and sound but changes meaning. Use the sentence and the part of speech.",
     "steps": [
      "Here, watch is a verb — an action Aniston is asked to do.",
      "A wristwatch is a noun, a timepiece, which does not fit this sentence.",
      "The action meaning of watch is “look at carefully.”",
      "Answer: look at carefully ✔"
     ],
     "explain": "In this sentence, watch is a verb meaning look at carefully."
    },
    {
     "q": "“The beam was as narrow as a pencil.” What kind of figurative language is this?",
     "choices": [
      "metaphor",
      "simile",
      "onomatopoeia",
      "haiku"
     ],
     "a": 1,
     "hint": "Look for the words like or as. Those are the clue for one type of comparison.",
     "steps": [
      "The sentence compares the beam to a pencil.",
      "It uses the word as, so it is a simile.",
      "A metaphor would compare without like or as.",
      "Answer: simile ✔"
     ],
     "explain": "A comparison that uses like or as is a simile."
    },
    {
     "q": "“The arena lights were diamonds.” This sentence is a…",
     "choices": [
      "simile",
      "metaphor",
      "idiom",
      "stanza"
     ],
     "a": 1,
     "hint": "Is the comparison using like or as, or is it saying one thing is another?",
     "steps": [
      "Lights are being compared to diamonds.",
      "There is no like or as, so it is not a simile.",
      "Saying one thing is another is a metaphor.",
      "Answer: metaphor ✔"
     ],
     "explain": "A metaphor compares unlike things without like or as."
    },
    {
     "q": "“The springboard was shouting for her to go.” Which figurative language is this?",
     "choices": [
      "hyperbole",
      "alliteration",
      "personification",
      "homonym"
     ],
     "a": 2,
     "hint": "Can a springboard really shout? What is being given a human trait?",
     "steps": [
      "A springboard is not a person and cannot actually shout.",
      "Giving a human action or feeling to a nonhuman thing is personification.",
      "The board is “shouting,” a human action.",
      "Answer: personification ✔"
     ],
     "explain": "Personification gives human traits to a nonhuman thing."
    },
    {
     "q": "“I’ve been waiting in the gym for a million years!” This is an example of…",
     "choices": [
      "an idiom that means “your turn”",
      "hyperbole",
      "a literal time measurement",
      "a haiku"
     ],
     "a": 1,
     "hint": "Could someone really wait that long? What is the author doing to the waiting time?",
     "steps": [
      "A million years is far longer than any real wait in a gym.",
      "The author is exaggerating to show that the wait felt huge.",
      "Exaggeration for effect is hyperbole.",
      "Answer: hyperbole ✔"
     ],
     "explain": "Hyperbole exaggerates — nobody really waits a million years."
    },
    {
     "q": "In “The ball is in your court,” the speaker means “it’s your turn to decide.” This kind of expression is…",
     "choices": [
      "a simile",
      "an idiom",
      "a haiku",
      "literal language"
     ],
     "a": 1,
     "hint": "Do the words mean exactly what they say, or something more?",
     "steps": [
      "There may be no actual ball and no tennis court.",
      "The meaning is “it’s your turn,” which goes beyond the exact words.",
      "An idiom’s meaning is not the literal meaning of its words.",
      "Answer: idiom ✔"
     ],
     "explain": "An idiom means something beyond its literal words."
    },
    {
     "q": "Which description matches a haiku?",
     "choices": [
      "Two rhyming lines only",
      "Three lines with 5, then 7, then 5 syllables",
      "A paragraph of only complete sentences",
      "Any poem that uses a metaphor"
     ],
     "a": 1,
     "hint": "A haiku has a very specific line count and syllable pattern.",
     "steps": [
      "A haiku has exactly three lines.",
      "The syllable counts are 5 in line 1, 7 in line 2, and 5 in line 3.",
      "It does not have to rhyme, and it is not just any metaphor poem.",
      "Answer: 5-7-5 on three lines ✔"
     ],
     "explain": "A haiku has three lines with 5, 7, and 5 syllables."
    },
    {
     "q": "Which sentence uses figurative language?",
     "choices": [
      "The gym lights stay on until 8 p.m.",
      "The chalk is stored on the bottom shelf.",
      "The gym is a buzzing beehive before the meet.",
      "Aniston arrived at 3:15."
     ],
     "a": 2,
     "hint": "Literal language states the exact fact. Figurative language paints a picture or makes a comparison.",
     "steps": [
      "A, B, and D give exact facts: a time, a place, or a clock time.",
      "C compares the busy gym to a beehive without like or as.",
      "That imaginative comparison is figurative (a metaphor).",
      "Answer: The gym is a buzzing beehive before the meet. ✔"
     ],
     "explain": "Calling the gym a buzzing beehive is figurative language; the others are literal facts."
    }
   ]
  },
  {
   "key": "beam",
   "name": "Balance Beam",
   "subject": "Science",
   "topic": "Energy forms, electricity, circuits & conductors",
   "icon": "assets/beam.webp",
   "color": "#5ce1ff",
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
     "t": "Energy",
     "b": "Energy is the ability to do work — the power that causes change or motion. It shows up in many forms, including light, heat, sound, electrical, chemical, and mechanical."
    },
    {
     "t": "Mechanical energy",
     "b": "Mechanical energy is the energy of motion or position. A vault run, a swinging bar routine, and a rolling ball all involve mechanical energy."
    },
    {
     "t": "Chemical & electrical",
     "b": "A battery stores chemical energy and can change it into electrical energy when a circuit is closed. Electricity is the presence and flow of electric charges. Flowing electricity can make devices work."
    },
    {
     "t": "Light, heat, sound",
     "b": "A glowing bulb changes electrical energy mostly into light and heat. A speaker changes electrical energy into sound. These are still forms of energy, just in a different form."
    },
    {
     "t": "Circuit recipe",
     "b": "A circuit is a path for electrical charges. It needs a power source, wires, and a device that uses the current."
    },
    {
     "t": "Conductors",
     "b": "A conductor lets electricity move through it easily. Iron, steel, copper, and aluminum are conductors. Rubber, wood, glass, and many plastics are poor conductors (insulators)."
    }
   ],
   "questions": [
    {
     "q": "Energy is best defined as…",
     "choices": [
      "anything that takes up space",
      "the ability to do work — the power that causes change or motion",
      "only the light from the sun",
      "a kind of metal"
     ],
     "a": 1,
     "hint": "Think about what energy allows objects and people to do.",
     "steps": [
      "Energy is not a metal, and it is more than just sunlight.",
      "Energy is what lets things move, heat up, light up, or change.",
      "That idea is often stated as “the ability to do work.”",
      "Answer: the ability to do work ✔"
     ],
     "explain": "Energy is the ability to do work — the power that causes change or motion."
    },
    {
     "q": "Aniston sprints down the vault runway. Which form of energy is this mostly an example of?",
     "choices": [
      "chemical energy stored in a battery",
      "mechanical energy",
      "sound energy only",
      "no energy at all"
     ],
     "a": 1,
     "hint": "Which form is the energy of motion?",
     "steps": [
      "A sprint is motion down the runway.",
      "The energy of motion (and position) is mechanical energy.",
      "A battery’s stored energy would be chemical, which is not the best match here.",
      "Answer: mechanical energy ✔"
     ],
     "explain": "A running vault approach is mechanical energy — the energy of motion."
    },
    {
     "q": "A battery in a scoreboard mainly stores which kind of energy?",
     "choices": [
      "sound energy",
      "chemical energy",
      "light energy only",
      "wind energy"
     ],
     "a": 1,
     "hint": "What kind of energy is packed into the materials inside a battery before the circuit is on?",
     "steps": [
      "The energy is stored in the battery’s chemicals.",
      "When the circuit closes, that stored energy can become electrical energy.",
      "So the stored form is chemical energy.",
      "Answer: chemical energy ✔"
     ],
     "explain": "A battery stores chemical energy."
    },
    {
     "q": "When a scoreboard bulb is glowing, electrical energy is changed mostly into…",
     "choices": [
      "chemical energy only",
      "light and heat",
      "mechanical energy only",
      "nothing"
     ],
     "a": 1,
     "hint": "What do you see, and what do you feel, when a bulb has been on?",
     "steps": [
      "The bulb gives off light, so you can see it glow.",
      "A lit bulb also gets warm, so some energy is heat.",
      "Electrical energy becomes light and heat.",
      "Answer: light and heat ✔"
     ],
     "explain": "A glowing bulb changes electrical energy mostly into light and heat."
    },
    {
     "q": "Which set has the three parts a circuit needs?",
     "choices": [
      "a magnet, water, and a switch only",
      "a power source, wires, and a device that uses current",
      "only a light bulb",
      "rubber gloves and a wooden stick"
     ],
     "a": 1,
     "hint": "Where does the energy come from, how does it travel, and what uses it?",
     "steps": [
      "A power source, such as a battery, supplies the energy.",
      "Wires make the path for the charges.",
      "A device, such as a bulb, uses the current.",
      "Answer: power source, wires, and a device ✔"
     ],
     "explain": "A circuit needs a power source, wires, and a device that uses current."
    },
    {
     "q": "Which list is made of electrical conductors?",
     "choices": [
      "rubber, wood, glass, and plastic",
      "iron, steel, copper, and aluminum",
      "paper, cloth, and chalk only",
      "air and foam mats"
     ],
     "a": 1,
     "hint": "A conductor lets electric charges move through it easily. Which materials are metals often used as wires or paths?",
     "steps": [
      "Iron, steel, copper, and aluminum let electricity move through them easily.",
      "Rubber, wood, glass, and many plastics are poor conductors (insulators).",
      "Wires are often made of copper or another metal.",
      "Answer: iron, steel, copper, and aluminum ✔"
     ],
     "explain": "Iron, steel, copper, and aluminum are conductors."
    },
    {
     "q": "Electricity is best described as…",
     "choices": [
      "the presence and flow of electric charges",
      "only the heat from a fireplace",
      "a kind of sound wave",
      "a type of plant energy"
     ],
     "a": 0,
     "hint": "Think about charges that can sit still or move along a path.",
     "steps": [
      "Electric charges can be present on an object.",
      "When those charges flow, they can make a device work.",
      "That presence and flow is electricity.",
      "Answer: presence and flow of electric charges ✔"
     ],
     "explain": "Electricity is the presence and flow of electric charges."
    },
    {
     "q": "Which material would be a poor path for electric current?",
     "choices": [
      "a copper wire",
      "an aluminum post",
      "a steel bolt",
      "a rubber grip on a jump rope"
     ],
     "a": 3,
     "hint": "Which choice is not a metal conductor?",
     "steps": [
      "Copper, aluminum, and steel are conductors.",
      "Rubber does not let electricity move through it easily.",
      "So a rubber grip is a poor path for current.",
      "Answer: a rubber grip ✔"
     ],
     "explain": "Rubber is a poor conductor, so it is a poor path for electric current."
    }
   ]
  },
  {
   "key": "floor",
   "name": "Floor Exercise",
   "subject": "Social Studies",
   "topic": "Colonial inventions & events leading to the Revolution",
   "icon": "assets/floor.webp",
   "color": "#ff6b8a",
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
     "t": "Technology",
     "b": "Technology is using scientific knowledge for practical jobs. New tools can raise productivity — how much work gets done in the same time."
    },
    {
     "t": "Cotton gin (1793)",
     "b": "Eli Whitney’s cotton gin used hooks or wires and a rotating brush to pull sticky seeds from short-staple cotton much faster than by hand. Cotton became more profitable, which helped Northern textile mills but also increased the demand for land and for enslaved labor. Enslavement was cruel and wrong."
    },
    {
     "t": "Steel plow (1837)",
     "b": "John Deere’s curved steel plow worked better than wood or iron plows in sticky Midwestern soil. Soil did not cling as much, so farmers could plow more rows more quickly."
    },
    {
     "t": "Franklin’s inventions",
     "b": "The Franklin stove (1742) used less wood and made more heat with less smoke than an open fireplace. Franklin’s bifocals (1784) put distance lenses on top and near-vision lenses on the bottom, so a person did not have to switch glasses."
    },
    {
     "t": "Debt and taxes",
     "b": "The French and Indian War left Britain in debt. Britain then taxed the colonies to help pay that debt. Colonists protested “taxation without representation” — taxes set in Parliament, where they had no elected voice — and many boycotted British goods."
    },
    {
     "t": "Key laws",
     "b": "The Proclamation of 1763 tried to stop westward settlement beyond the Appalachians. The Sugar Act (1764) taxed imports such as sugar. The Stamp Act (1765) taxed printed items such as newspapers and legal papers. The Townshend Acts (1767) taxed imports including glass, paint, paper, and tea."
    },
    {
     "t": "Resistance grows",
     "b": "Committees of Correspondence shared news so colonies could plan together. After the Boston Tea Party, Britain’s Coercive Acts tried to punish Massachusetts, but the pressure helped unite the colonies instead of isolating them."
    }
   ],
   "questions": [
    {
     "q": "What did Eli Whitney’s cotton gin do?",
     "choices": [
      "It planted corn in neat rows.",
      "It separated sticky seeds from cotton much faster than by hand.",
      "It printed newspapers.",
      "It heated a whole house with less wood."
     ],
     "a": 1,
     "hint": "Think about what made cleaning cotton slow before this machine.",
     "steps": [
      "Short-staple cotton had sticky seeds that were hard to pick out by hand.",
      "The cotton gin used hooks or wires and a brush to pull the seeds out quickly.",
      "Faster cleaning made cotton much more profitable.",
      "It also increased the demand for land and for enslaved labor, which was cruel and wrong. Answer: it separated seeds from cotton ✔"
     ],
     "explain": "The cotton gin separated seeds from cotton much faster than by hand."
    },
    {
     "q": "Why was John Deere’s steel plow especially useful in the Midwest?",
     "choices": [
      "It printed legal papers faster.",
      "Sticky soil did not cling to the steel as much, so farmers could plow more quickly.",
      "It cleaned cotton seeds.",
      "It was used only on ships."
     ],
     "a": 1,
     "hint": "Wood and iron plows had a problem in sticky soil. What did steel change?",
     "steps": [
      "Midwestern soil could cling to older wood or iron plows and slow the work.",
      "The curved steel plow shed that soil more easily.",
      "Farmers could plow more rows in less time.",
      "Answer: soil did not cling as much, so plowing was faster ✔"
     ],
     "explain": "Deere’s steel plow shed sticky Midwestern soil, so farming went faster."
    },
    {
     "q": "What was special about Benjamin Franklin’s bifocal lenses?",
     "choices": [
      "They were only for seeing far away.",
      "Distance lenses were on top and near-vision lenses were on the bottom, so a person did not have to switch glasses.",
      "They were used to plow fields.",
      "They heated a room."
     ],
     "a": 1,
     "hint": "Bifocals put two kinds of lenses into one pair of glasses.",
     "steps": [
      "The top part was for seeing far away.",
      "The bottom part was for seeing close up, such as when reading.",
      "That way a person did not have to keep changing glasses.",
      "Answer: distance on top, near vision on the bottom ✔"
     ],
     "explain": "Bifocals combined distance (top) and near-vision (bottom) lenses in one pair."
    },
    {
     "q": "After the French and Indian War, why did Britain start taxing the colonies more heavily?",
     "choices": [
      "The war had left Britain in debt, and leaders wanted the colonies to help pay it.",
      "Britain had banned all trade forever.",
      "The colonies had asked for higher taxes.",
      "France was now ruling the colonies."
     ],
     "a": 0,
     "hint": "Wars are expensive. Who was left with a large bill?",
     "steps": [
      "Britain and France had fought a costly war in North America.",
      "Britain won, but it was left with a large debt.",
      "New colonial taxes were meant to help pay that debt.",
      "Answer: Britain was in debt ✔"
     ],
     "explain": "Britain taxed the colonies more because the war had left it in debt."
    },
    {
     "q": "What did the Proclamation of 1763 try to do?",
     "choices": [
      "Give every colonist a seat in Parliament.",
      "Restrict westward settlement beyond the Appalachian Mountains.",
      "Repeal all taxes on tea.",
      "Build textile mills in the South."
     ],
     "a": 1,
     "hint": "Think about a line along the Appalachian Mountains and why Britain wanted colonists to stay east of it.",
     "steps": [
      "Britain wanted to avoid new conflicts farther west.",
      "The proclamation told colonists not to settle beyond the Appalachians.",
      "Many colonists disliked the limit and some ignored it.",
      "Answer: it restricted westward settlement ✔"
     ],
     "explain": "The Proclamation of 1763 restricted settlement west of the Appalachians."
    },
    {
     "q": "The Stamp Act taxed which kind of goods?",
     "choices": [
      "Only barrels of fish",
      "Printed items such as newspapers, legal papers, pamphlets, and playing cards",
      "Only Midwestern steel plows",
      "Only cotton shipped to mills"
     ],
     "a": 1,
     "hint": "The name is a clue: a stamp was required on certain papers.",
     "steps": [
      "A tax stamp had to appear on many printed items.",
      "That list included newspapers, legal papers, pamphlets, almanacs, and cards.",
      "It was not a tax on plows or fish.",
      "Answer: printed items ✔"
     ],
     "explain": "The Stamp Act taxed printed items such as newspapers and legal papers."
    },
    {
     "q": "What did colonists mean by “taxation without representation”?",
     "choices": [
      "They enjoyed paying any tax Parliament chose.",
      "They were being taxed by Britain but had no elected voice in Parliament.",
      "They had more votes than the King.",
      "All taxes had already been repealed."
     ],
     "a": 1,
     "hint": "Representation means having someone who speaks and votes for you in the lawmaking body.",
     "steps": [
      "Parliament in Britain passed the new tax laws.",
      "The colonies did not elect members of that Parliament.",
      "Colonists argued it was unfair to be taxed with no voice there.",
      "Answer: taxed with no elected voice in Parliament ✔"
     ],
     "explain": "“Taxation without representation” meant taxes set in Parliament, where colonists had no elected voice."
    },
    {
     "q": "How did the Committees of Correspondence help the colonies?",
     "choices": [
      "They collected the Stamp Act tax for Britain.",
      "They exchanged information so colonies could coordinate resistance.",
      "They built Franklin stoves.",
      "They enforced the Proclamation line."
     ],
     "a": 1,
     "hint": "A committee that corresponds is one that writes and shares news.",
     "steps": [
      "The committees sent letters and news from colony to colony.",
      "Sharing information helped them plan boycotts and other resistance together.",
      "They were not a tax office and they did not build stoves.",
      "Answer: they exchanged information to coordinate resistance ✔"
     ],
     "explain": "Committees of Correspondence shared news so the colonies could plan resistance together."
    }
   ]
  }
 ]
};
