/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var mensaje;
	var suma;

	mensaje="la suma es ";

	numero1=document.getElementById('numeroUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('numeroDos').value;
	numero2=parseInt(numero2);
	
	suma=numero1+numero2;
	
	alert(mensaje+suma);
}

function restar()
{
	var numero1;
	var numero2;
	var mensaje;
	var resta;

	mensaje="la Resta es ";

	numero1=document.getElementById('numeroUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('numeroDos').value;
	numero2=parseInt(numero2);
	
	resta=numero1-numero2;
	
	alert(mensaje+resta);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var mensaje;
	var multiplicar;

	mensaje="la multiplicacion es ";

	numero1=document.getElementById('numeroUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('numeroDos').value;
	numero2=parseInt(numero2);
	
	multiplicar=numero1*numero2;
	
	alert(mensaje+multiplicar);
}

function dividir()
{
	var numero1;
	var numero2;
	var mensaje;
	var divicion;

	mensaje="la divicion es ";

	numero1=document.getElementById('numeroUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('numeroDos').value;
	numero2=parseInt(numero2);
	
	divicion=numero1/numero2;
	
	alert(mensaje+divicion);
}

