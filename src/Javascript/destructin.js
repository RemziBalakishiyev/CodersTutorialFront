const movies = {
  name: "Silence of The sheep",
  genre: ["Dram", "Dedective", "Grammy"],
  languages: ["Azerbaijan", "Russian", "English"],
  subTitles: ["Azerbaijan", "Turk", "Arabic"],

  seasons: {
    firstSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    secondSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    lastSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
  },

  addComment: function ({ userName, comment }) {
    console.log(`${userName} -- '${comment}'`);
  },

  addNewLanguages: function (...newLanguages) {
    this.languages = [...new Set([...this.languages, ...newLanguages])];
  },
};

const students = ["Leman", "Vuqar", "Arif", "Vaqif"];

let [leman, vuqar, arif, vaqif] = students;

const [lang1, lang2, lang3] = movies.languages;

const [, , arab] = movies.subTitles;

// const userObject = {
//   userName: "Arif",
//   role: "Admin",
//   isAuthenticated: true,
// };

// const { userName, role: roleName, isAuthenticated } = userObject;
// if (isAuthenticated) {
//   console.log(`User Name  : ${roleName} `);
// }

const {
  lastSeason: { episodeOne, episodeTwo, episodeThree },
} = movies.seasons;

console.log(episodeTwo);

const userComments = [
  {
    userName: "Vaqif",
    comment: "Ela filmdir!",
  },
  {
    userName: "Leman",
    comment: "Bu ne filmdir cekmisiniz",
  },
  {
    userName: "Arif",
    comment: "Hec beyenmedim superdir",
  },
];

movies.addComment(userComments[2]);

console.log(...students);

const a = [1, 2, 3];

const b = [4, 5, 6];

let ab = [...a, ...b, 7, 8, 9, 10];

console.log(...ab);

movies.seasons = {
  ...movies.seasons,
  thirdSeasons: {
    episodeOne: "Episode - 1 ",
    episodeTwo: "Episode - 2 ",
    episodeThree: "Episode - 3",
  },
};

let coders = {
  studentFullName: " Arif Hesenov",
  age: 23,
  university: "UNEC",
  typeOfCourse: 2,
};

switch (coders.typeOfCourse) {
  case 1:
    coders = {
      ...coders,
      specialities: ["html", "Css", "Javascript", "React"],
    };
    break;

  case 2:
    coders = {
      ...coders,
      specialities: ["C#", "Sql Server", "Ef Core"],
    };
    break;
  case 3:
    coders = {
      ...coders,
      specialities: ["Python", "Sql Lite", "Django"],
    };
    break;
  default:
    break;
}

movies.addNewLanguages("Turkish", "Spain", "French", "Russian", "Russian");
movies.addNewLanguages();

const numbers = [1, 2, 3, 4, 3, 3, 4, 2, 5];
const setArr = new Set(numbers);

console.log(setArr);

console.log(movies.languages);
console.log(coders);
