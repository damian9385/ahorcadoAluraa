let palabras = ["ALURA", "ONE", "CHALLENGE", "AHORCADO","ORACLE","LATAM","DEVELOPERS","CANVAS"];
let palabraOculta = "";
let palabraAdivinar = "";
let vidas = 6;

document.getElementById("iniciar-juego").addEventListener("click", iniciar);
document.getElementById("boton").addEventListener("click", comprobar);
document.getElementById("nueva-palabra").addEventListener("click", agregarPalabra);

function iniciar(){ //inicia juego
    palabraOculta = palabras[Math.floor(Math.random()*palabras.length)];
    for(let i = 0; i < palabraOculta.length; i++){
        palabraAdivinar = palabraAdivinar + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdivinar;
}

function comprobar (){//comprueba las letras ingresadas
    let letra = document.getElementById("letra").value.toUpperCase();
    palabraOculta = palabraOculta.toUpperCase();
    let nuevo = "";
    for (let i = 0; i < palabraOculta.length; i++){
        if (letra == palabraOculta[i]){
            nuevo = nuevo + letra + " ";
        }else{
            nuevo = nuevo + palabraAdivinar[i*2] + " ";
        }
        if(nuevo==palabraAdivinar){
            vidas--;
            document.getElementById("vida").innerHTML= "El numero de vidas que quedan son : " + vidas;
        }
    }
    palabraAdivinar = nuevo;
    document.getElementById("frase").innerHTML = palabraAdivinar;

    if (vidas==0){
        alert("PERDISTE. LA PALABRA ERA " + palabraOculta);
        location.reload();
    }
    if (palabraAdivinar.search("_")==-1){
        alert("GANASTE!");
        location.reload();
    }
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
    dibujar();
}

function agregarPalabra (){
    let nuevaPalabra = document.getElementById("input-nueva-palabra").value.toUpperCase();
    if(palabras.includes(nuevaPalabra)){
        alert("PALABRA EXISTENTE. INTENTE DE NUEVO");
    }else{
        palabras.push(nuevaPalabra);
        alert("PALABRA INGRESADA CORRECTAMENTE")
    }  
    document.getElementById("input-nueva-palabra").value = "";
    document.getElementById("input-nueva-palabra").focus();
}