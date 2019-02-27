function mostrar()
{
	var contador=0
	var nota;
	var sexo
	var contadorNota=0
	var acumuladorNota=0

	while(contador<5)
	{
		nota=prompt("Por favor, ingrese su nota");
		nota=parseInt(nota);
		sexo=prompt("Por favor, ingrese su sexo", "f/m")

		if (nota<0||nota>10) 
		{
			alert("Su nota ingresada no es valida");
			continue;
		}
		else
		{
			acumuladorNota=acumuladorNota+nota;
		}

		if (sexo=!"f"&&sexo!="m") 
		{
			alert("Su sexo ingresado no es correcto.");
			continue;
		}
		else
		{
			alert("RE PIOLA MANIJA")
		}

		contador++
	}
	promedio=acumuladorNota/contador;
	

	alert();
}
