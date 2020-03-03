/* 
Ejercicio 1: escribe un programa que dado dos string compruebe si los dos primeros caracteres son iguales.
*/

const str1 = 'Hola, cómo estás';
const str2 = 'Hola, bienvenido';

const primerCaracterStr1 = str1[0];
const primerCaracterStr2 = str2[0];

if(primerCaracterStr1 === primerCaracterStr2) {
  console.log('Son iguales'); 
}