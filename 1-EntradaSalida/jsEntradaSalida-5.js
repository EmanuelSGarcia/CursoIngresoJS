/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre ;
	var edad ;
	nombre = prompt ("Ingrese su nombre");
	edad= prompt ("ingrese su edad");
	
	document.getElementById('elNombre').value = nombre;
	document.getElementById('laEdad').value = edad;

	alert("Usted es: " + nombre + " Su edad es: " + edad)
	alert("¡Wellcome!")


}