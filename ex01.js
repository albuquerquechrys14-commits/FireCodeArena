const readline = require ('readline-sync')

let pares = []
let impares = []

console.log("-----------Números-------------")

let quantidade = readline.questionInt (`Quantos números você deseja cadastrar? (max. 4): `)

console.log("------- Números Pares e Ímpares -------")
for (let i = 0; i < quantidade; i++){
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