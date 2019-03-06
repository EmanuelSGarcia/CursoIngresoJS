/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var imporetefinal;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	
	aumento=sueldo*10/100;
	imporetefinal=sueldo+aumento;
	
	document.getElementById('resultado').value= imporetefinal;
	
}
