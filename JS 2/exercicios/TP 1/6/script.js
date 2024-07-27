const países = [];

países.push(
  "Brasil",
  "EUA",
  "Alemanha",
  "Argentina",
  "Reino Unido"
);

console.log(países);
document.write("O tamanho do Array é: ", países.length, "<br>");

// Índice 2 ou Segunda posição? Realizei com Índice 2.

países[2]="Itália";
document.write("O país na segunda posição foi mudado para ", países[2]);

países.push("Portugal");

países.splice(2, 1);
console.log(países);

países.pop();
console.log(países);

países.push(
  "Japão",
  "França"
);

console.log(países);

países.shift();
console.log(países);