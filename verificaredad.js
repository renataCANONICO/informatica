function verificarEdad() {
  let edad = prompt("Por favor, ingresa tu edad:");
 edad = Number(edad);
  if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido.");
    return; 
  }
  if (edad >= 18) {
    alert("Acceso permitido. Sos mayor de edad.");
  } else {
    alert("Acceso denegado. Sos menor de edad.");
  }
}
