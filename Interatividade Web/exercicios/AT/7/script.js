const button = document.querySelector("button");
const newList = document.createElement("ul");

button.addEventListener("click", function () {
  const listInput = document.getElementById("list");
  const listValue = listInput.value.trim();

  if (listValue !== "") {
    const newElementList = document.createElement("li");
    newElementList.textContent = listValue;

    newList.appendChild(newElementList);

    listInput.value = "";
  } else {
    alert("Por favor, insira uma tarefa.");
  }
});

document.body.appendChild(newList);
