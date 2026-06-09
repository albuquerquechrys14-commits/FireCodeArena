let notas = [8, 6, 9, 7]
let soma = 0

for (let i = 0; i < notas.length; i++){
 soma += notas[i]

}
let media = soma / notas.length
if (media >= 7){

    console.log(`Média: ${media.toFixed(2)} - Aprovado`)
} else {
    console.log (`Média: ${media.toFixed(2)} - Reprovado`)
}
