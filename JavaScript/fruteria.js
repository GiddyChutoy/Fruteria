var arrayFrutas = ["", "", "", "", "", "", "", "", "", "", ""];
var arrayNombres = ["Plátano", "Cereza", "Uva", "Piña", "Paraguaya", "Manzana", "Pera", "Naranja", "Melocotón", "Kiwi", "Higo"]
var arrayPrecios = [1, 0.70, 0.60, 0.90, 2.30, 0.80, 1.80, 1.70, 1.30, 1.40, 1.50]
var dinero = 0;

//Las siguientes funciones sumarán kg a cada fruta
function quefruta(especie){
    let precio;
    if(especie == 0){
        precio = 1;
    }else if(especie == 5){
        precio = 0.80;
    }else if(especie == 2){
        precio = 0.60;
    }else if(especie == 8){
        precio = 1.30;
    }else if(especie == 6){
        precio = 1.80;
    }else if(especie == 4){
        precio = 2.30;
    }else if(especie == 3){
        precio = 0.90;
    }else if(especie == 9){
        precio = 1.40;
    }else if(especie == 1){
        precio = 0.70;
    }else if(especie == 10){
        precio = 1.50;
    }else if(especie == 7){
        precio = 1.70;
    }

    return precio;
}

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
        resumen.sort(function (elem1, elem2) {
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

//Aquí van las clases de las frutas de temporada y la clase padre fruta

//Función que generará los tipos de fruta


//Esta es la clase padre
class fruta{
    constructor(nombre, kilos){
        this.nombre = nombre;
        this.kilos = kilos;
    }
}

//Esta es la clase hija "verano" que tendrá nuevas propiedades
class verano extends fruta{
    constructor(nombre, kilos, proximidad, region){
        this.nombre = nombre;
        this.kilos = kilos;
        this.proximidad = proximidad;
        this.region = region;
    }
}

//Esta es la clase hija "invierno" que tendrá una nueva propiedad
class invierno extends fruta{ 
    constructor(nombre, kilos, nevera){
        this.nombre = nombre;
        this.kilos = kilos;
        this.nevera = nevera;
    }
}