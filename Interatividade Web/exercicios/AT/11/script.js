window.onload = function () {
    const keypressInput = document.getElementById("keypress");
    const blurInput = document.getElementById("blur");
    const inputInput = document.getElementById("input");
    const changeInput = document.getElementById("change");
    const outputUser = document.getElementById("outputUser")
    
    keypressInput.addEventListener("keypress", function (event) {
      const keypressParagraph = document.createElement("p");
      keypressParagraph.textContent = `KeyPress: ${event.key}`;
      outputUser.appendChild(keypressParagraph);
    });
  
    blurInput.addEventListener("blur", function () {
      const blurParagraph = document.createElement("p");
      blurParagraph.textContent = `Blur: ${blurInput.value}`;
      outputUser.appendChild(blurParagraph);
    });
  
    inputInput.addEventListener("input", function () {
      const inputParagraph = document.createElement("p");
      inputParagraph.textContent = `Input: ${inputInput.value}`;
      outputUser.appendChild(inputParagraph);
    });
  
    changeInput.addEventListener("change", function () {
      const changeParagraph = document.createElement("p");
      changeParagraph.textContent = `Change: ${changeInput.value}`;
      outputUser.appendChild(changeParagraph);
    });
  }