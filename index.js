const mostraTarget = function () {
  console.log(mostraTarget.value);
};

const button = document.querySelector(".cicc");
button.addEventListener("change", mostraTarget);

const dammiValore = function () {
  const valor = document.querySelector(".valu");
  return valor.value;
};
const addTask = function () {
  const list = document.querySelector(".addTask");
  list.innerText += `<li> ${dammiValore()} </li>`;
};
const input = document.querySelector(".valu");
input.addEventListener("change", addTask);
//
const carlo = () => {
  let fabio = document.querySelector(".marco");
  console.log(fabio.value);
  fabio.value = "";
};
const concetta = document.querySelector(".fulvio");
concetta.addEventListener("click", carlo);

const mirko = () => {
  const salvatore = document.querySelector(".marco");
  return salvatore.value;
};

const luigi = () => {
  const micio = document.querySelector(".andrea");
  micio.innerHTML += `<li>${mirko()}</li>`;
};
const sabrina = document.querySelector(".marco");
sabrina.addEventListener("change", luigi);

const imagina = document.querySelector("#img");
trova = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((result) => result.json())
    .then((data) => {
      img.src = data.message;
    });
};
trova();
