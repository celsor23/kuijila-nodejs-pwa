const mostrarButton = document.querySelector(".mostrar-btn");
const passwordInput = document.querySelector(".password-input");

mostrarButton.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else if (passwordInput.getAttribute("type") === "text") {
    passwordInput.setAttribute("type", "password");
  }
});

