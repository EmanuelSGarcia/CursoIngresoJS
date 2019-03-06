function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var acumuladorNota=0;
	var promedioNota;
	var bandera=false;
	var notaMinima;
	var sexonotaMinima;
	var varonesNotaMayor6=0;

	while(contador<5)
	{	
		nota=parseInt(prompt("Ingrese su nota."));
		while(isNaN(nota)==true||nota>10||nota<0)
		{
			nota=parseInt(prompt("Error, ingrese nuevamente su nota."));
		}


		sexo=prompt("Ingrese su sexo","f/m");
		while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error,ingrese su sexo nuevamente","f/m");
		}

		if (bandera==false) 
		{
			notaMinima=nota;
			sexonotaMinima=sexo;
			bandera=true;
		}
		else
		{
			if (notaMinima>nota) 
			{
				notaMinima=nota;
				sexonotaMinima=sexo;
			}
		}
		if (nota>6&&sexo=="m") 
		{
			varonesNotaMayor6++;
		}
		contador++;
		acumuladorNota=acumuladorNota+nota
	}
	
	promedioNota=acumuladorNota/contador;


	document.write("<br>EL promedio de las notas totales es : "+promedioNota);
    document.write("<br>La nota mas baja es : "+notaMinima+" y el sexo de esta persona es : "+sexonotaMinima);
    document.write("<br>La cantidad de varones que su nota es mayor o igual a 6 son : "+varonesNotaMayor6);
}