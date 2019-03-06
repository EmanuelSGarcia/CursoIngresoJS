function mostrar()
{
//tomo la edad  

	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	mensaje="niña bonita";

	if (edad==15) 
		{
			alert(mensaje);
		}
}//FIN DE LA FUNCIÓN