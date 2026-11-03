const titulo = document.querySelector("#titulo");
const poder = document.querySelector("#poder");
const boton = document.querySelector("#entrenar");
let poder2 = 9000;

boton.addEventListener("click", () => {
  poder2 = poder2 + 1000;
  poder.textContent = `Poder: ${poder2}`;
});
console.log(titulo);

titulo.textContent = "Vegeta";
