const cardRadioInput = document.getElementById("card");
const labelForRadioInput = document.querySelector("label[for='card'].fa");
const multicaixaRadioInput = document.getElementById("multicaixa");
const paypalRadioInput = document.getElementById("paypal");
const submitBtn = document.querySelector(".btn");

const cardFormContentContainer = document.querySelector(".cardFormContentContainer");

enableSubmitBtn(false);

cardRadioInput.addEventListener("click", () => {
  console.log("card", cardRadioInput.checked);
  console.log("multicaixa", multicaixaRadioInput.checked);
  console.log("paypal", paypalRadioInput.checked);
  toggleCardFormContentContainerDisplay(cardRadioInput.checked);
  enableSubmitBtn(cardRadioInput.checked);
});

multicaixaRadioInput.addEventListener("click", () => {
  console.log("card", cardRadioInput.checked);
  console.log("multicaixa", multicaixaRadioInput.checked);
  console.log("paypal", paypalRadioInput.checked);
  toggleCardFormContentContainerDisplay(cardRadioInput.checked);
  enableSubmitBtn(multicaixaRadioInput.checked);
});

paypalRadioInput.addEventListener("click", () => {
  console.log("card", cardRadioInput.checked);
  console.log("multicaixa", multicaixaRadioInput.checked);
  console.log("paypal", paypalRadioInput.checked);
  toggleCardFormContentContainerDisplay(cardRadioInput.checked);
  enableSubmitBtn(paypalRadioInput.checked);
});

function toggleCardFormContentContainerDisplay(bool) {
  if (bool) {
    cardFormContentContainer.classList.remove("hide");
  } else {
    cardFormContentContainer.classList.add("hide");
  }
}

function enableSubmitBtn(bool) {
  if (bool) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}