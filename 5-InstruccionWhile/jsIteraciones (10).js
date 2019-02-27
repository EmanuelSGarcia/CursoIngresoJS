function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var positivo=0;
	var negativo=0;
	var contadorPositivo=0;
	var contadorCeros=0;
	var contadorNegativo=0;
	var respuesta=true;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var diferencia;
	var contadorPares=0;



	while(respuesta==true)
	{
		numero=prompt("Ingrese el numero.");
		numero=parseInt(numero);

		if (numero==0) 
		{
			contadorCeros++;
		}
		else
		{	
			if (numero>0) 
			{
				positivo=positivo+numero;
				contadorPositivo++;
				promedioPositivo=positivo/contadorPositivo;
			}
			
			else
			{
				negativo=negativo+numero;
				contadorNegativo++;
				promedioNegativo=negativo/contadorNegativo;
				
				if (numero%2==0) 
				{
					contadorPares++
				}
			}

		}		
		respuesta=confirm("¿Desea ingresar otro numero?");
		contador++;
	
	}

	diferencia=positivo+negativo

	document.write("<br>Suma de positivos "+positivo);
	document.write("<br>Numeros positivos ingresados "+contadorPositivo);
	document.write("<br>Promedio de numeros positivos "+promedioPositivo);
	document.write("<br>Suma de negativos "+negativo);
	document.write("<br>Numeros negativos ingresados "+contadorNegativo);
	document.write("<br>Promedio de numeros negativos "+promedioNegativo);
	document.write("<br>Cantidad de 0 ingresados "+contadorCeros);
	document.write("<br>Cantidad de números pares "+contadorPares);
	document.write("<br>Diferencia entre numeros negativos y positivos "+ diferencia)

}//FIN DE LA FUNCIÓN