const SESSIONS = [
  {
    num: 1, date: "Tue May 26", label: "Unit 7 · L1", unit: "Intro to Trig", duration: 90, type: "new",
    topics: [
      "Right triangles and the three primary trig ratios",
      "SOH-CAH-TOA applied to finding sides and angles",
      "Introduction to the six trig functions"
    ],
    hw: ["Checkup L1 (50 min)", "Explore: Sextant (30 min)", "Quiz L1 (40 min)"],
    hw_duration: 120
  },
  {
    num: 2, date: "Thu May 28", label: "Unit 7 · L2", unit: "Intro to Trig", duration: 90, type: "new",
    topics: [
      "Degrees vs. radians — what they measure and why radians matter",
      "Converting between degrees and radians",
      "Arc length and sector area using radians"
    ],
    hw: ["Checkup L2 (50 min)", "Quiz L2 (40 min)"],
    hw_duration: 90
  },
  {
    num: 3, date: "Sat May 30", label: "Unit 7 · L3", unit: "Intro to Trig", duration: 90, type: "new",
    topics: [
      "Six trig ratios defined on the unit circle",
      "Reference angles and quadrant rules",
      "Terminal conditions and evaluating trig at key angles"
    ],
    hw: ["Checkup L3 (50 min)", "Quiz L3 (40 min)", "Unit 7 Practice + Tests (160 min) — do over 2–3 days"],
    hw_duration: 250
  },
  {
    num: 4, date: "Tue Jun 2", label: "Unit 8 · L1", unit: "Trig Functions", duration: 90, type: "new",
    topics: [
      "How the sine and cosine graphs are built from the unit circle",
      "Amplitude and period — what changes them and how to read them",
      "Recognizing and sketching basic sinusoids"
    ],
    hw: ["Checkup L1 (50 min)", "Explore: Tides (30 min)"],
    hw_duration: 80
  },
  {
    num: 5, date: "Thu Jun 4", label: "Unit 8 · L2–L3", unit: "Trig Functions", duration: 90, type: "new",
    topics: [
      "Graphs of tan, cot, sec, csc — shape and asymptotes",
      "Simple transformations: reflections across x- and y-axes",
      "Horizontal and vertical shifts of trig graphs"
    ],
    hw: ["Checkups L2–L3 (100 min)", "Quizzes L2–L3 (80 min)"],
    hw_duration: 180
  },
  {
    num: 6, date: "Sat Jun 6", label: "Unit 8 · L4", unit: "Trig Functions", duration: 90, type: "new",
    topics: [
      "Full A·sin(Bx + C) + D form — each parameter's role",
      "Phase shift vs. horizontal shift — common confusion cleared up",
      "Modeling real periodic data with a sinusoid"
    ],
    hw: ["Checkup L4 (50 min)", "Quiz L4 (40 min)", "Explore: Daylight Hours (30 min)", "Unit 8 Practice + Tests (160 min) — do over 2–3 days"],
    hw_duration: 280
  },
  {
    num: 7, date: "Tue Jun 9", label: "Unit 9 · L1", unit: "Working with Trig", duration: 90, type: "new",
    topics: [
      "Inverse trig functions — arcsin, arccos, arctan",
      "Restricted domains and why they matter",
      "Solving for unknown angles using inverses"
    ],
    hw: ["Checkup L1 (50 min)", "Quiz L1 (40 min)"],
    hw_duration: 90
  },
  {
    num: 8, date: "Thu Jun 11", label: "Unit 9 · L2", unit: "Working with Trig", duration: 90, type: "new",
    topics: [
      "Setting up trig equations and isolating the trig function",
      "Finding all solutions over [0, 2π] using reference angles",
      "General solution with +2πk and +πk"
    ],
    hw: ["Checkup L2 (50 min)", "Quiz L2 (40 min)"],
    hw_duration: 90
  },
  {
    num: 9, date: "Sat Jun 13", label: "Unit 9 · L3 + Checkpoint", unit: "Working with Trig", duration: 90, type: "checkpoint",
    topics: [
      "Simple harmonic motion — pendulums, springs, oscillations",
      "Writing SHM equations from physical scenarios",
      "Checkpoint: Q&A review of Units 7–9 — bring your hardest questions"
    ],
    hw: ["Checkup L3 (50 min)", "Explore: Physics SHM (50 min)", "Unit 9 Practice + Tests (160 min)"],
    hw_duration: 260
  },
  {
    num: 10, date: "Tue Jun 16", label: "Unit 10 · L1", unit: "Trig Identities", duration: 90, type: "new",
    topics: [
      "What a trigonometric identity is (vs. an equation)",
      "Proof techniques — working one side, choosing strategy",
      "Pythagorean identities and deriving them from the unit circle"
    ],
    hw: ["Checkup L1 (50 min)", "Explore: Beyond a Reasonable Doubt (30 min)"],
    hw_duration: 80
  },
  {
    num: 11, date: "Thu Jun 18", label: "Unit 10 · L2", unit: "Trig Identities", duration: 90, type: "new",
    topics: [
      "Sum and difference formulas for sin, cos, tan",
      "Double-angle and half-angle identities",
      "When and how to apply each — pattern recognition"
    ],
    hw: ["Checkup L2 (50 min)", "Quiz L2 (40 min)"],
    hw_duration: 90
  },
  {
    num: 12, date: "Sat Jun 20", label: "Unit 10 · L3", unit: "Trig Identities", duration: 90, type: "new",
    topics: [
      "Using identities to simplify and then solve trig equations",
      "Substitution strategies — converting to a single trig function",
      "Practice with multi-step identity proofs"
    ],
    hw: ["Checkup L3 (50 min)", "Quiz L3 (40 min)", "Unit 10 Practice + Tests (150 min)"],
    hw_duration: 240
  },
  {
    num: 13, date: "Tue Jun 23", label: "Unit 11 · L1", unit: "Applications of Trig", duration: 90, type: "new",
    topics: [
      "When to use law of cosines (SAS and SSS cases)",
      "Setting up and solving for missing sides and angles",
      "Real-world distance and navigation problems"
    ],
    hw: ["Checkup L1 (50 min)", "Quiz L1 (40 min)"],
    hw_duration: 90
  },
  {
    num: 14, date: "Thu Jun 25", label: "Unit 11 · L2", unit: "Applications of Trig", duration: 90, type: "new",
    topics: [
      "Law of sines — AAS, ASA, and SSA cases",
      "The ambiguous case (SSA): 0, 1, or 2 triangles possible",
      "Knowing which law to reach for given the info you have"
    ],
    hw: ["Checkup L2 (50 min)", "Explore: Congruent Triangle Rules (30 min)", "Quiz L2 (40 min)"],
    hw_duration: 120
  },
  {
    num: 15, date: "Sat Jun 27", label: "Unit 11 · L3", unit: "Applications of Trig", duration: 90, type: "new",
    topics: [
      "Vectors — components, magnitude, direction angle",
      "Adding and subtracting vectors geometrically and algebraically",
      "Navigation and physics applications using vectors"
    ],
    hw: ["Checkup L3 (50 min)", "Explore: Navigation (30 min)", "Unit 11 Practice + Tests (150 min)"],
    hw_duration: 230
  },
  {
    num: 16, date: "Tue Jun 30", label: "Unit 12 · L1", unit: "Complex Numbers", duration: 90, type: "new",
    topics: [
      "Polar coordinates — plotting (r, θ) and converting to/from rectangular",
      "Multiple representations of the same point",
      "Polar equations of circles and lines"
    ],
    hw: ["Checkup L1 (50 min)", "Explore: Mapmaking (30 min)", "Quiz L1 (40 min)"],
    hw_duration: 120
  },
  {
    num: 17, date: "Thu Jul 2", label: "Unit 12 · L2", unit: "Complex Numbers", duration: 90, type: "new",
    topics: [
      "Graphing polar functions — roses, lemniscates, limaçons, cardioids",
      "How r = f(θ) traces out a curve as θ increases",
      "Identifying symmetry in polar graphs"
    ],
    hw: ["Checkup L2 (50 min)", "Quiz L2 (40 min)"],
    hw_duration: 90
  },
  {
    num: 18, date: "Sat Jul 4", label: "Unit 12 · L3", unit: "Complex Numbers", duration: 90, type: "new",
    topics: [
      "Complex numbers a + bi in polar/trigonometric form r(cosθ + i·sinθ)",
      "Converting between rectangular and polar form",
      "Visualizing complex numbers on the complex plane"
    ],
    hw: ["Checkup L3 (50 min)", "Quiz L3 (40 min)"],
    hw_duration: 90
  },
  {
    num: 19, date: "Tue Jul 7", label: "Unit 12 · L4", unit: "Complex Numbers", duration: 90, type: "new",
    topics: [
      "Adding and subtracting complex numbers geometrically",
      "Multiplying and dividing in polar form — why it's elegant",
      "Complex conjugates and their role in division"
    ],
    hw: ["Checkup L4 (50 min)", "Quiz L4 (40 min)"],
    hw_duration: 90
  },
  {
    num: 20, date: "Thu Jul 9", label: "Unit 12 · L5 + Checkpoint", unit: "Complex Numbers", duration: 90, type: "checkpoint",
    topics: [
      "De Moivre's theorem — raising complex numbers to powers",
      "Finding nth roots of complex numbers",
      "Checkpoint: Q&A review of Units 10–12"
    ],
    hw: ["Checkup L5 (50 min)", "Quiz L5 (40 min)", "Unit 12 Practice + Tests (150 min)"],
    hw_duration: 240
  },
  {
    num: 21, date: "Sat Jul 11", label: "Flex / Catch-up", unit: "—", duration: 90, type: "flex",
    topics: [
      "Revisit the unit or topic that's felt hardest",
      "Work through any Apex quiz questions that were missed",
      "Open Q&A — bring anything you're unsure about"
    ],
    hw: ["Finish any outstanding unit tests", "Complete Semester 2 Apex diagnostic if available"],
    hw_duration: null
  },
  {
    num: 22, date: "Tue Jul 14", label: "Exam Prep 1", unit: "Units 7–9", duration: 90, type: "prep",
    topics: [
      "Rapid review: unit circle, trig graphs, transformations",
      "Solving trig equations and inverse trig",
      "SHM modeling — write equations from word problems"
    ],
    hw: ["Review all errors from Unit 7–9 tests", "Re-read any Study sections you flagged as shaky"],
    hw_duration: null
  },
  {
    num: 23, date: "Thu Jul 16", label: "Exam Prep 2", unit: "Units 10–12", duration: 90, type: "prep",
    topics: [
      "Rapid review: identity types, proof strategies",
      "Law of cosines vs. sines — decision tree drill",
      "Polar coordinates and complex number arithmetic"
    ],
    hw: ["Review all errors from Unit 10–12 tests", "Attempt 5 mixed problems from each unit"],
    hw_duration: null
  },
  {
    num: 24, date: "Sat Jul 18", label: "Mock Exam + Debrief", unit: "Full Semester 2", duration: 90, type: "prep",
    topics: [
      "45 min timed mock exam covering Units 7–12",
      "45 min full debrief — every wrong answer explained",
      "Build a personal reference sheet of things to remember"
    ],
    hw: ["Rest — no new content", "School starts Aug 10 — you're ready"],
    hw_duration: null
  }
];

