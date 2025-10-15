
let student = {
  name: "Amit",
  age: 20,
  grade: "B"
};


student.class = "12th";

student.grade = "A";


for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
