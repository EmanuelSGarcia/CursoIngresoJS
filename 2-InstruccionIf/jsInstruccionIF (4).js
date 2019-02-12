function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if (edad < 18) 
	{
		if (edad > 12) 
		{
			alert("Usted es un/a adolecente.");
		}
	}

}