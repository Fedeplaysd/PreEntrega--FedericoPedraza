//Pedir el numero
let numero = prompt("Ingrese un numero del 1 al 10");

// Verificar si el numero es igual o mayor que 3
if (numero >= 3) {
	alert("Felicitaciones elegio el numero correcto!");
}
// Verificar si el numero es menor a 3
else {
	alert("ERROR :(:(:(:(");
}

//Ciclo con boton en index
let miBoton = document.getElementById("miBoton");

// Agregar un evento de clic al botón
miBoton.addEventListener("click", function () {
	// Algoritmo con un ciclo (for)
	for (i = 1; i <= 5; i++) {
		// Imprimir cada número en la consola
		console.log(i);
	}
});
