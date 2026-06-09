// Atividade 06 - Média das notas
// Crie um array com 4 notas.
// Utilize um for para somar todas as notas.
// Calcule a média.
// Se a média for:
// Maior ou igual a 7 → Aprovado
// Menor que 7 → Reprovado
// Mostre a média e a situação.

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
