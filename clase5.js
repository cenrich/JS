// var numero1 = 10
// var numero2 = 5

// if (numero1>numero2) {
//     console.log ("La variable numero1 es más grande que la variable numero2.")
// }

// var congrats = numero1>numero2 ? "La variable numero1 es más grande que la variable numero2." : ":-("
// console.log (congrats)

// var congrats = numero2>numero1 ? "La variable numero1 es más grande que la variable numero2." : ":-("
// console.log (congrats)

// var count=0
// while (count < 10) {
// console.log (count)
// ++count
// }


// var classDays = ["martes", "jueves", "viernes"]
// var count=0
// while (count < classDays.length) {
// console.log (classDays[count])
// ++count
// }

// for (var A = 0; A < classDays.length; A++) {
// console.log (classDays[A])
// }

var episodesSeason1 = ["s1e1: Es el episodio 1",
"s1e2: Es el episodio 2",
"s1e3: Es el episodio 3",
"s1e4: Es el episodio 4",
"s1e5: Es el episodio 5",
] 

var episodesSeason2 = ["s2e1: Es el episodio 6",
"s2e2: Es el episodio 7",
"s2e3: Es el episodio 8",
"s2e4: Es el episodio 9",
"s2e5: Es el episodio 10",
"s2e6: Es el episodio 11",
]

//var condicion = episodesSeason1

//for (var j=0; j < condicion.length; j++) {
  //  console.log (condicion[j])
//}  

// el problema de Karin: imprimir una lista y luego la otra. Lo más fácil sería unir ambos arrays como parte de un conjunto

//var allEpisodes = [
  //  episodesSeason1,
  //  episodesSeason2
//]

//for (var i=0; i < allEpisodes.length; i++) {
    //console.log (allEpisodes[j]) esto me imprime los dos arrays uno a continuación del otro pero no la lista
  //  for  (var j=0; j < allEpisodes[i].length;j++) {
    //    console.log (allEpisodes[i][j])
    //}
//}

// function imprimirEsto (palabra) {
//     console.log (palabra)
// }

// imprimirEsto ("hola")

// function greetings (e,i) {
//     console.log("hola, " +e+ " y " +i)
// }

// greetings ("sabri","mike")

// function adicion (num1,num2) {
//     var mensaje ="el valor de la suma es "
//     var aux = num1+num2
//     return mensaje+aux
// }

// console.log (adicion (4,8))

// function saludo (eso) {
//     console.log(eso)
// }

// saludo ("hola, cómo estás")

var lista = ["merchy", "sissi", "ceci"]


function funcionDeEjercicio (manzana, pera) {
    for (var i=0; i <manzana.length; i++) {
        console.log (manzana[i]+pera)
    }
}

funcionDeEjercicio(lista, " vino a clase")
