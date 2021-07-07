/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let importe;
	let descuento;
	let nuevoimporte;


	importe = parseInt(document.getElementById("txtIdImporte").value);


	descuento = importe * .25;

	nuevoimporte = importe - descuento;

	document.getElementById("txtIdResultado").value = nuevoimporte;







	// Estrategia de resolucion
	// declaro las variables necesarias 
	// primero el codigo tiene que leer el importe
	// despues debe a ese importe agregarle un descuento
	// ahora se debe aplicar ese descuento
	// y por ultimo lo tiene que mostrar

}
