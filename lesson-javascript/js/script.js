/* 
COMENTARIO
MULTI LINEA
*/

// COMENTARIO DE UNA SOLA LINEA


/* VARIABLES */

/*
// Automatica
nombreVariable1 = 'automatica';
nombreVariable1 = '1';
console.log(nombreVariable1);

// var
var nombreVariable2 = 'usando "var"';
nombreVariable2 = '2';
console.log(nombreVariable2);

// let
let nombreVariable3 = "usando 'let'";
nombreVariable3 = '3';
console.log(nombreVariable3)

// const
const nombreVariable4 = 'usando "const"'
console.log(nombreVariable4)
*/

// Interpolacion de variables "${marcador}"

/* OPERADORES */

/*
// Asignacion
let miVariable1 = "Nicolas";
let miVariable2 = 'Maiguel';
console.log('miVariable 1:',miVariable1);
console.log('miVariable 2:',miVariable2);

// Concatenacion
const nombreCompleto = (miVariable1+miVariable2);
console.log(nombreCompleto);

// Aritmetico
PEMDAS = Parenthesis, Exponents, Multiplication, Division, Addition, Substraction

miVariable2 = 5;
miVariable1 = 10;
console.log('miVariable 1:',miVariable1);
console.log('miVariable 2:',miVariable2);
let resultado = miVariable1 + miVariable2;
resultado = miVariable1 - miVariable2;
resultado = miVariable1 * miVariable2;
resultado = miVariable1 / miVariable2;
resultado = miVariable1 % miVariable2;
resultado = miVariable1 ** miVariable2;
console.log(resultado);
*/
/*
//Comparacion
let miVariable1 = 10;
let miVariable2 = "5";
console.log('miVariable1:',miVariable1);
console.log('miVariable2:',miVariable2);

resultado = miVariable1 == miVariable2;
console.log('resultado ==:',resultado);

resultado = miVariable1 === miVariable2;
console.log('resultado ===:',resultado);

resultado = miVariable1 != miVariable2;
console.log('resultado !=:',resultado);

resultado = miVariable1 > miVariable2;
console.log('resultado >:',resultado);

resultado = miVariable1 < miVariable2;
console.log('resultado <:',resultado);

resultado = miVariable1 <= miVariable2;
console.log('resultado <=:',resultado);

resultado = miVariable1 >= miVariable2;
console.log('resultado >=:',resultado);
*/


/* TIPOS DE DATOS PRIMITIVOS */
// undefined
// let miVariable = undefined;
// String, Cadena de texto

/* miVariable = 'usando comillas sencillas';
miVariable = "usando comillas dobles";
miVariable = `usando backtips`;
//number
miVariable = 0;
miVariable = -10;
miVariable = 10;
miVariable = 0b01;
miVariable = 0o01;
miVariable = 0x01;
miVariable = 0.1;
//boolean
miVariable = true;
miVariable = false;
console.log('miVariable:', miVariable);
*/

/*  EJERCICIOS

----------------------------------------------------------------------------------------
Ejercicio 1:

Crear 3 constantes
- nombre
- apellido
- edad
imprima en la consola su nombre completo y edad usando los valores de las constantes
Ej de salida: Soy Pepita perez y tengo 32 anos

- cumple
- cumple parcialmente
- no cumple

const nombre = 'Nicolas';
const apellido = 'Maiguel';
let edad = 23

console.log('Soy', nombre, apellido, "y tengo", edad,"años.");
*/
/*
---------------------------------------------------------------------------------------
Ejercicio 2:

- Cree dos variables de tipo constante y asigne los valores 20 y el 3 respectivamente
- Cree una constante para guardar el resultado de cada una de las operaciones basicas (suma, resta, division y multiplicacion)
- Imrima el resultado de cada operacion con el siguiente formato de ejemplo: 20 + 3 + 23

const variable1 = 20
const variable2 = 3

const resultadoSuma = variable1 + variable2
const resultadoResta = variable1 - variable2
const resultadoDivision = variable1 / variable2
const resultadoMultiplicacion = variable1 * variable2


const result = `
${variable1} + ${variable2} = ${resultadoSuma}
${variable1} - ${variable2} = ${resultadoResta}
${variable1} x ${variable2} = ${resultadoMultiplicacion}
${variable1} / ${variable2} = ${resultadoDivision}
`
console.log(result)
*/
/*
---------------------------------------------------------------------------------------
Ejercicio 3:
muestre el resultado y explique como se hizo la operacion de:
12/3 + 2 * 3 - 1

const num12 = 12
const num3 = 3
const num2 = 2
const num1 = 1
const div = num12/num3
const multi = num2*num3
const sum = multi+div

const procedure = `
1) Multiplication (2x3)
${num12} / ${num3} + ${num2} * ${num3} - ${num1}=

2) Division (12/3)
${num12} / ${num3} + ${multi} - ${num1}=

3) Addition (4+6)
${div} + ${multi} - ${num1}=

4) Substraction (10-1)
${sum}-${num1}
`
console.log(procedure)

const answer = 12/3 + 2 * 3 - 1

console.log('Answer:',answer)
*/

/*
---------------------------------------------------------------------------------------
Ejercicio 4:
- Leer 2 numeros y utilizar los operadores de comparacion
- Imprimir en consola el resultado de cada comparacion con el siguiente formato:
Ejemplo 10 no es igual a 5
const miVariable1 = 10;
const miVariable2 = 5;
const igual = 'es igual a'
const identico = 'es identico a'
const noIgual = 'no es igual a'
const noIdentico = 'no es identico a'
const mayor = 'es mayor que'
const menor = 'es menor que'
const igualMayor = 'es igual o mayor que'
const igualMenor = 'es igual o menor que'

console.log('Variable 1:',miVariable1)
console.log('Variable 2:',miVariable2)

resultado = miVariable1 == miVariable2;
console.log(miVariable1,igual,miVariable2,"=", resultado);

resultado = miVariable1 === miVariable2;
console.log(miVariable1,identico,miVariable2,"=", resultado);

resultado = miVariable1 != miVariable2;
console.log(miVariable1,noIgual,miVariable2,"=", resultado);

resultado = miVariable1 > miVariable2;
console.log(miVariable1,mayor,miVariable2,"=", resultado);

resultado = miVariable1 < miVariable2;
console.log(miVariable1,menor,miVariable2,"=", resultado);
resultado = miVariable1 <= miVariable2;
console.log(miVariable1,igualMenor,miVariable2,"=", resultado);

resultado = miVariable1 >= miVariable2;
console.log(miVariable1,igualMayor,miVariable2,"=", resultado);
*/