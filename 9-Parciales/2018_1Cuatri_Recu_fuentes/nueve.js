function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta=true;
	var contadorTempPares;
	var bandera=false;
	var animalMaximo;
	var animalTemperaturaMaxima;

	while(respuesta==true)
	{
		animal=prompt("Ingrese su animal.");
		while(isNaN(animal)==false)
		{
			animal=prompt("Error en el animal ingresado, intente nuevamente.");
		}

		peso=parseInt(prompt("Ingrese el peso del animal."));
		while(isNaN(peso)==true||peso<1||peso>1001)	
		{
			peso=parseInt(prompt("Error en el peso ingresado, intente nuevamente."));
		}

		temperatura=parseInt(prompt("Ingrese la temperatura del animal"));
		while(isNaN(temperatura)==true||temperatura<-30||temperatura>30)
		{
			temperatura=parseInt(prompt("Error en la temperatura ingresada, intente nuevamente."));
		}

		if (temperatura%2==0) 
		{
			contadorTempPares++;
		}
		
		if (bandera==false) 
		{
			animalMaximo=animal;
			animalTemperaturaMaxima=temperatura;
			bandera=true;
		}
		else
		{
			if (animalTemperaturaMaxima<animal) 
			{
				animalTemperaturaMaxima=temperatura;
				animalMaximo=animal
			}
		}




		respuesta=confirm("¿Desea ingresar otro animal?");
	}

	document.write("<br>La cantidad de temperaturas pares."+contadorTempPares);
	document.write("<br>El nombre y temperatura del animal más pesado");
	document.write("<br>La cantidad de animales que viven a menos de 0 grados.");
	document.write("<br>El promedio del peso de todos los animales.");
	document.write("<br>El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.");

}
