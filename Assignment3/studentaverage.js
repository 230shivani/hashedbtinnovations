const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

let output = students.map(s => {
  let avg = s.scores.reduce((a,b) => a+b, 0) / s.scores.length;
  return { name: s.name, average: avg };
});

console.log(output);