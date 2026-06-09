console.log("------- Separando múltiplos de 3 -------")
const readline = require ('readline-sync')

let multiplosDe3 = []
let outrosNumeros = []

for (let i = 0; i < 2; i++){
    let numero = readline.questionInt(`Digite o ${i + 1}º número: `)
    if (numero % 3 === 0){
        multiplosDe3.push(numero)
    } else {
        outrosNumeros.push(numero)
    }
}
console.log("Múltiplos de 3:", multiplosDe3)
console.log("Outros números:", outrosNumeros)