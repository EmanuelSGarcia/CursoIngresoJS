/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividiendo;
	var divisor;
	var divicion;
	var mensaje;

	dividiendo=document.getElementById('numeroDividendo').value;
	dividiendo=parseInt(dividiendo);
	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);
	divicion= dividiendo/divisor;

	mensaje= "El resto es ";

	alert(mensaje + divicion);
}
