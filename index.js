const si = document.querySelector(".oi");
const testo = document.createTextNode("ueueeu");

si.appendChild(testo);
document.getElementById("contenitore").appendChild(si);

const tic = function () {
  const input = document.querySelector("input");
  console.log(input.value);
};
const sisi = function () {
  const input = document.querySelector("input");
  console.log(input.value);
  input = "";
};
