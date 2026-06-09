console.log("------- Números Pares e Ímpares -------")
const readline = require ('readline-sync')

let pares = []
let impares = []

for (let i = 0; i < 2; i++){
    const numero = readline.questionInt (`Digite um número: `)

    if (numero % 2 === 0){
        pares.push(numero)
    } else {
        impares.push(numero)
    }
}
console.log("")
console.log("------- Resultados -------")
console.log(`Números pares: ${pares}`)
console.log(`Números ímpares: ${impares}`)