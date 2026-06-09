// Atividade 04 - Encontrando o maior número
// Crie um array com 5 números.
// Utilize um for para percorrê-lo.
// Descubra qual é o maior valor armazenado.
// Mostre o resultado no console.

let numeros = [10, 5, 8, 3, 12]
let maiorNumero = numeros[0]

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
    }
}
console.log(`O maior número é: ${maiorNumero}`)