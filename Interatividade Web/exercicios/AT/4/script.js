document.addEventListener("DOMContentLoaded", () => {
    let createStyle = document.createElement("style");
    createStyle.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      body {
        background-color: #fefefe;
      }
      
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1vh 5vw;
      }
  
      img {
        width: 200px;
      }
      
      nav {
        margin-right: 5vw;
        font-weight: bold;
        font-size: 20px;
      }
      
      ul {
        display: flex;
        flex-flow: row nowrap;
        gap: 5vw;
      }
  
      li {
        list-style-type: none;
      }
  
      main {
        flex: 1;
        padding: 50px 5vw;
      }
      
      h1 {
        text-align: center;
        margin-bottom: 15px;
      }
  
      p {
        margin-top: 15px;
        text-align: center;
      }
  
      footer {
        height: 100px;
        background-color: blue;
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 14vh;
        font-weight: bold;
        font-size: 20px;
      }
    `;
    
    document.head.appendChild(createStyle);
    
    const createHeader = document.createElement("header");
  
    const logo = document.createElement("img");
    logo.src = "image/logo.jpg";
    logo.alt = "Logo de uma paisagem. A ";
  
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
  
    const itens = ["Home", "Conteúdo", "Contato"];
    itens.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    createHeader.appendChild(logo);
    createHeader.appendChild(nav);
    document.body.appendChild(createHeader);
    
    const createMain = document.createElement("main");
  
    const h1 = document.createElement("h1");
    h1.textContent = "Manipulando o DOM";
    createMain.appendChild(h1);
  
    const paragraphs = ["Olá! Somos a Lorem Impsu Slogans.", "Aqui temos diversos serviçospara fazer a logo perfeita da sua empresa pu empreendimento!", "Contate-nos a partir dos contatos abaixo:"]
    paragraphs.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      createMain.appendChild(p);
    });
  
    document.body.appendChild(createMain);
    
    const createFooter = document.createElement("footer");
    createFooter.textContent = "E-mail: loremImpsu@gmail.com";
    document.body.appendChild(createFooter);
  });
  