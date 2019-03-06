function mostrar()
{
	var numero1=prompt("Ingrese el 1º numero");
	var numero2=prompt("Ingrese el 2º numero");
	var resultado;

	if (numero1==numero2) 
	{
		alert(numero1 +" "+ numero2);
	}
	else
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);
		if (numero1>numero2) 
		{
			resultado=numero1-numero2;
			alert("la resta es "+resultado);
		}
		else
		{
			resultado=numero1+numero2;
			if (resultado>10) 
			{
				alert("la suma es "+resultado+" y supero el 10");
			}
			else
			{
				alert("la suma es "+resultado);
			}
		}
	}	
}