var diccionario = [
    "ANDAR","CORRER","CAMINAR","CANTAR","AYUDAR","ANDAR","BUS","MAR","CAMINO","CUANTO","CUANDO","HACER","DECIR","CABALLO","VACA","OBEJA","FABRICAR","FACHADA","GABACHA","GACELA","GABINETE","DALMATA","HABANA","IDEAR","LABIOS","LABOR","MANZANA","PERA","ORBE","QUEBRADO","PABELLON","RABANO","TOMATE","RABIA","SABANA","SAL","SALERO","TABASCO","CIRCO","ABREVIAR","ABORIGEN","ACOGEDOR","ADJETIVO","ADJUNTAR","AGRICOLA","APRECIAR","ARBITRO","BARBACOA","CONSULTA","DIMINUTO","DICTAMEN","DISOLVER","ELEVADOR","ENSALADA","ESCAPE","ESTUDIAR","EXPULSAR","FAVORITO","FESTEJAR","GENEROSO","GUITARRA","GRABADOR","GABINETE","HOSPITAL","HUMILDAD","ILUSTRAR","IMAGINAR","INVASION","LANGOSTA","LUCHADOR","MAGNOLIA","OBELISCO","PERFECTO","PRESTAMO","PROVOCAR","RESERVAR","SENCILLO","SERVICIO","TABURETE","TORNILLO","VAINILLA","VARIEDAD","TRADUCIR","TRAVESIA"
]

var errores = 0;
var aciertos = 0;

const boton = document.getElementById("nuevoJuego", "iniciar");
boton.addEventListener("click", comenzar);

function comenzar(event){
    //boton.disabled = true;
    errores = 0;
    aciertos = 0;
    const lineas = document.getElementById("cantidadRayas");
    lineas.innerHTML = "";
    //const cantidadPalabras = diccionario.length;
    const sorteoPalabra = Math.floor(Math.random()*diccionario.length);
    const palabraSecreta = diccionario[sorteoPalabra];
    const cantidadLetras = palabraSecreta.length;
    console.log(palabraSecreta);
    
    for(let i=0; i< cantidadLetras; i++){
        const span = document.createElement("span");
        lineas.appendChild(span);
    }
}

function verificarLetraClicada(key){
    if (letras.length<1 || letras.indexOf(key)<0)
    {
        letras.push(key);
        return false;
    }
    else{
        letras.push(key);
        return true;
    }
}

document.onkeydown = (e) => {
    let letra = e.key.toLocaleUpperCase();
    if(!verificarLetraClicada(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra);
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
            for(let i = 0; i< palabraSecreta.length; i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i);
                }
            }
        }
    }
    else{
        if(!verificarLetraClicada(e.key)) return;
        adicionarLetraIncorrecta(letra);
        escribirLetraIncorrecta(letra, errores);
    }
};
