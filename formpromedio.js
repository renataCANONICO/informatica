console.log("formpromedio.js cargado correctamente");

document.getElementById("formPromedio").addEventListener("submit", function(event) {
  event.preventDefault(); // evita recargar la página

  // Capturar las notas
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);

  // Validar que sean números válidos
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Por favor, ingresá solo números válidos.");
    return;
  }

  // Calcular el promedio
  const promedio = (n1 + n2 + n3) / 3;

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Tu promedio es ${promedio.toFixed(2)}.`;

  // Evaluar si aprueba o no
  if (promedio >= 6) {
    resultado.textContent += "  ¡Aprobado!";
    resultado.style.color = "green";
  } else {
    resultado.textContent += "  Desaprobado.";
    resultado.style.color = "red";
  }
});



