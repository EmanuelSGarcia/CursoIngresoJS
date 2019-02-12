function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if (edad > 17) 
	{
		alert("Usted no es un/a adolecente.");
	}
	if (edad < 13) 
	{
		alert("Usted no es un/a adolecente.");
	}
	if (edad < 18) 
	{
		if (edad > 12) 
		{
			alert("Usted es un/a adolecente.");
		}
	}

}//FIN DE LA FUNCIÓN