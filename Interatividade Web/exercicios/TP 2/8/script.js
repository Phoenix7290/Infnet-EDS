let createSpan = document.createElement("span");
createSpan.textContent = "Olá mundo";

let selectDiv = document.getElementsByClassName("mensagem")[0];
console.log(selectDiv);

selectDiv.appendChild(createSpan);