function mostrar()
{	
 	var precio; 
 	var resultadoTarjeta;
 	var resultadoFinal;

 	precio = document.getElementById('elNombre').value;
 	precio = parseInt(precio);

 	resultadoTarjeta = precio * 10 / 100;
 	resultadoFinal = precio + resultadoTarjeta;
 	alert("El precio del producto en efectivo es: $" + precio + "; con tarjeta tiene un recargo del 10% que seria $" + resultadoTarjeta + " de recargo, costandole final $" + resultadoFinal);

}