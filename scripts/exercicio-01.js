let idade = [17, 21, 16, 25, 19];
let menorDeIdade = 0;
let maiorDeIdade = 0;

// Laço de repetição para varrer todos os elementos do meu array idades
for (let i = 0; i < idade.length; i++) {
    //Condição para contadores de maior e menor idades
if (idade[i] >= 18) {
    maiorDeIdade += 1;
}
if (idade[i] < 18 ) {
    menorDeIdade += 1;
}
}

console.log(`A quantidade de pessoas menores de idade é ${menorDeIdade} e maiores é ${maiorDeIdade}`);
