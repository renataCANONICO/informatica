console.log(" formbienvenida.js cargado correctamente");

document.getElementById("formBienvenida").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  // Capturar los datos del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const curso = document.getElementById("curso").value.trim();

  // Validar que no estén vacíos
  if (!nombre || !apellido || !curso) {
    alert("Por favor completá todos los campos.");
    return;
  }

  // Guardar los datos en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("curso", curso);

  // Redirigir a la página de bienvenida
  window.location.href = "bienvenida.html";
});