const TYPE_LABELS = {
  new: "New content",
  review: "Sem 1 review",
  checkpoint: "Checkpoint",
  flex: "Flex",
  prep: "Exam prep"
};

const WEEKS = [
  { label: "Week 1 — May 25", sessions: [1, 2] },
  { label: "Week 2 — Jun 1",  sessions: [3, 4, 5] },
  { label: "Week 3 — Jun 8",  sessions: [6, 7, 8] },
  { label: "Week 4 — Jun 15", sessions: [9, 10, 11] },
  { label: "Week 5 — Jun 22", sessions: [12, 13, 14] },
  { label: "Week 6 — Jun 29", sessions: [15, 16, 17] },
  { label: "Week 7 — Jul 6",  sessions: [18, 19, 20] },
  { label: "Week 8 — Jul 13", sessions: [21, 22, 23] },
  { label: "Week 9 — Jul 18", sessions: [24] },
];

const CL_GROUPS = [
  { label: "Week 1 · May 26–30",  nums: [1, 2, 3] },
  { label: "Week 2 · Jun 2–6",    nums: [4, 5, 6] },
  { label: "Week 3 · Jun 9–13",   nums: [7, 8, 9] },
  { label: "Week 4 · Jun 16–20",  nums: [10, 11, 12] },
  { label: "Week 5 · Jun 23–27",  nums: [13, 14, 15] },
  { label: "Week 6 · Jun 30–Jul 4", nums: [16, 17, 18] },
  { label: "Week 7 · Jul 7–11",   nums: [19, 20, 21] },
  { label: "Week 8–9 · Jul 14–18", nums: [22, 23, 24] },
];

