window.onload = function () {
    const namelessInput = document.getElementById("nome");
    namelessInput.addEventListener("change", verNome);
  }
  
  function verNome () {
    const inputValue = document.getElementById("nome").value;
    alert(`Você digitou: ${inputValue}`); 
  }