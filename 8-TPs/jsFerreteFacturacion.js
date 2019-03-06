/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1=document.getElementById('PrecioUno').value;
	var numero2=document.getElementById('PrecioDos').value;
	var numero3=document.getElementById('PrecioTres').value;
	var mensaje="Numero erroneo, intente nuevamente.";
	var suma;

	while(isNaN(numero1)==true)
	{	
		numero1= prompt(mensaje);
	}
	numero1=parseInt(numero1);
	while(isNaN(numero2)==true)
	{
		numero2= prompt(mensaje);
	}
	numero2=parseInt(numero2);
	while(isNaN(numero3)==true)
	{
		numero3= prompt(mensaje);
	}
	numero3=parseInt(numero3);

	suma=numero1+numero2+numero3;
	alert(suma);	
}
function Promedio () 
{
	var numero1=document.getElementById('PrecioUno').value;
	var numero2=document.getElementById('PrecioDos').value;
	var numero3=document.getElementById('PrecioTres').value;
	var mensaje="Numero erroneo, intente nuevamente.";
	var suma;
	var promedio;

	while(isNaN(numero1)==true)
	{	
		numero1= prompt(mensaje);
	}
	numero1=parseInt(numero1);
	while(isNaN(numero2)==true)
	{
		numero2= prompt(mensaje);
	}
	numero2=parseInt(numero2);
	while(isNaN(numero3)==true)
	{
		numero3= prompt(mensaje);
	}
	numero3=parseInt(numero3);
	suma=numero1+numero2+numero3;
	promedio=suma/3;
	alert(promedio);	
}
function PrecioFinal () 
{
	var numero1=document.getElementById('PrecioUno').value;
	var numero2=document.getElementById('PrecioDos').value;
	var numero3=document.getElementById('PrecioTres').value;
	var mensaje="Numero erroneo, intente nuevamente.";
	var suma;
	var iva;
	var resultadoFinal;

	while(isNaN(numero1)==true)
	{	
		numero1= prompt(mensaje);
	}
	numero1=parseInt(numero1);
	while(isNaN(numero2)==true)
	{
		numero2= prompt(mensaje);
	}
	numero2=parseInt(numero2);
	while(isNaN(numero3)==true)
	{
		numero3= prompt(mensaje);
	}
	numero3=parseInt(numero3);
	suma=numero1+numero2+numero3;
	iva=suma*21/100;
	resultadoFinal=suma+iva;
	alert(resultadoFinal);
}