function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota;
var mensaje;

nota=Math.floor((Math.random() * 10) + 1);

	if (nota<4) 
	{
		mensaje="Vamos, la proxima se puede";
	}
	else
	{
		if (nota>8) 
		{
			mensaje="EXCELENTE";
		}
		else
		{
			mensaje="APROBÓ";
		}
	}

alert(mensaje);
console.log(nota);

}//FIN DE LA FUNCIÓN
