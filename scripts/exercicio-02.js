const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let numerosPares = 0;
let numerosImpares = 0;
let maiorQue20 = 0;

//Varredura do array
for (let i = 0; i < numeros.length; i++) {
    // Condicional para números pares
    if (numeros[i] %2 == 0){
    numerosPares++;
    }else {
        numerosImpares++;
    }

    //condicional para maiores que 20
    if (numeros[i]> 20){
        maiorQue20++;
    }
}

//numerosImpares = numeros.length - numerosPares;

console.log(`A quantidade de números pares é: ${numerosPares}`);
console.log(`A quantidade de números impares é: ${numerosImpares}`);
console.log(`A quantidade de numeros maiores que 20 é: ${maiorQue20}`);
