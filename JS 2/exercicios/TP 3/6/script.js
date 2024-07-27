const pessoas = [
    'Luiz',
    'Leticia',
    'Laura',
    'Lucas',
    'Leonardo',
    'Luiz',
    'Livia',
    'Laura',
    'Luiz',
    'Leonardo',
    'Leandro'
  ];
  
  function removeDuplicates (array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  };
  
  const pessoasFiltradas = removeDuplicates(pessoas);
  console.log(pessoasFiltradas);