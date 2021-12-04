const navBurger = document.querySelector(".navBurger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const navbarCollapse = document.querySelector(".navbarCollapse");

const signupButton = document.querySelector(".signupButton");
const qAndAButton = document.querySelector(".qAndAButton");
const enjoyButton = document.querySelector(".enjoyButton");

navBurger.addEventListener("click", (event) => {
  event.stopPropagation();
  navBurger.classList.toggle("open");
  
  navbarCollapse.classList.toggle("block");
});

navbarCollapse.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  navBurger.classList.remove("open");
  navbarCollapse.classList.remove("block");
})