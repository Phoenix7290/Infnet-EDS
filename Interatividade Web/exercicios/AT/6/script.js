let selectDiv = document.getElementById("elemento");

let styleProperty = document.querySelectorAll("button")[0];
styleProperty.addEventListener("click", function() {
  selectDiv.removeAttribute("class");
  selectDiv.style.display = "flex";
  selectDiv.style.justifyContent = "center";
  selectDiv.style.alignItems = "center";
  selectDiv.style.width = "200px";
  selectDiv.style.height = "100px";
  selectDiv.style.backgroundColor = "lightcoral";
  selectDiv.style.border = "5px solid crimson";
  selectDiv.style.textAlign = "center";
  selectDiv.style.lineHeight = "25px";
  selectDiv.style.marginBottom = "10px";
});

let styleClassList = document.querySelectorAll("button")[1];
styleClassList.addEventListener("click", function() {
  selectDiv.removeAttribute("style");
  selectDiv.classList.remove("styleClassName-modified");
  selectDiv.classList.remove("styleSetAttribute");
  selectDiv.classList.add("styleClassList-modified");
});

let styleClassName = document.querySelectorAll("button")[2];
styleClassName.addEventListener("click", function() {
  selectDiv.removeAttribute("style");
  selectDiv.classList.remove("styleClassList-modified");
  selectDiv.className = "styleClassName-modified";
});

let styleSetAttribute = document.querySelectorAll("button")[3];
styleSetAttribute.addEventListener("click", function () {
  selectDiv.removeAttribute("style");
  selectDiv.removeAttribute("class");
  selectDiv.setAttribute("class", "styleSetAttribute");
});
