let styleText = document.createElement("style");
styleText.textContent = `
.texto {
  text-align: center;
  font-weight: bold;
}`;

document.head.appendChild(styleText);

let changeParagraph = document.getElementById("nome");
let clickButton = document.querySelector("button");

clickButton.addEventListener("click",  function() {
  changeParagraph.classList.add("texto");
});
