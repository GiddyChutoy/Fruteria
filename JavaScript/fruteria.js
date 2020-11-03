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

//Objetos fruta
var platano = new verano("Plátano", 0, 1, "lejanía", "Canarias");
var manzana = new invierno("Manzana", 0, 0.8, "fuera");
var uvas = new verano("Uvas", 0, 0.60, "cercanía", "Salamanca");
var melocoton = new verano("Melocotón", 0, 1.30, "lejanía", "Barcelona");
var pera = new verano("Pera", 0, 1.8, "cercanía", "Zamora");
var paraguaya = new verano("Paraguaya", 0, 2.3, "Lejanía", "Paraguay");
var pina = new verano("Piña", 0, 0.9, "lejanía", "Venezuela");
var kiwi = new verano("Kiwi", 0, 1.4, "lejanía", "Australia");
var cereza = new verano("Cereza", 0, 0.7, "cercanía", "Badajoz");
var higo = new verano("Higo", 0, 1.5, "cercanía", "Salamanca");
var naranja = new verano("Naranja", 0, 1.7, "Cercanía", "Valladolid");

//Array Objetos Fruta
var arrayObjetos = [platano, manzana, uvas, melocoton, pera, paraguaya, pina, kiwi, cereza, higo, naranja];

//Sumar los kilos de los objetos cuando se pulsa la imagen de la fruta
function sumar(fruta) {
    let kilos = prompt("¿cuántos Kilos quieres?");
    kilos = Number(kilos);

    switch (fruta) {
        case "platano":
            arrayObjetos[0] = arrayObjetos[0] + kilos;
            break;
        case "manzana":
            arrayObjetos[1] = arrayObjetos[1] + kilos;
            break;
        case "uvas":
            arrayObjetos[2] = arrayObjetos[2] + kilos;
            break;
        case "melocoton":
            arrayObjetos[3] = arrayObjetos[3] + kilos;
            break;
        case "pera":
            arrayObjetos[4] = arrayObjetos[4] + kilos;
            break;
        case "paraguaya":
            arrayObjetos[5] = arrayObjetos[5] + kilos;
            break;
        case "piña":
            arrayObjetos[6] = arrayObjetos[6] + kilos;
            break;
        case "kiwi":
            arrayObjetos[7] = arrayObjetos[7] + kilos;
            break;
        case "cerezas":
            arrayObjetos[8] = arrayObjetos[8] + kilos;
            break;
        case "higo":
            arrayObjetos[9] = arrayObjetos[9] + kilos;
            break;
        case "naranja":
            arrayObjetos[10] = arrayObjetos[10] + kilos;
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
    for (i = 0; i < arrayNombres.length; i++) {
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
        precioTotal = precioTotal + arrayObjetos[i].precio;
    }

    return "\n\nPrecio total: " + Number(Math.floor(precioTotal)).toFixed(2) + " €\nPrecio medio: " + Number(precioTotal / pesoTotal).toFixed(3) + " €/Kg";
}