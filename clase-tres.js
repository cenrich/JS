var a = true

if (a) {
    console.log("se cumple la condición")
}

var b=1
var c=2

if (b+c===3) {
    console.log("se cumple la condición")
}

if (b+c!==3) {
    console.log("se cumple la condición") //acá no imprime nada, porque no es true
}

if (a && b===1){
    console.log("se cumple la condición") //se cumplen ambas, imprime
}

if (a && c===1){
    console.log("se cumple la condición") //acá no imprime nada, porque no es true la segunda
}

if (a || c===1){
    console.log("se cumple la condición") //acá no imprime nada, porque no es true la segunda
}

//supongamos un objeto en el que tengo los personajes y quiero saber si están vivos o no
var charactersAlive = {
    john:true,
    dany:true,
    ned: false
}

charactersAlive.theon = true;

console.log(charactersAlive)

var savings = {
    jan:100,
    feb:200,
    march:0
}

var grandTotal = savings.jan+savings.feb+savings.march

if (grandTotal <=500) {
    savings.apr=500-grandTotal,
    console.log("ya ahorraste", grandTotal, "necesitarías guardar en abril", savings.apr, "para alcanzar el objetivo de 500")
}

var jonSnow = {
    age:35,
    isAlive:true,
    isStark:true,
}

if (jonSnow.isAlive && jonSnow.isStark) {
    jonSnow.role="king in the north"
    console.log (jonSnow.isAlive,jonSnow.isStark,jonSnow.role)
}

var user = {
    size:"m",
    color:"azul",
    fabric:"seda"
}

var zara = {
    label:"zara",
    size:"m",
    color:"verde"
}

var vitamina = {
    label:"vitamina",
    size:"s",
    color:"rojo"
}

if (user.size===zara.size) {
    user.brand=zara;
} else {
    user.brand=vitamina
}

console.log(user.brand)

var gen="sexta"

if (gen==="sexta"){console.log("el nombre del profesor es Mike")}
else if (gen==="septima") {console.log("el nombre del profesor es Pablo")}
else if (gen==="quinta") {console.log("el nombre de la profesora es Malena")}
else {console.log("no se conoce al profesor")}
