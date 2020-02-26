/* 
Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.
*/

const sumar = (x, y) => {
  return x + y;
}

const restar = (x, y) => {
  return x - y;
}

const multiplicar = (x, y) => {
  return x * y;
}

const dividir = (x, y) => {
  return x / y;
}

console.log(sumar(1, 2));
console.log(restar(1, 2));
console.log(multiplicar(1, 2));
console.log(dividir(1, 2));
