function mostrar()
{
	var planeta;
	var mensaje;

	planeta= prompt("Por favor ingrese un planeta" );

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje = "acá hace más calor";
					break;
		case "tierra": 
			mensaje = "acá vivimos";
					break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje =  "acá hace más frio";
					break;
	}
	alert(mensaje);
}	
