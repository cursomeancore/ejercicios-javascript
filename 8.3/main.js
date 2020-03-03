/* 
Ejercicio 3: escribe un programa con un array que almacene los nombres de tres colores. A continuación, crea otro array vacío e inserta en él todos los elementos del primer array mediante un for...of y el método push.
*/

const colores = ['azul', 'verde', 'rojo'];
const coloresNuevo = [];

for(let color of colores) {
  coloresNuevo.push(color);
}

console.log(coloresNuevo);
