let numeros = [67, 42, 69, 6, 76, 88, 90, 101, 66, 77]
let pares = 0

for (let i = 0; i < numeros.length; i++){

    if (numeros[i] % 2 === 0){
        pares++
    }
}
console.log(`Total de números pares: ${pares}`)