/* 
Ejercicio 4: escribe un programa que dado dos arrays, devuelva el número de elementos que son iguales.
*/

const colores1 = ['azul', 'verde', 'rojo'];
const colores2 = ['amarillo', 'rojo', 'negro'];

let coincidencias = 0;

for (const color1 of colores1) {
  for (const color2 of colores2) {
    coincidencias = color1 === color2 ? coincidencias + 1 : coincidencias;
  }
}

console.log(`Coincidencias: ${coincidencias}`);
