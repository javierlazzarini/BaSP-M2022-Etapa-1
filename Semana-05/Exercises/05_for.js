console.log ('--Exercise 5: for');
//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log ('--Exercise 5.a:');
var losDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
for (i = 0; i<losDias.length; i++)
alert (losDias[i]);
//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('-Exercise 5.b:');

for (var b = 0; b < 5; b++) {
    var dia = losDias[b];
    var diasMayusc = (dia.toUpperCase()).substring(0,1) + (dia.toLowerCase()).substring(1);
    losDias[b] = diasMayusc;
    console.log(losDias[b]);
}
//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
console.log('-Exercise 5.c:');

var sentence = '';

for (var c = 0; c < 5; c++) {
    sentence += losDias[c] + ' ';
}

alert(sentence);

//Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('-Exercise 5.d:');

var decimas = [];

for (var d = 0; d < 10; d++) {
    decimas[d] = d;
}
console.log(decimas);