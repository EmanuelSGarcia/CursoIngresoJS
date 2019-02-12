function mostrar()
{
//tomo la edad  

	var edad;
	var estado;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estado = document.getElementById('estadoCivil').value;

	if(edad > 17)
	{
		if (estado == "Soltero")
		{
			alert("Es soltero y no es menor.")
		}
	}


}//FIN DE LA FUNCIÓN