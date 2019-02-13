
function mostrar()
{	
 	var xxxx1;
 	var xxxx2;
 	var resultado;

 	xxxx1 = prompt("Por favor introduzca su edad: " , "Edad.");
 	xxxx2 = prompt("Por favor introduzca su edad: " , "Edad.");

 	xxxx1 = parseInt(xxxx1);
 	xxxx2 = parseInt(xxxx2);
 	resultado = xxxx1 + xxxx2;
 	alert("La suma de sus edades es: " + resultado);
}