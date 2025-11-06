function jugar() {

  const numeroSecreto = 7;
  let intento = prompt("Adivina el número secreto (entre 1 y 10):");
  intento = Number(intento);

  if (isNaN(intento)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }
  if (intento === numeroSecreto) {
    alert("¡Felicitaciones! Adivinaste el número secreto.");
  } else {
    alert("No es correcto. El número secreto era " + numeroSecreto + ".");
  }
}
