/* 
Ejercicio 1: escribe un programa que liste el nombre de las propiedades del siguiente objeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy", sclass : "VI", rollno : 12 }
*/

const objeto = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

// primera forma para iterar un objeto
for (const key in objeto) {
  console.log(key);
}

// segunda forma para iterar un objeto
for (const key of Object.keys(objeto)) {
  console.log(key);
}
