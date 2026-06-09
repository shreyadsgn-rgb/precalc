const SESSIONS = [
  {
    num: 1, date: "Tue May 26", label: "Semester 1 Review", unit: "Semester 1 Review",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "review"
  },
  {
    num: 2, date: "Thu May 28", label: "1.1 Right Triangles", unit: "Unit 1: Intro to Trig",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 3, date: "Sat May 30", label: "1.2 Angles and Radians", unit: "Unit 1: Intro to Trig",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 4, date: "Tue Jun 2", label: "1.4 Trig Wrap-Up", unit: "Unit 1: Intro to Trig",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "wrapup"
  },
  {
    num: 5, date: "Thu Jun 4", label: "2.1 Sine and Cosine Graphs", unit: "Unit 2: Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 6, date: "Sat Jun 6", label: "2.2 Graphs of Other Trig Functions", unit: "Unit 2: Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 7, date: "Tue Jun 9", label: "2.3 Simple Transformations of Sinusoids", unit: "Unit 2: Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 8, date: "Thu Jun 11", label: "2.5 Functions Wrap-Up", unit: "Unit 2: Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "wrapup"
  },
  {
    num: 9, date: "Sat Jun 13", label: "3.1 Inverse Trig Functions", unit: "Unit 3: Working with Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 10, date: "Tue Jun 16", label: "3.2 Solving Trig Equations", unit: "Unit 3: Working with Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 11, date: "Thu Jun 18", label: "3.4 Working with Functions Wrap-Up", unit: "Unit 3: Working with Trig Functions",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "wrapup"
  },
  {
    num: 12, date: "Sat Jun 20", label: "4.1 Identities and Proof", unit: "Unit 4: Trig Identities",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 13, date: "Tue Jun 23", label: "4.2 Trig Identities", unit: "Unit 4: Trig Identities",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 14, date: "Thu Jun 25", label: "4.4 Identities Wrap-Up", unit: "Unit 4: Trig Identities",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "wrapup"
  },
  {
    num: 15, date: "Sat Jun 27", label: "5.1 Law of Cosines", unit: "Unit 5: Applications of Trig",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 16, date: "Tue Jun 30", label: "5.2 Law of Sines", unit: "Unit 5: Applications of Trig",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 17, date: "Thu Jul 2", label: "5.4 Applications Wrap-Up", unit: "Unit 5: Applications of Trig",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "wrapup"
  },
  {
    num: 18, date: "Sat Jul 4", label: "6.1 Polar Coordinates", unit: "Unit 6: Complex Numbers",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 19, date: "Tue Jul 7", label: "6.2 Graphs of Polar Functions", unit: "Unit 6: Complex Numbers",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 20, date: "Thu Jul 9", label: "6.3 Polar Form of Complex Numbers", unit: "Unit 6: Complex Numbers",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 21, date: "Sat Jul 11", label: "6.4 Arithmetic of Complex Numbers", unit: "Unit 6: Complex Numbers",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "new"
  },
  {
    num: 22, date: "Tue Jul 14", label: "6.6 Complex Numbers Wrap-Up", unit: "Unit 6: Complex Numbers",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "wrapup"
  },
  {
    num: 23, date: "Thu Jul 16", label: "7.1 Preparing for the Semester Exam", unit: "Unit 7: Semester 2 Review and Exam",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "prep"
  },
  {
    num: 24, date: "Sat Jul 18", label: "Exam", unit: "Unit 7: Semester 2 Review and Exam",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "prep"
  },
  {
    num: 25, date: "Tue Jul 21", label: "Final Exam", unit: "Unit 7: Semester 2 Review and Exam",
    duration: 90, topics: [], hw: [], hw_duration: null, type: "prep"
  }
];

const TYPE_LABELS = {
  new: "New content",
  review: "Sem 1 review",
  wrapup: "Wrap-Up",
  flex: "Flex",
  prep: "Exam prep"
};

