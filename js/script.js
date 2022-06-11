if(screen.width>480){
    
    var diccionario=[
        "ANDAR","CORRER","CAMINAR","CANTAR","AYUDAR","ANDAR","BUS","MAR","CAMINO","CUANTO","CUANDO","HACER","DECIR","CABALLO","VACA","OBEJA","FABRICAR","FACHADA","GABACHA","GACELA","GABINETE","DALMATA","HABANA","IDEAR","LABIOS","LABOR","MANZANA","PERA","ORBE","QUEBRADO","PABELLON","RABANO","TOMATE","RABIA","SABANA","SAL","SALERO","TABASCO","CIRCO","ABREVIAR","ABORIGEN","ACOGEDOR","ADJETIVO","ADJUNTAR","AGRICOLA","APRECIAR","ARBITRO","BARBACOA","CONSULTA","DIMINUTO","DICTAMEN","DISOLVER","ELEVADOR","ENSALADA","ESCAPE","ESTUDIAR","EXPULSAR","FAVORITO","FESTEJAR","GENEROSO","GUITARRA","GRABADOR","GABINETE","HOSPITAL","HUMILDAD","ILUSTRAR","IMAGINAR","INVASION","LANGOSTA","LUCHADOR","MAGNOLIA","OBELISCO","PERFECTO","PRESTAMO","PROVOCAR","RESERVAR","SENCILLO","SERVICIO","TABURETE","TORNILLO","VAINILLA","VARIEDAD","TRADUCIR","TRAVESIA"
    ];

    var drawCoordenate=400;

    var tablero = document.getElementById("horca").getContext("2d");
    var letras = [];
    var palabraCorrecta = "";
    var errores = 11;
    var intentos = 0;
    


    function escogerPalabraSecreta(){
    var  palabra = diccionario[Math.floor(Math.random()*diccionario.length)];
    palabraSecreta = palabra;
   
    return palabra;
    }

    function dibujarLineasLetras(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500+(ancho*i),640);
        tablero.lineTo(550+(ancho*i),640);

        tablero.stroke();
        tablero.closePath();
    }
}

    dibujarLineasLetras(escogerPalabraSecreta()); 

    function escribirLetraCorrecta(index){
        tablero.font="bold 52px inter";
        tablero.linewidth=6;
        tablero.lineCap="round";
        tablero.lineJoin="round";
        tablero.fillStyle= "#0A3871";
        var ancho=600/palabraSecreta.length;
        tablero.fillText(palabraSecreta[index], 505+((ancho*index)),620);
        intentos+=1;
        
    }

    function escribirLetraIncorrecta(letra,errores){
        tablero.font = "bold 40px Inter";
        tablero.linewidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#0A3871";

        tablero.fillText(letra, 535+(40*(10-errores)),710,40);
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

    function adicionarLetraCorrecta(index){
        palabraCorrecta+= palabraSecreta[index].toUpperCase();
        
    }

    function adicionarLetraIncorrecta(letra){
        if (palabraSecreta.indexOf(letra)<=0)
    {
        errores-=1;
    }}

    

    document.onkeydown=(e)=>{
        
        let letra=e.key.toUpperCase();
        if(!verificarLetraClicada(e.key)&&(errores!=0)){        
            if(palabraSecreta.includes(letra)){       
                adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
                for(let i=0; i<palabraSecreta.length;i++){
                    if(palabraSecreta[i]==letra){
                        escribirLetraCorrecta(i);   
                    }
              }
            }                        
            else{
                //if(!verificarLetraClicada(e.key)) return
                adicionarLetraIncorrecta(letra);
                escribirLetraIncorrecta(letra,errores);
            }

            if(intentos==palabraSecreta.length){
                alert ("Fin del juego, ha ganado, la palabra era: " + palabraSecreta);
                location.reload();
            }       
        }
        if(errores==10){
            dibujarLinea(500,1050,550,550);
        }

        if(errores==9){
            dibujarLinea(680,680,50,550);
        }

        if(errores==8){
            dibujarLinea(850,680,50,50);
        }

        if(errores==7){
            dibujarLinea(850,850,50,150);
        }

        if(errores==(6)){
            dibujarCirculo(850,200,50);
        }
        if(errores==(5)){
            dibujarLinea(850,850,250,350);
        }
        if(errores==(4)){
            dibujarLinea(850,805,350,425);
        }
        if(errores==(3)){
            dibujarLinea(850,900,350,425);
        }
        if(errores==(2)){
            dibujarLinea(850,805,275,350);
        }
        if(errores==(1)){
            dibujarLinea(850,900,275,350);
        }

        if(errores==0){
            dibujarLinea(750,950,260,260);
            alert("Fin del juego, ha perdido, la palabra era: " + palabraSecreta);
            location.reload()     
        }
    };

    
}

