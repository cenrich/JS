// En las primeras 3 preguntas, reemplazar `null` por la respuesta

// crear una variable que contenga un string (el string puede contener cualquier cosa)
var newString = "gatitos" ;

// crear una variable que guarde cualquier número
var newNum = 23 ;

// crear una variable que guarde un booleano
var newBool = true ;

// EJERCICIO 1
// a y b son dos numeros
// sumar a y b
// guardar el resultado en la variable `resultadoSuma`
var a = 3;
var b = 7;

var resultadoSuma = a+b
console.log(resultadoSuma)

// aca va la solucion

//console.log(resultado); // 10



// EJERCICIO 2
// a y b son dos numeros
// sumar a y b
// guardar el resultado en la variable `resultado`
var a = 8;
var b = 5;

var resultado =a+b
console.log (resultado, "acá me pusieron que el resultado es 3 pero si sumo, es 13")
// aca va la solucion

//console.log(resultado); // 3



// EJERCICIO 3
// a y b son dos numeros
// dividir a y b
// guardar el resultado en la variable `resultado`
var a = 12;
var b = 3;

var resultado=a/b

// aca va la solucion

console.log(resultado); // 4


// EJERCICIO 4
// a y b son dos numeros
// multiplicar a y b
// guardar el resultado en la variable `resultado`
var a = 12;
var b = 3;

resultado=12*3
// aca va la solucion

console.log(resultado); // 36

//------- de acá para abajo, copio la otra hoja

var jsEsLoMas = true;
var supermanMejorQueBatman=false;
var calculoCorrecto=true;
var pentagonoCon6Lados=false;

// No editar de esta linea para abajo
console.log("¿Javascript es el mejor lenguaje?", jsEsLoMas);
console.log("¿Es Superman mejor que Batman?", supermanMejorQueBatman);
console.log("¿Es 1 + 1 = 2?", calculoCorrecto);
console.log("¿Un pentágono tiene 6 lados?", pentagonoCon6Lados);

var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = 0.15*precio;// COMPLETAR ESTA LINEA
var total = precio + impuestos;

console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log("Total: $" + total);

var cantidad=10
total=cantidad*(precio+impuestos)
console.log ("El total por", cantidad, "unidades es",total)

resto=11%3
console.log(resto)

a=9
b=17
var c=38

console.log("El resto de a dividido 3 es", a%3, "y el resto de b dividido 5", b%5, "y el resto de c dividido 8", c%8)

var unNumero=99
unNumero++
console.log(unNumero)

unNumero = 43
unNumero++
unNumero++ 
console.log(unNumero)

unNumero=27
unNumero--
console.log(unNumero)

a=3
b=17
c=12

a +=12
b +=9
c +=7

console.log("estos son los resultados", a, b, c)

a = 11;
b = 9;
c = 3;

a -=6
b -=15
c -=1

console.log("estos son los resultados ahora", a, b, c)


a = 5;
b = 12;
c = 4.6;

a *=5
b*=3
c*=10 

console.log("estos son los resultados ahora", a, b, c)

a=48
b=108
c=33

a/=12
b/=4
c/=11

console.log("estos son los resultados ahora", a, b, c)

a=9
b="9"

var aEsEquivalenteA9 = a==9
var bEsEquivalenteA9=b==9

console.log("La variable a es equivalente a 9:", aEsEquivalenteA9);
console.log("La variable a es equivalente a '9':", bEsEquivalenteA9);

var personaA = 'Ada';
var personaB = 'Grace';
var personaC = 'ada';

var nombreAIgualNombreB = personaA==personaB; // COMPLETAR ESTA LINEA
var nombreAIgualNombreC = personaA==personaC; // COMPLETAR ESTA LINEA
var nombreBDistintoNombreC = personaB!=personaC; // COMPLETAR ESTA LINEA

console.log("La persona A y la persona B, ¿tienen el mismo nombre?:", nombreAIgualNombreB);
console.log("La persona A y la persona C, ¿tienen el mismo nombre?:", nombreAIgualNombreC);
console.log("La persona B y la persona C, ¿tienen distinto nombre?:", nombreBDistintoNombreC);