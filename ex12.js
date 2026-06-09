let numeros = [10, 5, 67, 9, 42]
let soma = 0

for (let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
let media = soma / numeros.length

console.log(`Média: ${media}`)

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > media){
        console.log(numeros[i])
    }
}