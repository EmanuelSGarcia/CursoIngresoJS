function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;	
	var mensaje;

	numeroRandom= Math.floor((Math.random() * 10) + 1);
	numeroRandom= parseInt(numeroRandom);

	
	if (numeroRandom > 8)
	{
		mensaje= " EXCELENTE";
	}
	else 
		if (numeroRandom < 4) 
		{
			mensaje= " Vamos, la proxima se puede";
		}
		else 
			{
				mensaje= " APROBÓ";
			}
	alert(numeroRandom + mensaje);

}//FIN DE LA FUNCIÓN