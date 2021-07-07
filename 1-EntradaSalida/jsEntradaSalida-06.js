/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {

	// declaracion de variables
	let numero1;
	let numero2;
	let suma;
	


	// levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );
	//numero1 = parseInt(numero1); //esta es la otra forma si le agrego esto y le saco el parseInt arriba
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );
	//numero2 = parseInt(numero2); 





	// realizo la operacion
	suma = numero1 + numero2;



	// muestro el resultado 
	alert("La suma es " + suma);
}

