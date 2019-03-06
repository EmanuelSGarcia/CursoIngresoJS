function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	mensaje="Usted es una persona mayor de edad.";

	if (edad>=18) 
		{
			alert(mensaje);
		};


}//FIN DE LA FUNCIÓN