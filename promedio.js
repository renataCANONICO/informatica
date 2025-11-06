function calcularPromedio() {
  let nota1 = prompt("Ingresa la primera nota:");
  let nota2 = prompt("Ingresa la segunda nota:");
  let nota3 = prompt("Ingresa la tercera nota:");

  nota1 = Number(nota1);
  nota2 = Number(nota2);
  nota3 = Number(nota3);
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, ingresa solo números válidos.");
    return;
  }

  // Calculamos el promedio
  const promedio = (nota1 + nota2 + nota3) / 3;

  // Mostramos resultado
  if (promedio >= 6) {
    alert(" Aprobado con promedio: " + promedio.toFixed(2));
  } else {
    alert("Desaprobado con promedio: " + promedio.toFixed(2));
  }
}
