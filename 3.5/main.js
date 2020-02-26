/* 
Ejercicio 7: escribe un programa que dado tres números imprima por pantalla cuál es el mayor.
*/

const numero1 = 13;
const numero2 = 5;
const numero3 = 4;

if((numero1 > numero2) && (numero1 > numero3)) {
  console.log(`El número1 ${numero1} es el mayor`);
} else if((numero2 > numero3) && (numero2 > numero1)) {
  console.log(`El número2 ${numero2} es el mayor`);
} else if((numero3 > numero1) && (numero3 > numero2)) {
  console.log(`El numero3 ${numero3} es el mayor`);
}