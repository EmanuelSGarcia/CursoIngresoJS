function mostrar()
{	
	var cantidad;
	var precio;
	var descuento;
	var precioDescuento;
	var tipoDePago;
	var recargo;
	var recargoFinal;
	
	cantidad = prompt("¿Cuantos productos compro?");
	cantidad = parseInt(cantidad)

	precio = prompt("Ingrese el precio de su/s productos sumados: ");
	precio = parseInt(precio);

	if (cantidad ==1 ) 
	{

		tipoDePago = prompt("¿Que medio de pago utilizara?" , "Tarjeta/Efectivo");
		
		if (tipoDePago == "Tarjeta")
		{ 	

			else{alert("Usted estaria abonando: " + precio);
				
			}	
		}		
	}

	if (cantidad > 1 && precio < 1999) 
	{

		descuento = precio * 10 / 100;
		descuento = parseInt(descuento);

		precioDescuento= precio - descuento;

		alert("Usted estaria abonando: " + precio +" ,Aplicando su descuento valido del 10%, terminaria pagando: " + precioDescuento)

	}

	if(cantidad > 1 && precio >= 2000)
	 {
	 	tipoDePago = prompt("¿Que medio de pago utilizara?" , "Tarjeta/Efectivo");

	 	if (tipoDePago == "Efectivo") 
	 	{
	 		
		descuento = precio * 15 / 100;
		descuento = parseInt(descuento);

		precioDescuento= precio - descuento;

		alert("Usted estaria abonando: " + precio +" ,Aplicando su descuento valido del 15%, terminaria pagando: " + precioDescuento)
	 	}
	 	if (tipoDePago == "Tarjeta") 
	 	{
	 		descuento = precio * 15 / 100;
		descuento = parseInt(descuento);

		precioDescuento= precio - descuento;
		recargo= precio *10/100;
		recargo= parseInt(recargo);

		recargoFinal = precio + recargo

		alert("Usted estaria abonando: " + precio +" ,Aplicando su descuento valido del 15%, terminaria pagando: " + precioDescuento +" .Al abonar con tarjeta recive una recarga de: " + recargo +" ,Con un precio final de: " +recargoFinal);
	 	}
	 }
}
