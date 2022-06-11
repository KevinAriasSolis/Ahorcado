var diccionario=[
    "ANDAR","CORRER","CAMINAR","CANTAR","AYUDAR","ANDAR","BUS","MAR","CAMINO","CUANTO","CUANDO","HACER","DECIR","CABALLO","VACA","OBEJA","FABRICAR","FACHADA","GABACHA","GACELA","GABINETE","DALMATA","HABANA","IDEAR","LABIOS","LABOR","MANZANA","PERA","ORBE","QUEBRADO","PABELLON","RABANO","TOMATE","RABIA","SABANA","SAL","SALERO","TABASCO","CIRCO","ABREVIAR","ABORIGEN","ACOGEDOR","ADJETIVO","ADJUNTAR","AGRICOLA","APRECIAR","ARBITRO","BARBACOA","CONSULTA","DIMINUTO","DICTAMEN","DISOLVER","ELEVADOR","ENSALADA","ESCAPE","ESTUDIAR","EXPULSAR","FAVORITO","FESTEJAR","GENEROSO","GUITARRA","GRABADOR","GABINETE","HOSPITAL","HUMILDAD","ILUSTRAR","IMAGINAR","INVASION","LANGOSTA","LUCHADOR","MAGNOLIA","OBELISCO","PERFECTO","PRESTAMO","PROVOCAR","RESERVAR","SENCILLO","SERVICIO","TABURETE","TORNILLO","VAINILLA","VARIEDAD","TRADUCIR","TRAVESIA"
];

localStorage.setItem('myArray', JSON.stringify(diccionario));

var palabras = localStorage.getItem('myArray');
palabras = JSON.parse (diccionario);

let btnAgregar = document.getElementById('guardar');
let inputNuevaPalabra = document.getElementById('nuevasPalabras');

function id(str){
    return document.getElementById(str);
}

function capturarTexto(){
    let nuevaPalabra = document.querySelector("textarea").value;
    return nuevaPalabra.toUpperCase();
}

function agregarPalabra(){
  nuevaPalabra = capturarTexto();
  let criterio = /^[a-zA-Z]+$/; //solo se aceptan letras 
  if(diccionario.indexOf(nuevaPalabra) < 0 && criterio.test(nuevaPalabra)){
    diccionario.push(nuevaPalabra);
    localStorage.setItem('myArray', JSON.stringify(palabras));
    alert ("Se agregó "+ nuevaPalabra + " a la lista");
    return;

  } if (diccionario.indexOf(nuevaPalabra) > 0){
    alert("La palabra " + nuevaPalabra + " ya se encuentra en la lista");
   // inputNuevaPalabra.value = "";
  }  
    if (nuevaPalabra.length == 0) {
    alert("No ingreso ninguna palabra");
    return;
  } if (!criterio.test(nuevaPalabra)){
    alert("Solo se admiten letras (sin espacios)");
  } 
  location.reload();
};
