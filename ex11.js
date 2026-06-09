// Atividade 11 - Dobro dos números
// Crie um array com 5 números.
// Crie um segundo array vazio chamado dobro.
// Utilize um for.
// Armazene no segundo vetor o dobro de cada valor do primeiro.
// Mostre os dois vetores.

let numeros = [10, 5, 6, 7, 42]
let dobro = []

for (let i = 0; i < numeros.length; i++){
    dobro.push(numeros[i] * 2)
}
console.log(`Números: ${numeros}`)
console.log(`Dobro: ${dobro}`)