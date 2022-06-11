var tablero = document.getElementById("horca").getContext("2d");
var dibujos=0;

function dibujarLinea(x1,x2,y1,y2){
    tablero.linewidth=10;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.strokeStyle= "#0A3871";
    tablero.beginPath();
    tablero.moveTo(x1,y1);
    tablero.lineTo(x2,y2);
    tablero.stroke();
    tablero.closePath(); 
    dibujos+=1;

    
}

function dibujarCirculo(x,y,r){
    tablero.linewidth=10;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.strokeStyle= "#0A3871";
    tablero.beginPath();
    tablero.arc(x, y, r,0, 2* Math.PI);
    tablero.stroke()
}

function DibujarTexto(text,x,y){
    tablero.font="bold 40px inter";
    tablero.linewidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle= "#0A3871";
    
    tablero.fillText(text,x,y);
}

