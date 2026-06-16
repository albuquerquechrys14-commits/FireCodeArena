// Peça ao usuário quantos números ele deseja cadastrar.
// Crie dois arrays:
// Pares
// Impares
// Solicite os números ao usuário.
// Utilize um if/else para verificar cada número e armazená-lo no vetor correto.
// Ao final, exiba:
// Lista de números pares
// Lista de números ímpares

const readline = require ('readline-sync')

let pares = []
let impares = []

console.log("-----------Números-------------")

let quantidade = readline.questionInt (`Quantos números você deseja cadastrar?: `)

console.log("------- Números Pares e Ímpares -------")
for (let i = 1; i < quantidade; i++){
    const numero = readline.questionInt (`Digite o ${i}º número: `)

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