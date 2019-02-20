function mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var precio4;
	var precioMayor;
	var precioBruto;
	var modificacion;
	var precioFinal;

	precio1=prompt("Ingrese su primer importe");
	precio2=prompt("Ingrese su segundo importe");
	precio3=prompt("Ingrese su tercer importe");
	precio4=prompt("Ingrese su cuarto importe");
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);
	precio4=parseInt(precio4);

	if (precio1>precio2&&precio1>precio3&&precio1>precio4) 
	{
		numeroMayor= precio1;
	}	
	else
	{
		if (precio2>precio3&&precio2>precio4) 
		{
			numeroMayor= precio2;
		}	
		else
		{
			if (precio3>precio4) 
			{
				numeroMayor = precio3;
			}
			else
			{
				numeroMayor = precio4;
			}
		}
	} //if (precio1>precio2&&precio1>precio3&&precio1>precio4)
	
	precioBruto=precio1+precio2+precio3+precio4;

	if (precioBruto>100) 
	{
		modificacion= precioBruto*10/100;
	}
	else
	{
		if (precioBruto>50) 
		{
			modificacion= precioBruto*5/100;
		}
		else
		{
			modificacion= precioBruto*-15/100;
		}
	}
	precioFinal = precioBruto - modificacion
	alert("Su precio final es de: $"+precioFinal+" las modificaciones de su precio bruto son: $"+modificacion+" Su monto mayor fue de: $"+ numeroMayor);

}
/*resaltar el mayor
si supera $100 el descuento es del %10
si supera $50 el descuento es del %5
si no es mayor a $50 se le aumenta un %15
*/
