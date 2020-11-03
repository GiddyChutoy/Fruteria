//var arrayFrutas = ["", "", "", "", "", "", "", "", "", "", ""];
//var arrayNombres = ["Plátano", "Cereza", "Uva", "Piña", "Paraguaya", "Manzana", "Pera", "Naranja", "Melocotón", "Kiwi", "Higo"]
//var arrayPrecios = [1, 0.70, 0.60, 0.90, 2.30, 0.80, 1.80, 1.70, 1.30, 1.40, 1.50]

//Aquí van las clases de las frutas de temporada y la clase padre fruta

//Esta es la clase padre
class fruta {
    constructor(nombre, kilos, precio) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precio = precio;
    }
}

//Esta es la clase hija "verano" que tendrá nuevas propiedades
class verano extends fruta {
    constructor(nombre, kilos, precio, proximidad, region) {
        super(nombre, kilos, precio);
        this.proximidad = proximidad;
        this.region = region;
    }
}

//Esta es la clase hija "invierno" que tendrá una nueva propiedad
class invierno extends fruta {
    constructor(nombre, kilos, precio, nevera) {
        super(nombre, kilos, precio);
        this.nevera = nevera;
    }
}

//Funciones para las frutas de verano e invierno
function getVerano(){
    let ventana = window.open("", "verano", "width=500px")
    for(i = 0; i < arrayObjetos.length; i++){
        if(arrayObjetos[i].kilos > 0 && arrayObjetos[i].proximidad){
            ventana.document.write("Las/Los " + arrayObjetos[i].nombre + " son fruta de verano, de " + arrayObjetos[i].proximidad + " y están recogidas en " + arrayObjetos[i].region + ".\n\n")
        }
    }
}

function getInvierno(){
    let ventana = window.open("", "verano", "width=500px")
    for(i = 0; i < arrayObjetos.length; i++){
        if(arrayObjetos[i].kilos > 0 && arrayObjetos[i].nevera){
            ventana.document.write("Las/Los " + arrayObjetos[i].nombre  + " son frutas de inverno y es recomendable conservarlas " + arrayObjetos[i].nevera + " de la nevera.\n\n")
        }
    }
}

//Objetos fruta
var platano = new verano("Plátano", 0, 1, "lejanía", "Canarias");
var manzana = new invierno("Manzana", 0, 0.8, "fuera");
var uvas = new invierno("Uvas", 0, 0.60, "dentro");
var melocoton = new verano("Melocotón", 0, 1.30, "lejanía", "Barcelona");
var pera = new invierno("Pera", 0, 1.8, "dentro");
var paraguaya = new verano("Paraguaya", 0, 2.3, "Lejanía", "Paraguay");
var pina = new verano("Piña", 0, 0.9, "lejanía", "Venezuela");
var kiwi = new verano("Kiwi", 0, 1.4, "lejanía", "Australia");
var cereza = new verano("Cereza", 0, 0.7, "cercanía", "Badajoz");
var higo = new verano("Higo", 0, 1.5, "cercanía", "Salamanca");
var naranja = new invierno("Naranja", 0, 1.7, "fuera");

//Array Objetos Fruta
var arrayObjetos = [platano, manzana, uvas, melocoton, pera, paraguaya, pina, kiwi, cereza, higo, naranja];

//Sumar los kilos de los objetos cuando se pulsa la imagen de la fruta
function sumar(fruta) {
    let kilos = prompt("¿cuántos Kilos quieres?");
    kilos = Number(kilos);

    switch (fruta) {
        case "platano":
            arrayObjetos[0].kilos = arrayObjetos[0].kilos + kilos;
            break;
        case "manzana":
            arrayObjetos[1].kilos = arrayObjetos[1].kilos + kilos;
            break;
        case "uvas":
            arrayObjetos[2].kilos = arrayObjetos[2].kilos + kilos;
            break;
        case "melocoton":
            arrayObjetos[3].kilos = arrayObjetos[3].kilos + kilos;
            break;
        case "pera":
            arrayObjetos[4].kilos = arrayObjetos[4].kilos + kilos;
            break;
        case "paraguaya":
            arrayObjetos[5].kilos = arrayObjetos[5].kilos + kilos;
            break;
        case "piña":
            arrayObjetos[6].kilos = arrayObjetos[6].kilos + kilos;
            break;
        case "kiwi":
            arrayObjetos[7].kilos = arrayObjetos[7].kilos + kilos;
            break;
        case "cerezas":
            arrayObjetos[8].kilos = arrayObjetos[8].kilos + kilos;
            break;
        case "higo":
            arrayObjetos[9].kilos = arrayObjetos[9].kilos + kilos;
            break;
        case "naranja":
            arrayObjetos[10].kilos = arrayObjetos[10].kilos + kilos;
            break;
    }
}

function mostrarResumen() {
    let textarea = document.getElementById("resumen");
    let fecha = document.createTextNode(new Date() + "\n\n");
    let resumen = document.createTextNode(resumir());
    let precioTotal = document.createTextNode(precioGeneral() + "\n\n");
    textarea.appendChild(fecha);
    textarea.appendChild(resumen);
    textarea.appendChild(precioTotal);

}

//Junta todo los datos que necesitamos
function resumir() {
    let resumen = new Array();
    let final;
    for (i = 0; i < arrayObjetos.length; i++) {
        resumen[i] = arrayObjetos[i].nombre + " ------ " + arrayObjetos[i].kilos + "Kg" + " ------ " + Number(arrayObjetos[i].precio).toFixed(2) + "€ " + " ------ " + Number(arrayObjetos[i].precio * arrayObjetos[i].kilos).toFixed(2) + "€";
        resumen.sort(function(elem1, elem2) {
            if (elem1.toLocaleLowerCase() > elem2.toLocaleLowerCase()) {
                return -1;
            }
            if (elem1.toLocaleLowerCase() < elem2.toLocaleLowerCase()) {
                return +1;
            }
            return 0;
        });
        final = resumen.join("\n");
    }

    return final;

}

//Esta función nos dará el resultado monetario final
function precioGeneral() {
    pesoTotal = 0;
    for (i = 0; i < arrayObjetos.length; i++) {
        pesoTotal = pesoTotal + arrayObjetos[i].kilos;
    }

    precioTotal = 0;
    for (i = 0; i < arrayObjetos.length; i++) {
        if(arrayObjetos[i].kilos > 0){
            precioTotal = precioTotal + (arrayObjetos[i].precio * arrayObjetos[i].kilos);
        }
    }

    return "\n\nPrecio total: " + Number(Math.floor(precioTotal)).toFixed(2) + " €\nPrecio medio: " + Number(precioTotal / pesoTotal).toFixed(3) + " €/Kg";
}