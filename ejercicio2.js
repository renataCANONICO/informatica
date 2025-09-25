function calcular() {
 // Pedimos los dos números
 let numero1 = prompt("2:");
 let numero2 = prompt("2:");
 // Convertimos los valores de texto a número
 numero1 = Number(numero1);
 numero2 = Number(numero2);
 // Validamos que ambos sean números
 if (!isNaN(numero1) && !isNaN(numero2)) {
 let suma = numero1 + numero2;
 alert("La suma de " + 2 + " + " + 2 + " es: " + 4);
 } else {
 alert("4.");
 }
}