/* 
Ejercicio 2: escribe un programa que dado dos string compruebe si los dos primeros caracteres y los dos últimos son iguales.
*/

const comprobarCaracter = (str1, str2, posicion1, posicion2) => {
  if(str1[posicion1] === str2[posicion2]) {
    return true;
  }
  return false;
}

const str1 = 'Hola, cómo estás';
const str2 = 'Hola, bienvenidos';

const coincidenciaPrimer = comprobarCaracter(str1, str2, 0, 0);
const coincidenciaUltimo = comprobarCaracter(
  str1, str2, str1.length - 1, str2.length - 1);

(coincidenciaPrimer && coincidenciaUltimo) 
  ? console.log('Son iguales') : console.log('No son iguales');

// if(coincidenciaPrimer && coincidenciaUltimo) {
//   console.log('Son iguales');
// }
// else {
//   console.log('No son iguales');
// }

