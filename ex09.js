// Atividade 09 - Procurando um nome
// Crie um array com 5 nomes.
// Peça um nome ao usuário.
// Utilize um for para verificar se o nome existe no vetor.
// Caso encontre:
// Nome encontrado!
// Caso contrário:
// Nome não encontrado!
// dica: use while para os casos.

const readline = require ('readline-sync')

let nomes = ["Jhonny", "Bob", "Charlie", "Emilly", "Jasmine"]
const nomeProcurado = readline.question (`Digite um nome para procurar: `)

let encontrado = false
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomeProcurado) {
        encontrado = true
        break
    }
}

if (encontrado) {
    console.log("Nome encontrado!")
} else {
    console.log("Nome não encontrado!")
}