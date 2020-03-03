/* 
Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y sean mostrados en pantalla utilizando un bucle for clásico y un bucle for...of
*/

const array = []
for(let i=1; i<=6; i++) {
  array.push(i);
}

for(let elemento of array) {
  console.log(elemento);
}