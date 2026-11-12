/*
Con funcion (Sin problemas)
function printName() {
    let name = "Juan";
    let surname = "Carmona";

    if (name === "Juan"){
        console.log(surname);
    }
}

printName();
*/

//Sin funcion (Problema de alcance)
let name = "Juan";

if (true) {
    let text = "Mi nombre es Juan";
}

console.log(name);