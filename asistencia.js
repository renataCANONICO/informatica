function verificarAsistencia() {
  const nombre = prompt("¿Cuál es tu nombre?");
  let respuesta = prompt("¿Vas a asistir a la fiesta de fin de año? (sí/no)");
  if (respuesta) {
    respuesta = respuesta.toLowerCase();
  }

  if (respuesta === "sí" || respuesta === "si") {
    alert("¡Genial, " + nombre + "! Te esperamos en la fiesta de fin de año.");
  } else if (respuesta === "no") {
    alert("Qué lástima, " + nombre + ". ¡Esperamos verte en la próxima!");
  } else {
    alert(" Por favor, responde con 'sí' o 'no'.");
  }
}
