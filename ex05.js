let numeros = [10, 5, 8, 3, 12]
let menorNumero = numeros[0]

for (let i = 1; i < numeros.length; i++){
 if (numeros[i] < menorNumero){
    menorNumero = numeros[i]

 }
}
console.log(`resultado: ${menorNumero}`)