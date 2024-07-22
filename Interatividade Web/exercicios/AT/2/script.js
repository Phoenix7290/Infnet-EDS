let produtos1 = {
    nome: "Notebook",
    preco: 3000.00,
    categoria: "Computadores",
    aplicaDesconto: function(percentual) {
      return this.preco - (this.preco * (percentual / 100));
    }
  };
  
  let produtos2 = {
    nome: "SSD externo",
    preco: 500.00,
    categoria: "Acessórios",
    aplicaDesconto: function(percentual) {
      return this.preco - (this.preco * (percentual / 100));
    }
  };
  
  let produtos3 = {
    nome: "Mouse",
    preco: 250.00,
    categoria: "Acessórios",
    aplicaDesconto: function(percentual) {
      return this.preco - (this.preco * (percentual / 100));
    }
  };
  
  function interfaceProduto (produto, desconto) {
    let createProduct = document.createElement("div");
    
    createProduct.innerHTML = `
      <h2>${produto.nome}:</h2>
      <p>Preço: ${produto.preco.toFixed(2)} R$</p>
      <p>Categoria: ${produto.categoria}</p>
      <p>Preço com Desconto de (${desconto}%):  ${produto.aplicaDesconto(desconto).toFixed(2)} R$</p>
    `
    
    document.body.appendChild(createProduct);
  }
  
  interfaceProduto(produtos1, 10);
  interfaceProduto(produtos2, 5);
  interfaceProduto(produtos3, 20);