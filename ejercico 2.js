
let contador = 0;
let boton = document.getElementById("btnsubir");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    contador++;
    numero.textContent = contador;
});