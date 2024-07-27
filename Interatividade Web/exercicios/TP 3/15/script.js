document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
  
    lista.addEventListener("click", () => {
      const liElementos = lista.getElementsByTagName("li");
      for (let li of liElementos) {
        if (li.innerText === "Acre") {
          li.innerText = "Amapa";
          li.style.backgroundColor = "blue";
        }
      }
    });
  });