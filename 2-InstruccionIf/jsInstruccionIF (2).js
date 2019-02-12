function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es una persona mayor.");
	}



}//FIN DE LA FUNCIÓN