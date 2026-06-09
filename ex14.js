const readline = require ('readline-sync')
console.log("=============== TURMA ================")
let notas = []
let quantidade = readline.questionInt (`Quantas notas deseja cadastrar? `)

for (let i = 0; i < quantidade; i++){
    const nota = readline.questionFloat (`Digite a nota ${i + 1}: `)
    notas.push(nota)
}

let maiorNota = notas[0]
let menorNota = notas[0]
let soma = 0
let aprovados = 0
let reprovados = 0

for (let i = 0; i < notas.length; i++){
    if (notas[i] > maiorNota) {
        maiorNota = notas[i]
    }
    if (notas[i] < menorNota) {
        menorNota = notas[i]
    }
    soma += notas[i]

    if (notas[i] >= 7) {
        aprovados++
    } else {
        reprovados++
    }
}

const media = soma / notas.length
console.log("")
console.log("=============== Resultados ===============")
console.log(`Maior nota: ${maiorNota}`)
console.log(`Menor nota: ${menorNota}`)
console.log(`Média da turma: ${media.toFixed(2)}`)
console.log(`Quantidade de aprovados: ${aprovados}`)
console.log(`Quantidade de reprovados: ${reprovados}`)