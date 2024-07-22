const button = document.getElementById("adicionarItem");
const ul = document.getElementById("lista");
let counter = 1;

button.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = `Novo Item ${counter}`;
  li.id = counter;
  ul.appendChild(li);
  counter++;
});
