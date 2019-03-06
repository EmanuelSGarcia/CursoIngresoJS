function mostrar()
{

	var clave =prompt("ingrese el número clave.");
	var mensaje="Su clave fue erronea, intente nueva mente."
	
	while(clave!="utn750")
	{
		clave=prompt(mensaje);
	}

	alert("Bienvenido.");

}//FIN DE LA FUNCIÓN
