function mostrar()
{

	// declarar variables
	var acumulador=0;
	var numero;
	var respuesta=true;
	var numeroMayor;
	var numeroMenor;
	var bandera=true

	while(respuesta!=false)
	{
		numero=prompt("Ingrese el numero.");
		numero=parseInt(numero);
		respuesta=confirm("Desea ingresar otro numero.");
		
		if (bandera==true) 
		{
			numeroMayor= numero;
			numeroMenor= numero;
			bandera=false;
		}
		else
		{
			if (numero>numeroMayor) 
			{
				numeroMayor=numero;
			}
			if (numero<numeroMenor) 
			{
				numeroMenor=numero;
			}	
		}
	}
	document.getElementById('maximo').value=numeroMayor;
	document.getElementById('minimo').value=numeroMenor;
}//FIN DE LA FUNCIÓN