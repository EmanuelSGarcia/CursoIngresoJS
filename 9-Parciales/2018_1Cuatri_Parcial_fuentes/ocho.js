function mostrar()
{
	var letra;
	var numero;
	var bandera=false;
	var respuesta=true;
	var contador0=0;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorPositivos=0;
	var acumuladorNegativos=0;
	var numeroMaximo;
	var numeroMinimo;
	var letranumeroMinimo;
	var letranumeroMaximo;

	while(respuesta==true)
	{
		numero=prompt("Ingrese su numero entre -100 y 100");

		while(isNaN(numero)==true||numero<-100||numero>100)
		{
			numero=prompt("Error al ingresar el numero, intente nuevamente");
		}

		letra=prompt("Ingrese una letra");

		if (numero==0) 
		{
			contador0++;
		}
		else
		{
			if (numero>0) 
			{
				contadorPositivos;
			}
			else
			{
				acumuladorNegativos=acumuladorNegativos - numero;
			}
		}
		
		if (numero%2==0) 
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		if (bandera==false) 
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
			letranumeroMinimo=letra;
			letranumeroMaximo=letra;
			bandera=true;
		}
		else
		{
			if (numeroMinimo<numero) 
			{
				numeroMinimo=numero;
				letranumeroMinimo=letra;
			}
			if (numeroMaximo>numero) 
			{
				numeroMaximo=numero
				letranumeroMaximo=letra
			}
		}

		respuesta=confirm("¿Desea ingresar otro numero?");
	}

	document.write("<br>La cantidad de números pares."+contadorPares);
	document.write("<br>La cantidad de números impares."+contadorImpares);
	document.write("<br>La cantidad de ceros."+contador0);
	document.write("<br>El promedio de todos los números positivos ingresados."+contadorPositivos);
	document.write("<br>La suma de todos los números negativos."+acumuladorNegativos);
	document.write("<br>El número y la letra del mínimo."+numeroMinimo+letranumeroMinimo);
	document.write("<br>El número y la letra del máximo."+numeroMaximo+letranumeroMaximo);
}