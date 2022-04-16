console.log ('--Exercise 3: Arrays')
//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log ('--Exercise 3.a:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (meses [5]);
console.log (meses [11]);
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('--Exercise 3.b:');
var meses_1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (meses_1.sort())
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('--Exercise 3.c:');
var meses_2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses_2.unshift('start'), meses_2.push('end');
console.log (meses_2);
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log ('--Exercise 3.d:');
meses_2.shift (), meses_2.pop ();
console.log (meses_2);
//e. Invertir el orden del array (utilizar reverse).
console.log ('--Exercise 3.e:');
var invertidos = meses.reverse();
console.log (invertidos);
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log ('--Exercise 3.f:')
var meses_3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var unidos = meses_3.join();
console.log (unidos);
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log ('--Exercise 3.g:')
var meses_4 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var recorte = meses_4.slice(4, 11);
console.log (recorte);
