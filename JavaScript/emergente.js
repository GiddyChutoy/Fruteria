window.onload = () => {
    let boton1 = document.getElementById("botonVolver");
    let boton2 = document.getElementById("botonTerminar");
    
    let abridor = window.opener;
    document.getElementById("elElegido").innerHTML = abridor.mostrarResumen();

    boton1.addEventListener("click", (event) => {
        window.close();
    }, false);

    boton2.addEventListener("click", (event) => {
        window.opener.document.getElementById("form1").submit();
        window.close();
    }, false);
};