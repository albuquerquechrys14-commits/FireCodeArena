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