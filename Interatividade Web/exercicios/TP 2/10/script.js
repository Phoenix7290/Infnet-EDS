let createButton = document.createElement("button");
createButton.textContent = "inserir";

document.body.appendChild(createButton);

const selectDiv = document.getElementById("container");
console.log(selectDiv);

createButton.addEventListener("click", function () {
  let createH2 = document.createElement("h2");
  createH2.textContent = "Inserido";
  selectDiv.appendChild(createH2);
});
