const nav_link = document.querySelectorAll(".nav-link");
const nav_item = document.querySelector(".nav-item");
const navbar = document.querySelector(".navbar-nav");

const randomColor = () => {
  let min = 0;
  let max = 255;
  return Math.floor(Math.random() * (max - min) + min);
};

// nav_link.addEventListener("click", function (e) {
//   this.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
//   console.log();
// });

// nav_item.addEventListener("click", function () {
//   console.log("NAV_ITEM");
//   this.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
// });

// navbar.addEventListener("click", function () {
//   this.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
//   console.log("NAVBAR", this);
// });

// nav_link.forEach((nl) => {
//   nl.addEventListener("click", function (e) {
//     e.preventDefault();
//     nl.classList.add()
//   });
// });

navbar.addEventListener("click", function (e) {
  console.log("first");
  e.preventDefault();

  console.log(e.currentTarget);
  Array.from(e.currentTarget.children).forEach((li) => {
    console.log(li.children[0]);
    if (li.children[0].classList.contains("btn")) {
      li.children[0].classList.remove("btn");
      li.children[0].classList.remove("btn-primary");
    }
  });

  if (e.target.classList.contains("nav-link")) {
    e.target.classList.add("btn");
    e.target.classList.add("btn-primary");
  }
});
