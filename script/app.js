const navBtn = document.querySelector(".nav_btn");
const bg = document.querySelector(".nav_bg");
const navList = document.querySelector(".list");
const body = document.querySelector("body");
const navLink = document.querySelectorAll(".nav_link");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  bg.classList.toggle("active");
  navList.classList.toggle("active");
  body.classList.toggle("active");
});

bg.addEventListener("click", () => {
  bg.classList.remove("active");
  navBtn.classList.remove("active");
  navList.classList.remove("active");
  body.classList.remove("active");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    bg.classList.remove("active");
    navBtn.classList.remove("active");
    navList.classList.remove("active");
    body.classList.remove("active");
  });
}

AOS.init({
  offset: 150,
  duration: 2000,
});