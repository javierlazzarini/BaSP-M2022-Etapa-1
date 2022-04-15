console.log ('--Exercise 2: strings')
//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log ('--Exercise 2.a:')
var mayuscula = 'variable en mayusculas';
console.log (mayuscula.toUpperCase())
//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('--Exercise 2.b:')
var textoDividido = 'textoDividido';
var primeraParte = textoDividido.substring (0,5);
console.log (textoDividido,primeraParte)
//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('--Exercise 2.c:')
var ultimasTres = textoDividido.substring (10,13)
console.log (textoDividido,ultimasTres)
//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log ('--Exercise 2.d:')
var primeroLaMayuscula = textoDividido.substring(0,1).toUpperCase() + textoDividido.substring(1,13).toLowerCase();
console.log (primeroLaMayuscula)
//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log ('--Exercise 2.e:')
var variableEspaciada = 'variable con espacios';
var espacioBlanco = variableEspaciada.indexOf(' ')
console.log (espacioBlanco)
//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log ('--Exercise 2.f:')
var largaEspaciada = 'caracteres prolongados';
var nuevaString =  largaEspaciada.substring(0,1).toUpperCase() + largaEspaciada.substring(1,10).toLowerCase() + ' ' +
 largaEspaciada.substring(largaEspaciada.indexOf(' ')+1,largaEspaciada.indexOf(' ') + 2).toUpperCase()
+ largaEspaciada.substring(largaEspaciada.indexOf(' ') + 2,largaEspaciada.length).toLowerCase();
console.log (nuevaString)