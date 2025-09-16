let studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 89, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 84, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 74, subject4: 97, subject5: 37 }
};

let result = {};

for (let student in studentsData) {
  let marks = Object.values(studentsData[student]);
  let avg = marks.reduce((a,b) => a+b, 0) / marks.length;
  result[student] = { average: avg };
}

console.log(result);