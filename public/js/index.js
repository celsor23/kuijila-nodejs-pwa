const navBurger = document.querySelector(".navBurger");
const navbarCollapse = document.querySelector(".navbarCollapse");

navBurger.addEventListener("click", (event) => {

  navbarCollapse.classList.toggle("block");

});