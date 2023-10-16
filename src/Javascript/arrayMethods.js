const cities = ["Baku", "Sumqayit", "Masalli", "London", "Gence"];

const numbers = [1, -1003, 1, 12, -999, 2, 15, 20, -1];

const employees = [
  {
    Id: 1,
    FirstName: "Arif",
    LastName: "Hesenov",
    Department: "IT",
  },

  {
    Id: 2,
    FirstName: "Bruce",
    LastName: "Wayne",
    Department: "HR",
  },
  {
    Id: 3,
    FirstName: "Zahid",
    LastName: "Heyderli",
    Department: "IT",
  },
  {
    Id: 4,
    FirstName: "Walter",
    LastName: "White",
    Department: "Payrol",
  },
];

// foreach();
const any = (v) => {
  if (v == "Gence") {
    console.log("Qadanalim");
  }
};

// cities.forEach((v) => {
//   if (v == "Gence") {
//     console.log("Qadanalim");
//   }
// });

// for (const v of cities) {
//   console.log(v);
// }

const manipulatedCities = cities.map(function (v) {
  return v + " şəhəri";
});

console.log(manipulatedCities);
console.log(cities);

const manipulatedNumbers = numbers.map((x) => {
  return x + x * 0.2;
});

console.log(numbers);
console.log(manipulatedNumbers);

const manipulatedEmployees = employees.map((emp) => {
  return {
    ...emp,
    FullName: `${emp.FirstName} ${emp.LastName}`,
  };
});
console.log(employees);
console.log(manipulatedEmployees);

const filteredCities = cities.filter((city) => {
  return city != "London";
});

console.log(filteredCities);

const filteredNumbers = numbers.map((num) => {
  return num < 0;
});

console.log(filteredNumbers);

const changingEmployees = employees
  .filter((emp) => {
    return emp.Department == "IT";
  })
  .map((emp) => {
    return {
      ...emp,
      FullName: `${emp.FirstName} ${emp.LastName}`,
    };
  });

const hasAllDepartmentIsIt = employees.some((x) => x.Department == "IT");

console.log(hasAllDepartmentIsIt);
