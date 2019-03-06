function mostrar()
{
//tomo la edad  
	
	var edad;
	var estadoCivil;
	var mensaje;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

		if (edad<18) 
		{
			if (estadoCivil!="Soltero") 
			{

			}
		}
		else
		{
			if (estadoCivil=="Soltero") 
			{
				mensaje="Es soltero y no es menor."
			}
		}

	 alert(mensaje);
}//FIN DE LA FUNCIÓN