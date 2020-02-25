/*
Ejercicio 3: escribe un programa que almacene tres ángulos de un triángulo en variables de tipo entero (angulo1, angulo2 y angulo3). Crea un condicional que compruebe si esos tres ángulos juntos pueden formar un triángulo (los ángulos de un triángulo suman siempre 180 grados).
*/

const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 91;

if(angulo1 + angulo2 + angulo3 === 180) {
  console.log('Es un triángulo');
} else {
  console.log('No es un triángulo');
}