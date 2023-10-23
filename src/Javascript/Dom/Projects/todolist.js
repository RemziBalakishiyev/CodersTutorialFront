const btnOfAddTask = document.querySelector(".add-task");
const ul = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");

// btnOfAddTask.addEventListener("click", function (e) {
//   e.preventDefault();

//   const todoListItemHtml = `<li class="delete-list">
//                                 ${taskInput.value}
//                                 <button class="delete-icon">Delete</button>
//                             </li>`;

//   ul.insertAdjacentHTML("beforeend", todoListItemHtml);
// });

// ul.addEventListener("click", function (event) {
//   console.log(event.target);
//   if (event.target.classList.contains("delete-icon")) {
//     event.target.parentElement.remove();
//   }
// });

// console.log(ul.childNodes);
// console.log(ul.previousElementSibling);

// console.log(document.querySelector(".body-container").children);
// console.log(document.querySelector(".body-container").nextSibling);

// const createdP = document.createElement("p");

// createdP.classList.add("p-color");

// createdP.innerHTML =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam eos odio sunt odit, rerum ex tempora quo quia ipsum consequatur iure id reprehenderit! Quam dolorem voluptatem perspiciatis maxime aut!";

// document.querySelector(".body-container").appendChild(createdP);

// console.log(document.querySelector(".body-container").children[2].remove());

const removeElement = function (e) {
  e.target.parentElement.remove();
};
