function mostrar()
{
//tomo la edad  
	var edad;
	var mensajeMenor;
	var mensajeMayor;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	mensajeMayor="Usted es una persona mayor de edad.";
	mensajeMenor="Usted es una persona menor de edad.";

	if (edad>=18) 
		{
			alert(mensajeMayor);
		}
		else
		{
			alert(mensajeMenor);
		}
}//FIN DE LA FUNCIÓN