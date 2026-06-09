let notas = [8, 6, 7, 9, 5, 10, 4, 2]
let aprovados = []
let reprovados = []

for (let i = 0; i < notas.length; i++){

    if (notas[i] >= 7) {
        aprovados.push(notas[i])
    } else {
        reprovados.push(notas[i])
    }
}

console.log(`Aprovados: ${aprovados}`)
console.log(`Reprovados: ${reprovados}`)