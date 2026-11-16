/* =====================================================================
   WEEK CONTENT FILE — swap this file each week (see README.md).
   Week of Nov 9, 2026 · meet theme: Comet Trail Classic (see themes.md).
   Questions are ORIGINAL AI-made practice written about the same concepts
   as the lessons; none are copied from GVA lessons, quizzes, tests, or
   activity sheets. Hints + coach walk-through come before the answer.
   athleteName is FIRST NAME ONLY (privacy).
   Optional "wrestle" block overrides belt names, moves and opponents.
   ===================================================================== */
window.WEEK = {
 "id": "2026-wk-nov09",
 "title": "Comet Trail Classic",
 "subtitle": "Week of Nov 9 · Grade 5",
 "athleteName": "Aniston",
 "theme": {
  "background": "assets/arena.webp",
  "podium": "assets/podium.webp",
  "gymnast": "assets/gym/starlight-hero.webp",
  "accent": "#ff8c42",
  "accent2": "#5ce1ff",
  "gold": "#ffd34d",
  "leotard": [
   "#ff8c42",
   "#2a6fff",
   "#5ce1ff"
  ],
  "hair": "#6b3b1f",
  "skin": "#f3c39b"
 },
 "wrestle": {
  "show": "Comet Crash Throwdown",
  "ev": {
   "vault": {
    "name": "Mixed Number Mayhem Championship",
    "moves": [
     "Unlike Denominator Lock-Up",
     "LCM Shoulder Block",
     "Equivalent Fraction Crossbody",
     "Regroup Suplex Toss",
     "Mixed Number Dropkick",
     "Common Denominator Tuck Flip",
     "Borrow-a-Whole Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "bars": {
    "name": "Author's Arena Championship",
    "moves": [
     "Purpose Lock-Up",
     "Homophone Shoulder Block",
     "Series Comma Crossbody",
     "Claim & Evidence Suplex Toss",
     "Direct Address Dropkick",
     "Root & Affix Tuck Flip",
     "Expository Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "beam": {
    "name": "Static Shock Championship",
    "moves": [
     "Charge Lock-Up",
     "Attract Shoulder Block",
     "Repel Crossbody",
     "Static Spark Suplex Toss",
     "Neutral Pull Dropkick",
     "Lightning Tuck Flip",
     "Repeated Trials Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   },
   "floor": {
    "name": "Charter Clash Championship",
    "moves": [
     "Compact Lock-Up",
     "Burgess Shoulder Block",
     "Indirect Rule Crossbody",
     "Democracy Suplex Toss",
     "Town Meeting Dropkick",
     "Petition Tuck Flip",
     "Self-Government Moonsault",
     "Top-Rope Cheetah Pounce!"
    ]
   }
  },
  "opp": {
   "vault": {
    "name": "Regroup Rex",
    "tag": "the Borrow Bandit",
    "color": "#ff8c42",
    "taunts": [
     "Your fraction is too small — better borrow!",
     "I scramble every mixed number!",
     "No common denominator for YOU!"
    ],
    "boo": "Regroup Rex steals a whole number!"
   },
   "bars": {
    "name": "The Purpose Pirate",
    "tag": "the Claim Crasher",
    "color": "#5ce1ff",
    "taunts": [
     "Inform? Persuade? Entertain? I'll confuse them all!",
     "My claims need NO evidence!",
     "I'll skip every comma in the series!"
    ],
    "boo": "The Purpose Pirate buries the author's claim!"
   },
   "beam": {
    "name": "Static Stinger",
    "tag": "the Charge Charger",
    "color": "#ffd34d",
    "taunts": [
     "Like charges — REPEL!",
     "I'll shock your whole routine!",
     "One trial is enough… trust me!"
    ],
    "boo": "Static Stinger builds a huge charge!"
   },
   "floor": {
    "name": "King Absolute",
    "tag": "the Autocrat",
    "color": "#ff7ad9",
    "taunts": [
     "No elections in MY colony!",
     "Burn the Compact — I make the laws!",
     "Burgesses? Banished!"
    ],
    "boo": "King Absolute cancels the vote!"
   }
  }
 },
 "events": [
  {
   "key": "vault",
   "name": "Vault",
   "subject": "Math",
   "topic": "Adding & subtracting mixed numbers with unlike denominators",
   "icon": "assets/vault.webp",
   "color": "#ff8c42",
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
     "t": "Mixed numbers",
     "b": "A mixed number has a whole-number part plus a fraction part, like 2 3/5. Add (or subtract) the wholes and the fractions separately after the fractions share a denominator."
    },
    {
     "t": "Unlike denominators",
     "b": "You can only add or subtract fraction pieces that are the same size. Rewrite each fraction as an equivalent fraction with a common denominator first."
    },
    {
     "t": "LCM shortcut",
     "b": "The least common multiple of the denominators is the smallest common denominator. List multiples, or multiply the denominators (that works, but may make bigger numbers)."
    },
    {
     "t": "Equivalent fractions",
     "b": "Multiply top AND bottom by the same number: 1/2 = 3/6, 2/3 = 8/12."
    },
    {
     "t": "Regroup when adding",
     "b": "If the fraction parts add up to 1 or more, regroup: 5/6 + 5/6 = 10/6 = 1 4/6, then add that extra 1 to the wholes."
    },
    {
     "t": "Regroup when subtracting",
     "b": "If the top fraction is too small to subtract, borrow 1 whole from the whole-number part and rewrite it as an improper fraction with the common denominator."
    }
   ],
   "questions": [
    {
     "q": "What is 2 1/3 + 1 1/4?",
     "choices": [
      "3 2/7",
      "3 7/12",
      "3 1/12",
      "4 1/12"
     ],
     "a": 1,
     "hint": "Find a common denominator for 3 and 4, rewrite both fractions, then add wholes and fractions.",
     "steps": [
      "LCM of 3 and 4 is 12.",
      "1/3 = 4/12 and 1/4 = 3/12.",
      "Wholes: 2 + 1 = 3. Fractions: 4/12 + 3/12 = 7/12.",
      "Answer: 3 7/12 ✔"
     ],
     "explain": "2 1/3 + 1 1/4 = 3 7/12."
    },
    {
     "q": "Aniston vaults for 1 5/6 minutes, then rests for 2 1/2 minutes. How long is that altogether?",
     "choices": [
      "3 2/3 min",
      "3 7/8 min",
      "4 1/3 min",
      "3 5/8 min"
     ],
     "a": 2,
     "hint": "Add the mixed numbers. First make sixths and halves into the same size pieces.",
     "steps": [
      "LCM of 6 and 2 is 6.",
      "1/2 = 3/6, so 2 1/2 = 2 3/6.",
      "Wholes: 1 + 2 = 3. Fractions: 5/6 + 3/6 = 8/6.",
      "8/6 = 1 2/6, so regroup: 3 + 1 2/6 = 4 2/6 = 4 1/3 ✔"
     ],
     "explain": "1 5/6 + 2 1/2 = 4 1/3 minutes after regrouping."
    },
    {
     "q": "What is the least common multiple (LCM) of 8 and 6?",
     "choices": [
      "14",
      "48",
      "24",
      "16"
     ],
     "a": 2,
     "hint": "List multiples of each number and find the smallest one they share.",
     "steps": [
      "Multiples of 8: 8, 16, 24, 32…",
      "Multiples of 6: 6, 12, 18, 24…",
      "The smallest number in both lists is 24.",
      "LCM = 24 ✔"
     ],
     "explain": "The LCM of 8 and 6 is 24."
    },
    {
     "q": "What is 5/6 − 1/4?",
     "choices": [
      "4/2",
      "1/2",
      "7/12",
      "3/8"
     ],
     "a": 2,
     "hint": "Rewrite both fractions with a common denominator, then subtract the tops.",
     "steps": [
      "LCM of 6 and 4 is 12.",
      "5/6 = 10/12 and 1/4 = 3/12.",
      "10/12 − 3/12 = 7/12.",
      "Check: 7/12 + 3/12 = 10/12 = 5/6 ✔"
     ],
     "explain": "5/6 − 1/4 = 7/12."
    },
    {
     "q": "What is 4 2/5 − 1 1/2?",
     "choices": [
      "3 1/10",
      "2 9/10",
      "3 9/10",
      "2 1/10"
     ],
     "a": 1,
     "hint": "Use a common denominator for fifths and halves. Will you need to regroup?",
     "steps": [
      "LCM of 5 and 2 is 10.",
      "4 2/5 = 4 4/10 and 1 1/2 = 1 5/10.",
      "4/10 is smaller than 5/10, so borrow 1 whole: 4 4/10 → 3 14/10.",
      "3 14/10 − 1 5/10 = 2 9/10 ✔"
     ],
     "explain": "After regrouping, 4 2/5 − 1 1/2 = 2 9/10."
    },
    {
     "q": "Which step comes FIRST when you add 3/5 + 1/4?",
     "choices": [
      "Add the tops: 3 + 1 = 4",
      "Find a common denominator for 5 and 4",
      "Subtract the bottoms",
      "Multiply the tops only"
     ],
     "a": 1,
     "hint": "You can only add fraction pieces that are the same size.",
     "steps": [
      "Fifths and fourths are different sizes.",
      "So rewrite both with a common denominator first.",
      "LCM of 5 and 4 is 20.",
      "First step: find a common denominator ✔"
     ],
     "explain": "First find a common denominator, then rewrite and add."
    },
    {
     "q": "What is 3/8 + 1/3?",
     "choices": [
      "4/11",
      "17/24",
      "4/24",
      "1/2"
     ],
     "a": 1,
     "hint": "Find the LCM of 8 and 3, rewrite, then add the numerators.",
     "steps": [
      "LCM of 8 and 3 is 24.",
      "3/8 = 9/24 and 1/3 = 8/24.",
      "9/24 + 8/24 = 17/24.",
      "17/24 is already simplified ✔"
     ],
     "explain": "3/8 + 1/3 = 17/24."
    },
    {
     "q": "A beam warm-up lasts 5 1/4 minutes. Aniston has already practiced for 2 2/3 minutes. How much time is left?",
     "choices": [
      "3 5/12 min",
      "2 7/12 min",
      "3 1/12 min",
      "2 5/12 min"
     ],
     "a": 1,
     "hint": "Subtract the mixed numbers. Use twelfths, and regroup if the fraction is too small.",
     "steps": [
      "LCM of 4 and 3 is 12.",
      "5 1/4 = 5 3/12 and 2 2/3 = 2 8/12.",
      "3/12 < 8/12, so borrow: 5 3/12 → 4 15/12.",
      "4 15/12 − 2 8/12 = 2 7/12 ✔"
     ],
     "explain": "5 1/4 − 2 2/3 = 2 7/12 minutes left."
    }
   ]
  },
  {
   "key": "bars",
   "name": "Uneven Bars",
   "subject": "ELA",
   "topic": "Author's purpose, commas, word study & roots",
   "icon": "assets/bars.webp",
   "color": "#5ce1ff",
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
     "t": "Author's purpose",
     "b": "Why did the author write it? To inform (teach facts), to persuade (change your mind), or to entertain (tell a fun story)."
    },
    {
     "t": "Perspective & claim",
     "b": "Perspective is the author's attitude or way of thinking. A claim is the point the author wants to prove, backed by facts and reasons."
    },
    {
     "t": "Homophones",
     "b": "Words that sound alike but are spelled differently: their/there/they're, to/too/two. Use context clues to pick the right spelling."
    },
    {
     "t": "Comma jobs",
     "b": "Use commas to separate items in a series; after an introductory element; and to set off yes/no, tag questions, and direct address (calling someone by name)."
    },
    {
     "t": "Conjunctions",
     "b": "Coordinating conjunctions (FANBOYS) join two main clauses. Subordinating conjunctions (because, although, if…) join a main clause to a dependent clause."
    },
    {
     "t": "Roots & affixes",
     "b": "pro- means moving forward; spec/spect means to look; multi- means many; -ic and -ous mean 'having the qualities of.' Use them to unlock unfamiliar words."
    },
    {
     "t": "Expository writing",
     "b": "Introduction states the controlling idea, body paragraphs support it with evidence, and the conclusion wraps it up."
    }
   ],
   "questions": [
    {
     "q": "A short article lists facts about New York City's subway and how many riders it carries each day. What is the author's MAIN purpose?",
     "choices": [
      "to persuade readers to move to New York",
      "to entertain with a silly subway story",
      "to inform readers with facts about the subway",
      "to sell subway tickets"
     ],
     "a": 2,
     "hint": "Ask: is the writer mostly teaching facts, changing minds, or telling a fun story?",
     "steps": [
      "The article lists facts and numbers about the subway.",
      "That matches informing, not persuading or entertaining.",
      "There is no sales pitch or silly plot.",
      "Author's purpose: to inform ✔"
     ],
     "explain": "Listing facts about the subway shows the purpose is to inform."
    },
    {
     "q": "Choose the correct homophone: \"Aniston left _____ gym bag by the bars.\"",
     "choices": [
      "there",
      "their",
      "they're",
      "thair"
     ],
     "a": 1,
     "hint": "Which spelling means 'belonging to them'?",
     "steps": [
      "'there' points to a place.",
      "'they're' means 'they are'.",
      "'their' shows ownership.",
      "The bag belongs to them → their ✔"
     ],
     "explain": "'Their' shows ownership: their gym bag."
    },
    {
     "q": "Which sentence uses commas correctly in a series?",
     "choices": [
      "Aniston packed grips chalk and, a water bottle.",
      "Aniston packed grips, chalk, and a water bottle.",
      "Aniston, packed grips chalk and a water bottle.",
      "Aniston packed, grips chalk, and a water bottle."
     ],
     "a": 1,
     "hint": "Items in a list need commas between them.",
     "steps": [
      "The three items are grips, chalk, and a water bottle.",
      "Put a comma after each item before the last.",
      "A comma also goes before 'and' in a series (Oxford style here).",
      "Answer: Aniston packed grips, chalk, and a water bottle. ✔"
     ],
     "explain": "Separate series items with commas: grips, chalk, and a water bottle."
    },
    {
     "q": "Which sentence correctly sets off an introductory element with a comma?",
     "choices": [
      "After the kip she, casts to handstand.",
      "After the kip, she casts to handstand.",
      "After, the kip she casts to handstand.",
      "After the kip she casts, to handstand."
     ],
     "a": 1,
     "hint": "When an introductory phrase comes first, the comma goes at the END of that phrase.",
     "steps": [
      "The introductory phrase is 'After the kip'.",
      "It comes before the main clause.",
      "So the comma goes right after 'kip'.",
      "Answer: After the kip, she casts to handstand. ✔"
     ],
     "explain": "Put a comma after an introductory phrase: After the kip, …"
    },
    {
     "q": "Which sentence correctly uses a comma with direct address?",
     "choices": [
      "Let's go Aniston, for the dismount!",
      "Let's go, Aniston, for the dismount!",
      "Let's, go Aniston for the dismount!",
      "Let's go Aniston for, the dismount!"
     ],
     "a": 1,
     "hint": "When you call someone by name, set the name off with commas.",
     "steps": [
      "'Aniston' is a direct address — she is being spoken to.",
      "Names used this way are set off with commas.",
      "So commas go before and after Aniston.",
      "Answer: Let's go, Aniston, for the dismount! ✔"
     ],
     "explain": "Set off a name used in direct address with commas."
    },
    {
     "q": "The word spectacular has the root spect. What does spectacular most nearly mean?",
     "choices": [
      "very quiet and hidden",
      "impressive to look at",
      "related to insects",
      "moving backward"
     ],
     "a": 1,
     "hint": "spect/spec means 'to look.' What would 'spectacular' have to do with looking?",
     "steps": [
      "The root spect means to look.",
      "Something spectacular is amazing to look at.",
      "It is not about being quiet or moving backward.",
      "spectacular ≈ impressive to look at ✔"
     ],
     "explain": "spect = to look, so spectacular means impressive to look at."
    },
    {
     "q": "An author claims, \"Every gymnast should stretch before practice.\" Which sentence is the BEST evidence?",
     "choices": [
      "Stretching is my favorite part of the day.",
      "A study of young athletes found fewer pulled muscles after a stretch warm-up.",
      "Leotards come in many colors.",
      "Some gyms play loud music."
     ],
     "a": 1,
     "hint": "Evidence is a fact or result that proves the claim — not just a feeling.",
     "steps": [
      "Choice A is an opinion (a feeling).",
      "Choices C and D are facts, but not about stretching.",
      "Choice B is a study result about stretching and injuries.",
      "Best evidence: the study ✔"
     ],
     "explain": "A study result about fewer injuries supports the stretch claim."
    },
    {
     "q": "The prefix pro- means 'moving forward.' Which word best shows that meaning?",
     "choices": [
      "protest only about the past",
      "progress toward a goal",
      "procrastinate forever",
      "protect by standing still"
     ],
     "a": 1,
     "hint": "Which choice shows something moving ahead?",
     "steps": [
      "pro- = moving forward.",
      "'Progress' means moving ahead toward a goal.",
      "The others do not show forward movement.",
      "Answer: progress toward a goal ✔"
     ],
     "explain": "Progress uses pro- to mean moving forward."
    }
   ]
  },
  {
   "key": "beam",
   "name": "Balance Beam",
   "subject": "Science",
   "topic": "Electrical charges: attract, repel & static",
   "icon": "assets/beam.webp",
   "color": "#ffd34d",
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
     "t": "Charges",
     "b": "Objects can have a positive charge, a negative charge, or be neutral (equal positive and negative). Charge comes from the balance of tiny charged particles in atoms."
    },
    {
     "t": "Attract & repel",
     "b": "Opposite charges attract (pull together). Like charges repel (push apart). This can happen without the objects touching."
    },
    {
     "t": "Static electricity",
     "b": "Rubbing can move negative particles from one surface to another. One object becomes more negative and the other more positive — that imbalance is static electricity."
    },
    {
     "t": "Charged + neutral",
     "b": "A charged object can attract a neutral object without touching it, because it rearranges the charges inside the neutral object."
    },
    {
     "t": "Everyday examples",
     "b": "Shock from a doorknob after walking on carpet, hair standing up after a slide, a rubbed balloon sticking to a wall, and lightning are all static-charge events."
    },
    {
     "t": "Fair tests",
     "b": "A test variable is what you change. An outcome variable is what you measure. A control stays uncharged/unchanged for comparison. Repeat trials so results are more reliable."
    }
   ],
   "questions": [
    {
     "q": "A positively charged balloon is held near a negatively charged scrap of paper. What happens?",
     "choices": [
      "They repel (push apart).",
      "They attract (pull together).",
      "Nothing — charges only work when touching.",
      "They both become neutral instantly."
     ],
     "a": 1,
     "hint": "Remember: opposite charges do what?",
     "steps": [
      "Positive and negative are opposite charges.",
      "Opposite charges attract.",
      "Attraction can happen without contact.",
      "They pull together ✔"
     ],
     "explain": "Opposite charges attract, so the balloon and paper pull together."
    },
    {
     "q": "Two balloons are both rubbed the same way and get the same negative charge. What happens when they are brought close?",
     "choices": [
      "They attract.",
      "They repel.",
      "They stick permanently.",
      "They turn into magnets."
     ],
     "a": 1,
     "hint": "Same (like) charges do what to each other?",
     "steps": [
      "Both balloons are negative — like charges.",
      "Like charges repel (push apart).",
      "They do not need to touch to push apart.",
      "They repel ✔"
     ],
     "explain": "Like charges repel, so the two negative balloons push apart."
    },
    {
     "q": "How does rubbing a balloon on hair often create static electricity?",
     "choices": [
      "It creates brand-new atoms.",
      "It transfers some negative particles from one surface to the other.",
      "It heats the air until it glows.",
      "It turns the balloon into a battery."
     ],
     "a": 1,
     "hint": "Static charge is an imbalance — particles move from one place to another.",
     "steps": [
      "Rubbing moves some negative particles from hair to balloon (or the other way).",
      "One object ends up more negative and the other more positive.",
      "That imbalance is static electricity.",
      "Answer: particles transfer ✔"
     ],
     "explain": "Rubbing transfers charged particles, creating a static imbalance."
    },
    {
     "q": "A charged plastic spoon is held near uncharged pepper flakes (without touching). What can happen?",
     "choices": [
      "Nothing — charged objects never affect neutral ones.",
      "The spoon can attract the neutral pepper.",
      "The pepper becomes a magnet.",
      "The spoon instantly loses all charge."
     ],
     "a": 1,
     "hint": "Can a charged object pull on something that is still neutral?",
     "steps": [
      "A nearby charged object can rearrange charges inside a neutral object.",
      "That rearrangement lets the charged object attract the neutral one.",
      "No contact is required.",
      "The spoon can attract the pepper ✔"
     ],
     "explain": "A charged object can attract a neutral object without contact."
    },
    {
     "q": "Lightning is best described as…",
     "choices": [
      "a permanent magnet between clouds",
      "a sudden transfer of built-up static charge between clouds and ground",
      "boiling rain water",
      "sound waves only"
     ],
     "a": 1,
     "hint": "Think about charge building up, then suddenly moving.",
     "steps": [
      "Charge builds up in clouds (and sometimes the ground).",
      "When the imbalance is huge, charge jumps in a flash.",
      "That jump is a transfer of static electricity.",
      "Lightning = sudden static-charge transfer ✔"
     ],
     "explain": "Lightning is a sudden transfer of built-up static charge."
    },
    {
     "q": "In a balloon-and-cloth experiment, Aniston changes how many times she rubs the balloon and measures how far away it still attracts the cloth. What is the TEST variable?",
     "choices": [
      "how far the cloth is attracted",
      "how many times the balloon is rubbed",
      "the color of the balloon",
      "the room temperature she did not change"
     ],
     "a": 1,
     "hint": "The test variable is the one thing YOU purposely change.",
     "steps": [
      "She changes the number of rubs on purpose.",
      "She measures attraction distance — that is the outcome.",
      "Color and room temperature are not what she changed for the test.",
      "Test variable: number of rubs ✔"
     ],
     "explain": "The test variable is how many times the balloon is rubbed."
    },
    {
     "q": "Why do scientists repeat trials in an experiment about static charge?",
     "choices": [
      "To waste balloons",
      "So one lucky result does not fool you — repeated results are more reliable",
      "Because charges only work on Tuesdays",
      "To change every variable at once"
     ],
     "a": 1,
     "hint": "What if the first try was a fluke?",
     "steps": [
      "One trial might be an accident or a measuring mistake.",
      "Repeating the test checks whether the result happens again.",
      "Matching results make the conclusion stronger.",
      "Repeated trials → more reliable ✔"
     ],
     "explain": "Repeating trials makes conclusions more reliable."
    },
    {
     "q": "After walking across a carpet, Aniston reaches for a metal doorknob and feels a tiny shock. What most likely happened?",
     "choices": [
      "The carpet created a brand-new planet.",
      "She built up static charge that discharged to the metal knob.",
      "The doorknob turned into a battery.",
      "Metal cannot carry charge, so nothing moved."
     ],
     "a": 1,
     "hint": "Carpet friction can charge you up. Metal is a path for charge to jump.",
     "steps": [
      "Walking on carpet can transfer charge to her body (static).",
      "Metal is a conductor, so charge can jump to the knob.",
      "That sudden jump is the shock she feels.",
      "Static charge discharged to the doorknob ✔"
     ],
     "explain": "Carpet rubbing built static charge that discharged to the metal doorknob."
    }
   ]
  },
  {
   "key": "floor",
   "name": "Floor Exercise",
   "subject": "Social Studies",
   "topic": "Colonial governments & early democracy",
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
     "t": "Essential question",
     "b": "How did early colonial governments show democracy? Colonists practiced self-government while still under the English king."
    },
    {
     "t": "Indirect vs direct rule",
     "b": "English colonies often had indirect rule: colonists elected some leaders but stayed loyal to the King and English law. French and Spanish settlements were under direct rule — the King held nearly absolute power (autocratic monarchy)."
    },
    {
     "t": "Mayflower Compact (1620)",
     "b": "A written agreement for fair and equal laws, signed by the men aboard the Mayflower. They elected John Carver as governor and started Plymouth."
    },
    {
     "t": "House of Burgesses (1619)",
     "b": "At Jamestown, Virginia: 22 elected members from 11 settlements. Property-holding males age 21+ voted. They met to decide laws and taxes — an early legislature."
    },
    {
     "t": "Monarchy vs democracy",
     "b": "Monarchy: one ruler, people usually do not choose the leader. Democracy: citizens share power by electing leaders."
    },
    {
     "t": "Political participation",
     "b": "Then and now: voting, town meetings, petitions, protests, writing to officials, and holding public office."
    }
   ],
   "questions": [
    {
     "q": "What was the Mayflower Compact?",
     "choices": [
      "A map of the Atlantic Ocean",
      "A written agreement for fair and equal laws signed by the men on the Mayflower",
      "A tax paid only to France",
      "A list of Southern cash crops"
     ],
     "a": 1,
     "hint": "Think about the settlers on the ship in 1620 and how they planned to govern themselves.",
     "steps": [
      "In 1620 the Mayflower settlers needed rules for their new community.",
      "The men signed a written agreement for fair and equal laws.",
      "They elected John Carver as governor of Plymouth.",
      "Answer: a written self-government agreement ✔"
     ],
     "explain": "The Mayflower Compact was a written agreement for fair, equal laws."
    },
    {
     "q": "Where and when was the House of Burgesses established?",
     "choices": [
      "Plymouth, 1620",
      "Jamestown, Virginia, 1619",
      "New York, 1776",
      "Philadelphia, 1787"
     ],
     "a": 1,
     "hint": "It was Virginia's early elected assembly at the first permanent English town.",
     "steps": [
      "Jamestown, Virginia, was the first permanent English settlement.",
      "In 1619 colonists there created an elected assembly.",
      "It was called the House of Burgesses.",
      "Answer: Jamestown, 1619 ✔"
     ],
     "explain": "The House of Burgesses began at Jamestown in 1619."
    },
    {
     "q": "How is a democracy different from a monarchy?",
     "choices": [
      "In a democracy one king makes every law alone.",
      "In a democracy citizens share power by electing leaders; in a monarchy one ruler usually holds power.",
      "They are exactly the same.",
      "A monarchy always has town meetings."
     ],
     "a": 1,
     "hint": "Who chooses the leaders in each system?",
     "steps": [
      "Monarchy: one ruler (often a king or queen); people usually do not choose the leader.",
      "Democracy: citizens share power and elect leaders.",
      "Colonial assemblies moved toward democratic ideas.",
      "Democracy = elected sharing of power ✔"
     ],
     "explain": "Democracy shares power through elections; monarchy centers on one ruler."
    },
    {
     "q": "What did 'indirect rule' mean for many English colonies?",
     "choices": [
      "The King lived in every colonial town.",
      "Colonists could elect some leaders and make local laws while staying loyal to the King and English law.",
      "No one followed any laws.",
      "Only France could trade with them."
     ],
     "a": 1,
     "hint": "Indirect means the King was still in charge overall, but locals handled a lot day to day.",
     "steps": [
      "Colonists stayed under the English King and English law.",
      "In charter colonies, property-holding males often elected legislators.",
      "Governors might still be appointed by the King.",
      "That mix is indirect rule ✔"
     ],
     "explain": "Indirect rule: local elections plus loyalty to the King and English law."
    },
    {
     "q": "Who could typically vote for members of the House of Burgesses?",
     "choices": [
      "All adults in Virginia",
      "Only the King of France",
      "Property-holding males (representatives also had to be at least 21)",
      "Only children under 10"
     ],
     "a": 2,
     "hint": "Colonial voting rules were limited compared with today.",
     "steps": [
      "Voting was not open to everyone.",
      "Property-holding males could vote.",
      "Burgesses (representatives) had to be at least 21.",
      "Answer: property-holding males ✔"
     ],
     "explain": "Property-holding males voted; burgesses were at least 21."
    },
    {
     "q": "Which is an example of political participation in colonial times that still happens today?",
     "choices": [
      "Only kings writing secret laws",
      "Voting, town meetings, petitions, and writing to officials",
      "Refusing to have any government",
      "Trading only indigo"
     ],
     "a": 1,
     "hint": "Participation means taking part in how a community is governed.",
     "steps": [
      "Colonists voted, held town meetings, and used petitions.",
      "People today still vote, protest, petition, and contact officials.",
      "Those are forms of political participation.",
      "Answer: voting, town meetings, petitions… ✔"
     ],
     "explain": "Voting, town meetings, and petitions are lasting forms of participation."
    },
    {
     "q": "How did French and Spanish colonial rule often differ from English indirect rule?",
     "choices": [
      "They let every colonist vote for a king.",
      "They used more direct, autocratic rule — the King held nearly absolute power.",
      "They had no kings at all.",
      "They copied the House of Burgesses exactly."
     ],
     "a": 1,
     "hint": "Autocratic means one ruler has almost all the power.",
     "steps": [
      "French and Spanish settlements were under their kings' direct control.",
      "That is an autocratic monarchy — little local election of top leaders.",
      "English colonies more often elected local legislators.",
      "Answer: direct / autocratic rule ✔"
     ],
     "explain": "French and Spanish colonies were under more direct, autocratic royal rule."
    },
    {
     "q": "Why do historians say the Mayflower Compact and the House of Burgesses showed early democracy?",
     "choices": [
      "Because a single king wrote every local law alone.",
      "Because colonists agreed on rules and elected leaders to help govern themselves.",
      "Because no one was allowed to vote.",
      "Because they banned all meetings."
     ],
     "a": 1,
     "hint": "Look for people sharing power and choosing leaders.",
     "steps": [
      "The Compact was an agreement the settlers made together.",
      "The House of Burgesses was an elected legislature.",
      "Electing leaders and making shared rules are democratic ideas.",
      "Early self-government ✔"
     ],
     "explain": "Shared agreements and elected assemblies are early democratic practices."
    }
   ]
  }
 ]
};
