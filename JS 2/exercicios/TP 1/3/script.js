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


// Durante uma breve dúvida com o professor Eduardo. Ele aconselhou realizar dessa forma abaixo. A quinta posição significa o indice número 4 e adiante...

países.push("Portugal");

países.splice(2, 1);
console.log(países);