const SESSION_DATES = {
  "2026-05-26": { num: 1,  type: "new",        label: "Unit 7 · L1" },
  "2026-05-28": { num: 2,  type: "new",        label: "Unit 7 · L2" },
  "2026-05-30": { num: 3,  type: "new",        label: "Unit 7 · L3" },
  "2026-06-02": { num: 4,  type: "new",        label: "Unit 8 · L1" },
  "2026-06-04": { num: 5,  type: "new",        label: "Unit 8 · L2–L3" },
  "2026-06-06": { num: 6,  type: "new",        label: "Unit 8 · L4" },
  "2026-06-09": { num: 7,  type: "new",        label: "Unit 9 · L1" },
  "2026-06-11": { num: 8,  type: "new",        label: "Unit 9 · L2" },
  "2026-06-13": { num: 9,  type: "checkpoint", label: "Unit 9 · L3 + Checkpoint" },
  "2026-06-16": { num: 10, type: "new",        label: "Unit 10 · L1" },
  "2026-06-18": { num: 11, type: "new",        label: "Unit 10 · L2" },
  "2026-06-20": { num: 12, type: "new",        label: "Unit 10 · L3" },
  "2026-06-23": { num: 13, type: "new",        label: "Unit 11 · L1" },
  "2026-06-25": { num: 14, type: "new",        label: "Unit 11 · L2" },
  "2026-06-27": { num: 15, type: "new",        label: "Unit 11 · L3" },
  "2026-06-30": { num: 16, type: "new",        label: "Unit 12 · L1" },
  "2026-07-02": { num: 17, type: "new",        label: "Unit 12 · L2" },
  "2026-07-04": { num: 18, type: "new",        label: "Unit 12 · L3" },
  "2026-07-07": { num: 19, type: "new",        label: "Unit 12 · L4" },
  "2026-07-09": { num: 20, type: "checkpoint", label: "Unit 12 · L5 + Checkpoint" },
  "2026-07-11": { num: 21, type: "flex",       label: "Flex / Catch-up" },
  "2026-07-14": { num: 22, type: "prep",       label: "Exam Prep 1" },
  "2026-07-16": { num: 23, type: "prep",       label: "Exam Prep 2" },
  "2026-07-18": { num: 24, type: "prep",       label: "Mock Exam + Debrief" },
};
