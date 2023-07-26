let letraPrincipal;
let mensajeFinal = "";
let continuarSolicitando = true;
const maxCaracteres = 10;

do {
    letraPrincipal = prompt("Ingresa una letra. Para dejar de solicitar letras, simplemente selecciona 'Cancelar' o ingresa una cadena vacía.");

    if (letraPrincipal === "" || letraPrincipal === null) {
        continuarSolicitando = false;
    } else if (/^[a-zA-Z]$/.test(letraPrincipal)) {
        mensajeFinal += letraPrincipal;
    } else {
        alert("Ingresa solo letras individuales.");
    }

    if (mensajeFinal.length >= maxCaracteres) {
        alert("Has alcanzado el límite máximo de " + maxCaracteres + "caracteres.");
        continuarSolicitando = false;
    }
} while (continuarSolicitando);

if (mensajeFinal.length > 0) {
    alert("El mensaje final es: " + mensajeFinal);
    console.log("El mensaje final es: " + mensajeFinal);
} else {
    alert("No se ingresaron letras.");
    console.log("No se ingresaron letras.");
}