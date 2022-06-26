const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  var rownded = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      rownded.push(grades[i]);
    } else if (grades[i] % 5 >= 3) {
      rownded.push(Math.floor(grades[i] / 5) * 5 + 5);
    } else {
      rownded.push(grades[i]);
    }
  }
  return rownded;
}
console.log(gradingStudents(grades));
// const grades  = 68
// const conta = (Math.floor(grades / 10)) * 10 + 10
// console.log(conta);
