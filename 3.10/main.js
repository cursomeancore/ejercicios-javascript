/*
Ejercicio 10: escribe un programa que pida al usuario una palabra (mediante la función prompt) y lo muestre por pantalla 10 veces.
*/

const datos = prompt('asdjklfhaKLDFHLAKSJDFHASKLJFHIntroduzca algo');

for (let i = 1; i<datos.length; i++) {
  console.log(`${i}: ${datos[i]}`);
}