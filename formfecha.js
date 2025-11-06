console.log(" formFecha.js cargado correctamente");

document.getElementById("formFecha").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombreEvento = document.getElementById("evento").value.trim();
  const fechaEvento = new Date(document.getElementById("fecha").value);
  const hoy = new Date();

  // Validación: campo vacío o fecha inválida
  if (!nombreEvento || isNaN(fechaEvento)) {
    alert("Por favor, completá todos los campos correctamente.");
    return;
  }

  // Calcular diferencia en milisegundos
  const diferenciaMs = fechaEvento - hoy;

  // Convertir a días
  const diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

  const resultado = document.getElementById("resultado");

  if (diasRestantes > 0) {
    resultado.textContent = ` Faltan ${diasRestantes} días para ${nombreEvento}.`;
    resultado.style.color = "blue";
  } else if (diasRestantes === 0) {
    resultado.textContent = "¡Hoy es el día de ${nombreEvento}!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = ` El evento "${nombreEvento}" ya ocurrió.`;
    resultado.style.color = "red";
  }
});
