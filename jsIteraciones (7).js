function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	
	while(respuesta=="si")
	{
		numero=prompt("Ingrese el numero.");
		numero=parseInt(numero);

		acumulador=acumulador+numero;

		respuesta=prompt("¿Desea ingresar otro numero?", "SI / NO");
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN