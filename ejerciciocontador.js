
let contador = 10;
let boton = document.getElementById("btnsubir");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    contador--;
    numero.textContent = contador;
});