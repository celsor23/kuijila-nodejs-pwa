const cardRadioInput = document.getElementById("card");
const labelForRadioInput = document.querySelector("label[for='card'].fa");
const multicaixaRadioInput = document.getElementById("multicaixa");
const paypalRadioInput = document.getElementById("paypal");
const submitBtn = document.querySelector(".btn");

const cardFormContentContainer = document.querySelector(".cardFormContentContainer");


cardRadioInput.addEventListener("click", () => {
  console.log("card", cardRadioInput.checked);
  console.log("multicaixa", multicaixaRadioInput.checked);
  console.log("paypal", paypalRadioInput.checked);
  toggleCardFormContentContainerDisplay(cardRadioInput.checked);
});

multicaixaRadioInput.addEventListener("click", () => {
  console.log("card", cardRadioInput.checked);
  console.log("multicaixa", multicaixaRadioInput.checked);
  console.log("paypal", paypalRadioInput.checked);
  toggleCardFormContentContainerDisplay(cardRadioInput.checked);
});

paypalRadioInput.addEventListener("click", () => {
  console.log("card", cardRadioInput.checked);
  console.log("multicaixa", multicaixaRadioInput.checked);
  console.log("paypal", paypalRadioInput.checked);
  toggleCardFormContentContainerDisplay(cardRadioInput.checked);
});

function toggleCardFormContentContainerDisplay(bool) {
  if (bool) {
    cardFormContentContainer.classList.remove("hide");
  } else {
    cardFormContentContainer.classList.add("hide");
  }
}