console.log('--Exercise 6: functions');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('--Exercise 6.a:');
function suma(a = 0, b = 0) {
    return a + b;
}
var resultado = suma(15, 25);
console.log(resultado);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('--Exercise 6.b:');

function sumaB(a = 0, b = 0) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    } else {
        alert('Error: alguno de los parametros no es un numero');
        return NaN;
    }
}
var resultadoB = sumaB(15, 'hola');
console.log(resultadoB);

//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('--Exercise 6.c:');
function validateInteger(x) {
    if (x % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
var valorEntero = validateInteger(55.5);
console.log(valorEntero);

//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log ('--Exercise 6 .d:');
function sumaC(a = 0,b = 0) {
    if (typeof a == "number" && typeof b == "number" ) {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return a + b;
        } else {
            if (validateInteger(a) == false) {
                alert("ERROR el parametro " + a + " no es entero");
                return Math.round(a)
            } else {
                alert("ERROR el parametro " + b + " no es entero");
                return Math.round(b)
            }
        } 
    } else {
        alert("ERROR uno de los parametros no es un numero");
        return NaN;
    }
}
var resultado = sumaC(20.84,25);
console.log(resultado);

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validacionSuma(a,b) {
    if (typeof a == "number" && typeof b == "number" ) {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return true;
        } else {
            if (validateInteger(a) == false) {
                alert("ERROR el parametro " + a + " no es entero");
                return Math.round(a);
            } else {
                alert("ERROR el parametro " + b + " no es entero");
                return Math.round(b);
            }
        } 
    } else {
        alert("ERROR uno de los parametros no es un numero");
        return NaN;
    }
}
function suma(a,b) {
    var sum = validacionSuma(a,b);
    if (sum == true) {
        return a + b;
    } else return sum;
}
var resultado = suma(504,2500);
console.log(resultado);
