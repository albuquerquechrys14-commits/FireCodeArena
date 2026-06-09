// Atividade 02 - Positivos e Negativos
// Peça ao usuário quantos números deseja cadastrar.
// Crie dois arrays:
// positivos
// negativos
// Utilize um for para solicitar os valores.
// Armazene cada número no vetor correspondente.
// Ao final, mostre os dois vetores.

const readline = require ('readline-sync')

let positivos = []
let negativos = []


console.log("------- Números Positivos e Negativos -------")
for (let i = 0; i < 2; i++){
    const numero = readline.questionInt (`Digite um número: `)

    if (numero >= 0){
        positivos.push(numero)
    } else {
        negativos.push(numero)
    }
}
console.log("")
console.log("------- Resultados -------")
console.log(`Números positivos: ${positivos}`)
console.log(`Números negativos: ${negativos}`)