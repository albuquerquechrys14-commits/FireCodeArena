let numeros = [67, -42, 68, 77, -88,90, -102, 66, 50, -98]

let positivos = 0

for (let i = 0; i < numeros.length; i++){

    if (numeros[i] > 0){
        positivos++
    }
}
console.log(`números positivos: ${positivos}`)