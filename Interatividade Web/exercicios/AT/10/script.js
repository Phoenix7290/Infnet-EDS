window.onload = function () {

    // Divisões para interpretação:
    
    const employees = [
      {name: "Maria", position:"Tech Lead", salary: 14000},
      {name: "Carlo", position:"Desenvolvedor", salary: 4500},
      {name: "Roberto", position:"Designer", salary: 6000},
      {name: "Lucas", position:"Suporte Técnico", salary: 2500},
      {name: "Catarina", position:"Engenherira de Software", salary: 7000},
      {name: "Adriana", position:"Administradora de Redes", salary: 8000} 
    ];
  
    // Tabela e Pequena estilização.
    const createTable  = document.createElement("Table");
    createTable.border = 1;
    createTable.style.width = "80%";
    createTable.style.margin = "20px auto";
    // createTable.style.borderCollapse = "collapse";
    createTable.style.fontFamily = "Arial, sans-serif";
    
    // Criar thead > tr > th
    const thead = document.createElement("thead");
    const tHeaderRow = document.createElement("tr");
    const tHeaders = ["Nome Funcionário", "Cargo Funcionário", "Salário Funcionário", "Total Anual Funcionário"];
    tHeaders.forEach(tHeaderText => {
      const th = document.createElement("th");
      th.textContent = tHeaderText;
      tHeaderRow.appendChild(th);
    });
    thead.appendChild(tHeaderRow);
    createTable.appendChild(thead);
  
    // Criar tbody > tr > td
    const tbody = document.createElement("tbody");
    let totalSalary = 0;
    let totalAnnual = 0;
  
    employees.forEach(employee => {
      const annualSalary = employee.salary * 12;
      totalSalary += employee.salary;
      totalAnnual += annualSalary;
  
      const tBodyRow = document.createElement("tr");
  
      const cellContent = document.createElement("td");
      cellContent.textContent = employee.name;
      tBodyRow.appendChild(cellContent);
  
      const cellPosition = document.createElement("td");
      cellPosition.textContent = employee.position;
      tBodyRow.appendChild(cellPosition);
      
      const cellSalary = document.createElement("td");
      cellSalary.textContent = employee.salary
      tBodyRow.appendChild(cellSalary);
      
      const cellAnnualSalary = document.createElement("td");
      cellAnnualSalary.textContent = annualSalary.toFixed(2);
      tBodyRow.appendChild(cellAnnualSalary);
  
      tbody.appendChild(tBodyRow);
    });
  
    createTable.appendChild(tbody);
  
    // Criar o tfoot > tr > td
  
    const tfoot = document.createElement("tfoot");
    const tFooterRow = document.createElement("tr");
  
    const cellTotalLabel = document.createElement("td");
    cellTotalLabel.colSpan = 2;
    cellTotalLabel.textContent = "Total:";
    tFooterRow.appendChild(cellTotalLabel);
    
    const cellTotalSalary = document.createElement("td");
    cellTotalSalary.textContent = totalSalary.toFixed(2);
    tFooterRow.appendChild(cellTotalSalary);
  
    const cellTotalAnnual = document.createElement("td");
    cellTotalAnnual.textContent = totalAnnual.toFixed(2);
    tFooterRow.appendChild(cellTotalAnnual);
  
    tfoot.appendChild(tFooterRow);
    createTable.appendChild(tfoot);
    
    document.body.appendChild(createTable);
  }