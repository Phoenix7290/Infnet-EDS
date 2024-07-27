let clickDiv = document.querySelector(".conteudo");

clickDiv.addEventListener("click", function(){
  clickDiv.style.backgroundColor = "blue";
  clickDiv.style.color = "white";
  clickDiv.style.borderColor = "orange";
  clickDiv.style.width = (this.offsetWidth +2) + "px";
  clickDiv.style.height = (this.offsetWidth +2) + "px";
  // clickDiv.style.width = "102px";
  // clickDiv.style.height = "102px";
});
