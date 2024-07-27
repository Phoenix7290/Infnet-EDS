document.addEventListener("DOMContentLoaded", () => {
    const elementoInput = document.getElementById("texto");
    const elementoSpan = document.getElementById("nome");
  
    elementoInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        elementoSpan.textContent = elementoInput.value;
        elementoInput.value = "";
      }
    })
  });
  