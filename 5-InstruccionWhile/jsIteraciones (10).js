function mostrar()
{
//declarar contadores y variables
	var respuesta=true;
	var numero;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contadorCero=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var promedioPositivos;
	var contadorPares=0;
	var promedioNegativos;
	var diferencia;

	while(respuesta!=false)
	{
		numero=prompt("Ingrese su numero");
		numero=parseInt(numero);
		while(isNaN(numero)==true)
		{
			numero=prompt("Su numero ingresado fue incorrecto,ingrese nuevamente.");
			numero=parseInt(numero);
		}

		if (numero == 0) 
		{
			contadorCero++;
		}
		else
		{
			if (numero>0) 
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorPositivos++;
				promedioPositivos=acumuladorPositivos/contadorPositivos;
			}
			else
			{
				acumuladorNegativos=acumuladorNegativos+numero;
				contadorNegativos++;
				promedioNegativos=acumuladorNegativos/contadorNegativos;
			}//if (numero>0)
			if (numero%2==0) 
			{
				contadorPares++
			}
		}//if (numero == 0)
		respuesta=confirm("¿Desea ingresar otro numero?");
	}//while(respuesta!=false)

	diferencia=acumuladorPositivos+acumuladorNegativos;

	document.write("<br>Suma de los negativos "+acumuladorNegativos);
	document.write("<br>Suma de los positivos "+acumuladorPositivos);
	document.write("<br>Cantidad de positivos "+contadorPositivos);
	document.write("<br>Cantidad de negativos "+contadorNegativos);
	document.write("<br>Cantidad de ceros "+contadorCero);
	document.write("<br>Cantidad de números pares "+contadorPares);
	document.write("<br>Promedio de positivos "+promedioPositivos);
	document.write("<br>Promedios de negativos "+promedioNegativos);
	document.write("<br>Diferencia entre positivos y negativos "+diferencia);
}//FIN DE LA FUNCIÓN