let element = document.getElementById("a");
let menu = document.getElementById("menu");

element.onclick = function () {
  menu.classList.toggle("menu-toglle");
};

let skill = document.querySelectorAll(".the-progress span");
let section_skill = document.querySelector(".our-skills");
window.onscroll = function () {
  if (window.scrollY >= section_skill.offsetTop - 100) {
    skill.forEach((skil) => {
      skil.style.width = skil.dataset.width;
    });
  }
};

// let nums = document.querySelectorAll(".state .number");
// let section_state = document.querySelector(".state");
// let start = false;
// window.onscroll = function () {
//   if (window.scrollY >= section_state.offsetTop) {
//     if (!start) {
//       nums.forEach((num) => {
//         startCount(num);
//       });
//     }
//     start = true;
//   }
// };
// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 1000 / goal);
// }

let btn = document.querySelector("a");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
