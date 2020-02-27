/* 
Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2 segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos para dividir (para la función dividir). Añadir un console.log en la última línea del código del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.
*/


// función sumar
const sumar = (a, b, callback) => {

  setTimeout(() => {
    const resultado = a + b;
    callback(resultado);
    
  }, 1000);
};

// función restar
const restar = (a, b, callback) => {

  setTimeout(() => {
    const resultado = a - b;
    callback(resultado);
    
  }, 2000);
};

// función multiplicar
const multiplicar = (a, b, callback) => {

  setTimeout(() => {
    const resultado = a * b;
    callback(resultado);
    
  }, 3000);
};

// función dividir
const dividir = (a, b, callback) => {

  setTimeout(() => {
    const resultado = a / b;
    callback(resultado);
    
  }, 4000);
};

const a = 4;
const b = 3;

// invocación a la función sumar
sumar(a, b, (resultado) => {
  console.log(`El resultado de sumar ${a} y ${b} es ${resultado}`);
});

// invocación a la función restar
restar(a, b, (resultado) => {
  console.log(`El resultado de restar ${a} y ${b} es ${resultado}`);
});

// invocación a la función multiplicar
multiplicar(a, b, (resultado) => {
  console.log(`El resultado de multiplicar ${a} y ${b} es ${resultado}`);
});

// invocación a la función dividir
dividir(a, b, (resultado) => {
  console.log(`El resultado de dividir ${a} y ${b} es ${resultado}`);
});