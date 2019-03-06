function mostrar()
{
	var planeta=prompt("Ingrese un planeta.");
	var mensaje;

	switch(planeta)
	{
		case "tierra":
			mensaje="acá vivimos";
			break;
		case "venus":
		case "mercurio":
			mensaje="acá hace más calor";
			break;
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
			mensaje="acá hace más frio";
			break;
		default:
			mensaje="No es un planeta valido";
			break;
	}
	alert(mensaje);
}