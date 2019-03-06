function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	mensaje="Usted es un adolescente.";

		if (edad < 18) 
		{
			if (edad > 12) 
			{
				alert(mensaje);
			}
		}

}//FIN DE LA FUNCIÓN