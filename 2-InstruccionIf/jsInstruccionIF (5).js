function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	mensaje="Usted no es un adolescente";

		if (edad>12 && edad<18) 
			{

			}
			else
			{
				alert(mensaje);
			}

}//FIN DE LA FUNCIÓN