const students = [
  {
    firstName: "Arif",
    lastName: "Hasanov",
    age: 23,
    results: [90, 80, 50, 51, 70],
  },
  {
    firstName: "Vaqif",
    lastName: "Zeynalov",
    age: 19,
    results: [90, 80, 50, 51, 70],
  },
  {
    firstName: "Zahid",
    lastName: "Heyderli",
    age: 19,
    results: [90, 80, 50, 51, 70],
  },
];

console.table(students);
console.log(students[2].results);

const studentOfLeman = {
  firstName: "Leman",
  lastName: "Elizade",
  age: 20,
  results: [90, 80, 50, 50, 70],
  fullName: function () {
    return `${this.firstName} ${this.lastName}`; // --> Leman Elizade
  },
  sumOfResult: function () {
    let sum = 0;
    for (let index = 0; index < this.results.length; index++) {
      sum += this.results[index];
    }
    return sum;
  },

  knowledge: {
    backend: "Java",
    frontEnd: ["html", "Css", "Javascript"],

    fullStack: function () {
      return this.frontEnd[0];
    },
  },

  calcGpa: function () {
    let avg = this.sumOfResult() / this.results.length;

    if (avg > 50 && avg < 70) {
      this.gpa = "C";
    } else if (avg >= 70 && avg < 85) {
      this.gpa = "B";
    } else {
      this.gpa = "A";
    }
  },
};

studentOfLeman.gender = "Female";
studentOfLeman.GraduatedUniversity = "UNEC";

const studentsBasqaYerden = ["Leman Elizade"];

studentOfLeman.calcGpa();
console.log(studentOfLeman);

// console.log(`${phone.model} --- ${phone.name}`)

phone.showNameAndModel();
phone.calcCredit(12, 30);
