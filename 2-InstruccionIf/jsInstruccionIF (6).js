function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

		if (edad<13) 
		{
			mensaje="Usted es menor de edad.";
		}
		else
		{
			if (edad>17) 
			{
				mensaje="Usted es una persona mayor de edad.";
			}
			else
			{
				mensaje="Usted es un adolescente.";
			}
		}

	alert(mensaje);

}//FIN DE LA FUNCIÓN