/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var mensaje="Numero erroneo, intente nuevamente.";
	var perimetro;
	var perimetroFinal;
	
	perimetro=(largo+ancho)*2;
	perimetroFinal=perimetro*3;

	alert(perimetroFinal);

}
function Circulo () 
{	
	var radio=document.getElementById('Radio').value;
	var mensaje="Numero erroneo, intente nuevamente.";
	var diametro;
	var diametroFinal;

	diametro=radio*2*3.14;
	diametroFinal=diametro*3;

	alert(diametroFinal);	
}
function Materiales () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var mensaje="Numero erroneo, intente nuevamente.";
	var area;
	var cemento;
	var cal;

	ancho=parseInt(ancho);
	
	area=largo*ancho;
	cemento=area*2;
	cal=area*3;

	alert("Usted necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}