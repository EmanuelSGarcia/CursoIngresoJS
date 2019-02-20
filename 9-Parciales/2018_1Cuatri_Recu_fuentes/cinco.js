function mostrar()
{
	var precio;
	var medioPago;
	var paquete;
	var descuento;

	precio= prompt("¿Como desea abonar?")
	precio= parseInt(precio)
	medioPago=prompt("¿Como desea abonar?","visa / paypal / mercadopago / efectivo / otro");
	//paquete= prompt("¿Desea algun paquete?","todoincluido/")

	switch(medioPago)
	{
		case "visa":
		case "mercadopago":
			descuento = 10;
					break;
		case "paypal":
			descuento = 15;
					break;
		case "efectivo":
					break;
			descuento = 20;
		case "otro":
			descuento = 5;
					break;
	}
	




	precioFinal= precio - descuento;
	alert(precioFinal)
}
