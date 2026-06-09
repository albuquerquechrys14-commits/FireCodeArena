let numeros = [10, 5, 8, 3, 12]
let maiorNumero = numeros[0]

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
    }
}
console.log(`O maior número é: ${maiorNumero}`)