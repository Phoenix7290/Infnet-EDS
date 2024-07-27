let item;

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
  item = event.target.id;
  console.log(item.substring(0));
};

function allowDrop (event) {
  event.preventDefault();
};

function dropElement (event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let element = (document.getElementById(data));
  if (element) {
    event.target.appendChild(element);
  } else {
    console.error("Erro: ",  data);
  }
};
