/* 
Ejercicio 4: adaptar el ejercicio anterior para integrar el callback en la invocación de las cuatro funciones, en lugar de creándola como una función de callback por separado. Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.
*/

const sumar = (x, y, callback) => callback(x + y);

const restar = (x, y, callback) => callback(x - y);

const multiplicar = (x, y, callback) => callback(x * y);

const dividir = (x, y, callback) => callback(x / y);

const callback = (resultado) => {
  console.log(resultado);
}

sumar(1, 2, (resultado) => {
  console.log(resultado);
});

restar(1, 2, (resultado) => {
  console.log(resultado);
});

multiplicar(1, 2, (resultado) => {
  console.log(resultado);
});

dividir(1, 2, (resultado) => {
  console.log(resultado);
});