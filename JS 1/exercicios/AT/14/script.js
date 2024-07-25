function comparaStringCaseInsensitive (strA, strB) {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();
  
    if (strA === strB) {
      return true
    } else {
      return false
    }
  }
  
  alert(comparaStringCaseInsensitive ("Hello", "Hello"));
  alert(comparaStringCaseInsensitive ("World", "world"));
  alert(comparaStringCaseInsensitive ("Welcome", "Walcome"));
  alert(comparaStringCaseInsensitive ("To", "to"));
  alert(comparaStringCaseInsensitive ("JavaScript", "Java"));