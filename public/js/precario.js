const básico = document.querySelector(".básico");
const prêmio = document.querySelector(".prêmio");
const executivo = document.querySelector(".executivo");

básico.addEventListener("click", () => {
  básico.classList.add("highlighted");
  prêmio.classList.remove("highlighted");
  executivo.classList.remove("highlighted");
  sessionStorage.setItem("plano", básico.children[0].value);
});

prêmio.addEventListener("click", () => {
  prêmio.classList.add("highlighted");
  básico.classList.remove("highlighted");
  executivo.classList.remove("highlighted");
  sessionStorage.setItem("plano", prêmio.children[0].value);
});

executivo.addEventListener("click", () => {
  executivo.classList.add("highlighted");
  básico.classList.remove("highlighted");
  prêmio.classList.remove("highlighted");
  sessionStorage.setItem("plano", executivo.children[0].value);
});