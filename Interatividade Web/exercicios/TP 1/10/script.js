const raioCirculo = prompt("Qual o raio do círculo?");

const circulo = {
  raio: raioCirculo,
  circunferência: function() {
    return this.circunferência = Math.PI * (raioCirculo ** 2);
  },
  área: function() {
    return this.área = Math.PI * raioCirculo * 2;
  }
};


alert("A Circunferência do círculo (após arredondamento) é : " + circulo.circunferência().toFixed(2));
alert("A Área do círculo (após arredondamento) é : " + circulo.área().toFixed(2));

// alert("A Circunferência do círculo (após arredondamento) é : " + Math.round(circulo.circunferência()));
// alert("A Área do círculo (após arredondamento) é : " + Math.round(circulo.área()));