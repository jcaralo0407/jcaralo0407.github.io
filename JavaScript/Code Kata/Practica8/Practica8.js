document.querySelector(".test").addEventListener("click", function (event) {
    event.stopPropagation();
    alert("click al boton");
}); 

/*document.addEventListener("contextmenu", function (event) {
    event.preventDefault();

    alert("menu contextual esta interveniendo");
});*/

window.addEventListener("click", function (event) {
    console.log("click en la ventana de la web");
});