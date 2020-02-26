/*
Ejercicio 11: escribe un programa que pida al usuario un número entero positivo (mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número hasta cero, utilizando comas como separación.
*/

// Pedir al usuario que introduzca un número (prompt)
const numero = +prompt('Introduzca un número');

// Comprobar si es un número (isNaN)
if(!isNaN(numero)) {

  // cuenta atrás (for)
  let msg = '';

  for (let i = numero; i >= 0; i--) {  
     msg += (i === 0) ? 0 : i + ',';
  }

  console.log(msg);
}
else {
  console.log('No es un número');
}