/* 
Ejercicio 5: escribe un programa que extraiga una porción del array a partir de una posición inferior y una superior y lo almacene en otro array.
*/


const extraer = (array, posicionInferior, posicionSuperior) => {

  // comprueba que la posicionInferior no sea igual o mayor que la posicionSuperior
  if (posicionInferior >= posicionSuperior) {
    return [];
  }

  // comprueba que la posicionInferior no sea mayor que la posición final del array
  if (posicionInferior > array.length - 1) {
    return [];
  }

  return array.slice(posicionInferior, posicionSuperior + 1);
};

const colores = ['azul', 'amarillo', 'verde', 'blanco', 'negro', 'rojo'];

console.log(extraer(colores, 1, 2));
console.log(extraer(colores, 3, 2));
console.log(extraer(['a', 'b', 'c'], 1, 2));
console.log(extraer([], 1, 2));