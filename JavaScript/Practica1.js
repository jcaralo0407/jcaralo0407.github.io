/*Error al declarar una variable (Salta error al ejecutar)
let 2023;

//Variable indefinida (No salta error al ejecutar)
let year;

console.log(year);
*/

// Reserva un espacio de memoria para town pero no ha sido definido.
console.log(town);

let city = "Granada";
var town = "Zaidin;"
const year = "2026";

console.log(city, town, year);

town = "Sur";
//year = "2025"; //Salta fallo por intentar cambiar valor a una constante

console.log(town, year);