# Revised Lesson Structure

## Prompt for Claude / Cursor

I have a GitHub Pages site at `https://shreyadsgn-rgb.github.io/precalc/` with two files: `index.html` and `sessions.js`. The site is a tutoring schedule tracker for Honors Precalculus with three tabs: Schedule, Calendar, and Checklist.

Please update `sessions.js` (and `index.html` only if needed for new UI elements) with the following changes:

---

## 1. New Lesson Structure

Replace all existing sessions with the following units and lessons. Each lesson = one tutoring session. Assign sessions to a Tue/Thu/Sat schedule starting Tue May 27, with Session 1 being a Semester 1 Review. The final session must not exceed Tue Jul 22. Distribute evenly and add flex/review days where the schedule allows.

Units and lessons:

- **Unit 1: Intro to Trig** → 1.1 Right Triangles, 1.2 Angles and Radians, 1.3 Trig Ratios and Unit Circle, 1.4 Trig Wrap-Up
- **Unit 2: Trig Functions** → 2.1 Sine and Cosine Graphs, 2.2 Graphs of Other Trig Functions, 2.3 Simple Transformations of Sinusoids, 2.4 General Transformations of Periodic Graphs, 2.5 Functions Wrap-Up
- **Unit 3: Working with Trig Functions** → 3.1 Inverse Trig Functions, 3.2 Solving Trig Equations, 3.3 Modeling Simple Harmonic Motion, 3.4 Working with Functions Wrap-Up
- **Unit 4: Trig Identities** → 4.1 Identities and Proof, 4.2 Trig Identities, 4.3 Applications of Identities, 4.4 Identities Wrap-Up
- **Unit 5: Applications of Trig** → 5.1 Law of Cosines, 5.2 Law of Sines, 5.3 Vectors, 5.4 Applications Wrap-Up
- **Unit 6: Complex Numbers** → 6.1 Polar Coordinates, 6.2 Graphs of Polar Functions, 6.3 Polar Form of Complex Numbers, 6.4 Arithmetic of Complex Numbers, 6.5 Powers and Roots of Complex Numbers, 6.6 Complex Numbers Wrap-Up
- **Unit 7: Semester 2 Review and Exam** → 7.1 Preparing for the Semester Exam, Exam, Final Exam

Session types to use: `"review"` (Sem 1 Review on May 27), `"new"` (regular lessons), `"wrapup"` (any x.x Wrap-Up lesson), `"flex"` (catch-up days if schedule has room), `"prep"` (Unit 7 sessions).

Each session object should include: `num`, `date`, `label` (the lesson title e.g. `"1.1 Right Triangles"`), `unit` (e.g. `"Unit 1: Intro to Trig"`), `duration: 90`, `topics: []` (leave as empty array for now), `hw: []` (leave as empty array for now), `hw_duration: null`, `type`.

---

## 2. Checklist: Add Confidence Rating + Notes Per Lesson

In the Checklist tab, each session row currently has a checkbox and a duration badge. Add two new inline fields to each row:

- A **confidence rating input**: a number input (1–10) with a small label "Confidence". Style it as a compact pill — border, rounded, ~40px wide, same font as the rest of the UI.
- A **notes field**: a single-line text input with placeholder "Tutor notes…". Should be reasonably wide but not overflow the row. These notes will be filled in by the tutor after each session.

Both fields should save to `localStorage` keyed by session number (e.g. `conf_5`, `notes_5`) so they persist on reload. They should not trigger the session's done/toggle behavior when clicked.

---

## 3. Style Constraints

- White background, dark text
- Accent colors: purple (`#6B4FBB`) and red (`#D93025`) only
- iOS-style, clean, minimal
- Do not change the overall layout, tab structure, or card expand/collapse behavior

---

## 4. Deliverables

Return the full updated `sessions.js` and any changes needed to `index.html`. Do not summarize — return the complete file contents ready to copy-paste and deploy.
