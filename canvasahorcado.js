function dibujar (){
    var canvas = document.getElementById("ahorcado");
    if (canvas.getContext){
        var ctx = canvas.getContext("2d");
        
        //horca
        ctx.beginPath();
        ctx.moveTo(100, 700);
        ctx.lineTo(400, 700);
        ctx.stroke()
        ctx.moveTo(250, 700);
        ctx.lineTo(250, 100);
        ctx.stroke();
        ctx.moveTo(250, 100);
        ctx.lineTo(600, 100);
        ctx.stroke(); 
        ctx.moveTo(600, 100);
        ctx.lineTo(600, 150);
        ctx.stroke();
        
        if (vidas <= 5){//cabeza
            ctx.beginPath();
            ctx.arc(600, 200, 50, 0, Math.PI*2);
            ctx.stroke();
        }
        if (vidas <= 4){//cuerpo
            ctx.beginPath();
            ctx.moveTo(600, 250);
            ctx.lineTo(600, 500);
            ctx.stroke();
        }
        if (vidas <= 3){//brazo izq
            ctx.beginPath();
            ctx.moveTo(600, 270);
            ctx.lineTo(500, 350);
            ctx.stroke();
        }
        if (vidas <= 2){//brazo der
            ctx.beginPath();
            ctx.moveTo(600, 270);
            ctx.lineTo(700, 350);
            ctx.stroke();
        }
        if (vidas <= 1){//pierna izq
            ctx.beginPath();
            ctx.moveTo(600, 500);
            ctx.lineTo(500, 700);
            ctx.stroke();
        }
        if (vidas == 0){//pierna izq
            ctx.beginPath();
            ctx.moveTo(600, 500);
            ctx.lineTo(700, 700);
            ctx.stroke();
        }
    }
}