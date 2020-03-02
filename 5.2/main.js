/* 
Ejercicio 2: escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. A continuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.
*/

const objeto = {
  x: 1,
  y: 2
};

// borrar la propiedad x del objeto
delete(objeto.x);
objeto.z = 5; 

console.log(objeto);