const WEEKS = [
  { label: "Week 1 — May 26",   sessions: [1, 2, 3] },
  { label: "Week 2 — Jun 2",    sessions: [4, 5, 6] },
  { label: "Week 3 — Jun 9",    sessions: [7, 8, 9] },
  { label: "Week 4 — Jun 16",   sessions: [10, 11, 12] },
  { label: "Week 5 — Jun 23",   sessions: [13, 14, 15] },
  { label: "Week 6 — Jun 30",   sessions: [16, 17, 18] },
  { label: "Week 7 — Jul 7",    sessions: [19, 20, 21] },
  { label: "Week 8 — Jul 14",   sessions: [22, 23, 24] },
  { label: "Week 9 — Jul 21",   sessions: [25] },
];

const CL_GROUPS = [
  { label: "Week 1 · May 26–30",    nums: [1, 2, 3] },
  { label: "Week 2 · Jun 2–6",      nums: [4, 5, 6] },
  { label: "Week 3 · Jun 9–13",     nums: [7, 8, 9] },
  { label: "Week 4 · Jun 16–20",    nums: [10, 11, 12] },
  { label: "Week 5 · Jun 23–27",    nums: [13, 14, 15] },
  { label: "Week 6 · Jun 30–Jul 4", nums: [16, 17, 18] },
  { label: "Week 7 · Jul 7–11",     nums: [19, 20, 21] },
  { label: "Week 8–9 · Jul 14–21",  nums: [22, 23, 24, 25] },
];

const SESSION_DATES = {
  "2026-05-26": { num: 1,  type: "review", label: "Semester 1 Review" },
  "2026-05-28": { num: 2,  type: "new",    label: "1.1 Right Triangles" },
  "2026-05-30": { num: 3,  type: "new",    label: "1.2 Angles and Radians" },
  "2026-06-02": { num: 4,  type: "wrapup", label: "1.4 Trig Wrap-Up" },
  "2026-06-04": { num: 5,  type: "new",    label: "2.1 Sine and Cosine Graphs" },
  "2026-06-06": { num: 6,  type: "new",    label: "2.2 Graphs of Other Trig Functions" },
  "2026-06-09": { num: 7,  type: "new",    label: "2.3 Simple Transformations of Sinusoids" },
  "2026-06-11": { num: 8,  type: "wrapup", label: "2.5 Functions Wrap-Up" },
  "2026-06-13": { num: 9,  type: "new",    label: "3.1 Inverse Trig Functions" },
  "2026-06-16": { num: 10, type: "new",    label: "3.2 Solving Trig Equations" },
  "2026-06-18": { num: 11, type: "wrapup", label: "3.4 Working with Functions Wrap-Up" },
  "2026-06-20": { num: 12, type: "new",    label: "4.1 Identities and Proof" },
  "2026-06-23": { num: 13, type: "new",    label: "4.2 Trig Identities" },
  "2026-06-25": { num: 14, type: "wrapup", label: "4.4 Identities Wrap-Up" },
  "2026-06-27": { num: 15, type: "new",    label: "5.1 Law of Cosines" },
  "2026-06-30": { num: 16, type: "new",    label: "5.2 Law of Sines" },
  "2026-07-02": { num: 17, type: "wrapup", label: "5.4 Applications Wrap-Up" },
  "2026-07-04": { num: 18, type: "new",    label: "6.1 Polar Coordinates" },
  "2026-07-07": { num: 19, type: "new",    label: "6.2 Graphs of Polar Functions" },
  "2026-07-09": { num: 20, type: "new",    label: "6.3 Polar Form of Complex Numbers" },
  "2026-07-11": { num: 21, type: "new",    label: "6.4 Arithmetic of Complex Numbers" },
  "2026-07-14": { num: 22, type: "wrapup", label: "6.6 Complex Numbers Wrap-Up" },
  "2026-07-16": { num: 23, type: "prep",   label: "7.1 Preparing for the Semester Exam" },
  "2026-07-18": { num: 24, type: "prep",   label: "Exam" },
  "2026-07-21": { num: 25, type: "prep",   label: "Final Exam" },
};
