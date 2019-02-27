function mostrar()
{
	var numero;
	var letra;
	var respuesta=true;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contador=0;
	var	promedioPositivos=0;
	var numeroMenor=0
	var numeroMayor=0
	var bandera


	while(respuesta==true)
	{
		numero=prompt("Ingrese su numero.");
		numero=parseInt(numero);
		letra=prompt("Ingrese su letra");

			while(isNaN(numero)==true || numero<-100||numero>100)
			{
				alert("Su numero ingresado no es correcto.");
				numero=prompt("Ingrese su numero");
			}
			/*while(isNaN(letra)==false)
			{
				alert("Su letra ingresada no es correcta.");
				numero=prompt("Ingrese su letra");
			}*/
		if (numero==0) 
		{
			contadorCeros++;
		}
		else
		{
			if (numero>0) 
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contador++;
				promedioPositivos=acumuladorPositivos/contador;
			}
			else
			{
				acumuladorNegativos=acumuladorNegativos+numero;
			}
			if (numero%2==0) 
			{
				contadorPares++;
			}
			else
			{
				contadorImpares++;
			}
		}
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
		respuesta=confirm("¿Desea ingresar otro dato?");
	}

	document.write("<br> La cantidad de numeros pares ingresados es: "+contadorPares);
	document.write("<br> La cantidad de números impares ingresados es: "+contadorImpares);
	document.write("<br> La cantidad de ceros ingresados es: "+contadorCeros);
	document.write("<br> El promedio de todos los números positivos ingresados es: "+promedioPositivos);
	document.write("<br> La suma de todos los números negativos"+ acumuladorNegativos);
	document.write("<br> El número y la letra del máximo y el mínimo")

}
