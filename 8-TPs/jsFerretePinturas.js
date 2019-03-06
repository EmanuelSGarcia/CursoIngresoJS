/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura=document.getElementById('Temperatura').value
	var conversion;
	var mensaje= "º Fahrenheit son ";
	var mensaje2="º centígrados";
	var mensajeError="Debe ingresar un numero para poder realizar la conversion."

	while(isNaN(temperatura)==true)
	{
		temperatura=prompt(mensajeError);
	}

	temperatura=parseInt(temperatura);
	conversion=(temperatura-32)*5/9;
	alert(temperatura+mensaje+conversion+mensaje2);

}

function CentigradosFahrenheit () 
{
	var temperatura=document.getElementById('Temperatura').value
	var conversion;
	var mensaje= "º centígrados son ";
	var mensaje2="º Fahrenheit ";
	var mensajeError="Debe ingresar un numero para poder realizar la conversion."

	while(isNaN(temperatura)==true)
	{
		temperatura=prompt(mensajeError);
	}
	temperatura=parseInt(temperatura);
	conversion=(temperatura*9/5)+ 32;
	alert(temperatura+mensaje+conversion+mensaje2);
}
