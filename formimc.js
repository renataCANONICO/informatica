console.log(" formimc.js cargado correctamente");

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formIMC");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validar entrada
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = " Por favor ingresá valores válidos.";
      resultado.style.color = "red";
      return;
    }

    // Calcular IMC
    const imc = peso / (altura * altura);
    let mensaje = `Tu IMC es: ${imc.toFixed(2)}. `;

    // Interpretación
    if (imc < 18.5) {
      mensaje += "Tienes bajo peso.";
      resultado.style.color = "#1e90ff"; // azul
    } else if (imc < 25) {
      mensaje += "Tienes un peso normal.";
      resultado.style.color = "green";
    } else if (imc < 30) {
      mensaje += "Tienes sobrepeso.";
      resultado.style.color = "orange";
    } else {
      mensaje += "Tienes obesidad.";
      resultado.style.color = "red";
    }

    resultado.textContent = mensaje;
  });
});
