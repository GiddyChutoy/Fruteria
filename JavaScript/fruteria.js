var arrayFrutas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayNombres = ["Platano", "Cereza", "Uva", "Piña", "Paraguaya", "Manzana", "Pera", "Naranja", "Melocoton", "Kiwi", "Higo"]
var dinero = 0;

//Las siguientes funciones sumarán kg a cada fruta
function sumarPlatanos() {
    arrayFrutas[0] = (++arrayFrutas[0]);
    dinero = dinero + 1;
}

function sumarCerezas() {
    arrayFrutas[1] = (++arrayFrutas[1]);
    dinero = dinero + 0.70;
}

function sumarUvas() {
    arrayFrutas[2] = (++arrayFrutas[2]);
    dinero = dinero + 0.60;
}

function sumarPiña() {
    arrayFrutas[3] = (++arrayFrutas[3]);
    dinero = dinero + 0.90;
}

function sumarParaguaya() {
    arrayFrutas[4] = (++arrayFrutas[4]);
    dinero = dinero + 2.30;
}

function sumarManzana() {
    arrayFrutas[5] = (++arrayFrutas[5]);
    dinero = dinero + 0.80;
}

function sumarPera() {
    arrayFrutas[6] = (++arrayFrutas[6]);
    dinero = dinero + 1.80;
}

function sumarNaranja() {
    arrayFrutas[7] = (++arrayFrutas[7]);
    dinero = dinero + 1.70;
}

function sumarMelocoton() {
    arrayFrutas[8] = (++arrayFrutas[8]);
    dinero = dinero + 1.30;
}

function sumarKiwi() {
    arrayFrutas[9] = (++arrayFrutas[9]);
    dinero = dinero + 1.40;
}

function sumarHigos() {
    arrayFrutas[10] = (++arrayFrutas[10]);
    dinero = dinero + 1.50;
}

function mostrarResumen() {
    let textarea = document.getElementById("resumen");
    let resumen = document.createTextNode(resumir());
    let precioTotal = document.createTextNode(precioGeneral());
    textarea.appendChild(resumen);
    textarea.appendChild(precioTotal);

}

//Junta todo los datos que necesitamos
function resumir() {
    let resumen = new Array();
    let final;
    for (i = 0; i < arrayNombres.length; i++) {
        resumen[i] = arrayNombres[i] + " ------ " + arrayFrutas[i] + "Kg";
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
    return "\n\nPrecio total: " + dinero + " €\nPrecio medio: " + dinero / pesoTotal + " €/Kg";
}
