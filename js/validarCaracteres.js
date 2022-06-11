function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32); 
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  }
  
function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add("invalido");
        if((validarEntrada(txt))==false){
            document.getElementById("nuevaPalabra").value;
            alert("No se permiten caracteres especiales ni números");
          
        }
    } else {
     // elem.classList.remove("invalido");
    }
}