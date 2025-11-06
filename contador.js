let contador = 10;

function restar() {
  if (contador > 0) {
    contador--;
    document.getElementById("contador").textContent = contador;
  } else {
    alert("El contador llegó a 0");
  }
}
