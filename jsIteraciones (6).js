function mostrar()
{

	/*
		contador=contar+1
		contador+=1
		contador++	(suma en la linea de abajo)
		++contador (suma en esa misma linea)
		
		acumulador = var1+var2 (suma todas las variables asignadas)
		acumulador = acumulador+numero
		acumulador+ = numero

		bandera=true (es un checkpoint dentro de los while)



	*/
	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5)
	{
		numero=prompt("Ingrese el numero ");
		numero=parseInt(numero);
		acumulador=acumulador+numero
		contador=contador+1;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN