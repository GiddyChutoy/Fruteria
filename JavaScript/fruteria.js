var arrayFrutas = ["", "", "", "", "", "", "", "", "", "", ""];
var arrayNombres = ["Plátano", "Cereza", "Uva", "Piña", "Paraguaya", "Manzana", "Pera", "Naranja", "Melocotón", "Kiwi", "Higo"]
var arrayPrecios = [1, 0.70, 0.60, 0.90, 2.30, 0.80, 1.80, 1.70, 1.30, 1.40, 1.50]
var dinero = 0;

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

function sumar(fruta) {
    kilos = prompt("¿Cuántos kilos quieres de esta fruta?")
    arrayFrutas[fruta] = (arrayFrutas[fruta] + kilos);
    dinero = dinero + (kilos * quefruta(fruta));
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
        resumen[i] = arrayNombres[i] + " ------ " + arrayFrutas[i] + "Kg" + " ------ " + Number(arrayPrecios[i]).toFixed(2) + "€ " + " ------ " + Number(arrayPrecios[i] * arrayFrutas[i]).toFixed(2) + "€";
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
    pesoTotal = arrayFrutas[0] + arrayFrutas[1] + arrayFrutas[2] + arrayFrutas[3] + arrayFrutas[4] + arrayFrutas[5] + arrayFrutas[6] + arrayFrutas[7] + arrayFrutas[8] + arrayFrutas[9] + arrayFrutas[10];
    return "\n\nPrecio total: " + Number(Math.floor(dinero)).toFixed(2) + " €\nPrecio medio: " + Number(dinero / pesoTotal).toFixed(3) + " €/Kg";
}