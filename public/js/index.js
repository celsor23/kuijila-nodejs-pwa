const signupContent = document.querySelector(".content__sign-up");
const qAndAContent = document.querySelector(".content__q-and-a");
const enjoyContent = document.querySelector(".content__enjoy");

signupButton.addEventListener("click", () => {
  signupContent.classList.add("block");
  qAndAContent.classList.remove("block");
  enjoyContent.classList.remove("block");
});

qAndAButton.addEventListener("click", () => {
  signupContent.classList.remove("block");
  qAndAContent.classList.add("block");
  enjoyContent.classList.remove("block");
});

enjoyButton.addEventListener("click", () => {
  signupContent.classList.remove("block");
  qAndAContent.classList.remove("block");
  enjoyContent.classList.add("block");
});

// const auth = window.auth.getAuth(window.app);
// console.log(auth);