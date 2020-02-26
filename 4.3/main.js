/* 
Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas de desarrollador --> Source) para comprobar cómo se ejecuta el programa.
*/

const sumar = (x, y, callback) => {
  callback(x + y);
}

const restar = (x, y, callback) => {
  callback(x - y);
}

const multiplicar = (x, y, callback) => {
  callback(x * y);
}

const dividir = (x, y, callback) => {
  callback(x / y);
}


const callback = (resultado) => {
  console.log(resultado);
}

sumar(1, 2, callback);
restar(1, 2, callback);
multiplicar(1, 2, callback);
dividir(1, 2, callback);