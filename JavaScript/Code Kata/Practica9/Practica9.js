let inputName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector(".boton");

//console.log(inputName, buttonSaluda);

buttonSaluda.addEventListener("click", function (event) {
    if (inputName.value !== "") {
        alert("Hola " + inputName.value + "!!!!");
        inputName.value = "";
    }
});