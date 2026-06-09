// Atividade 03 - Contagem de maiores de idade
// Crie um array com 5 idades.
// Utilize um for para percorrer o vetor.
// Utilize um if para verificar quais idades são maiores ou iguais a 18.
// Mostre:
// Quantas pessoas são maiores de idade
// Quantas são menores de idade


const readline = require ('readline-sync')

let idades = []
let maioresDeIdade = 0
let menoresDeIdade = 0

for (let i = 0; i < 5; i++){
    const idade = readline.questionInt (`digite a idade da pessoa ${i + 1} > `)
    idades.push(idade)

    if (idade >= 18){
        maioresDeIdade++
    } else {
        menoresDeIdade++
    }
}
console.log("")
console.log("------- Resultados -------")
console.log(`ai minha lombar: ${maioresDeIdade}`)
console.log(`essis jovis: ${menoresDeIdade}`)