function mostrar()
{
	var precio=prompt("Ingrese el precio.");
	var descuento=prompt("Ingrese el descuento.");

	descuento=precio*descuento/100;
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=elPrecioFinal
}
