const estudanteRadioInput = document.getElementById("estudante");
const tutorRadioInput = document.getElementById("tutor");
const ensinoParagraph = document.querySelector(".ensino-paragraph");
const customSelect = document.querySelector(".custom-select");

estudanteRadioInput.addEventListener("click", () => {
  console.log(estudanteRadioInput.checked);
  removeHideClass();
});

tutorRadioInput.addEventListener("click", () => {
  console.log(tutorRadioInput.checked);
  removeHideClass();
});

if (!estudanteRadioInput.checked && !tutorRadioInput.checked) {
  addHideClass()
} else {
  removeHideClass();
}

console.log("estudante", estudanteRadioInput);
console.log("tutor", tutorRadioInput);

function addHideClass() {
  ensinoParagraph.classList.add("hide");
  customSelect.classList.add("hide");
}

function removeHideClass() {
  ensinoParagraph.classList.remove("hide");
  customSelect.classList.remove("hide");
}