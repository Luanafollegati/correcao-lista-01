const temperaturaCelcius = [0, 10, 20, 30, 40];
const temperaturasFahrenheit = [];
let contadorArrayFahrenheit = 0;

//Formula: F = C * 9/5 + 32

//varredura do array com laço de repetição
for (let i = 0; i < temperaturaCelcius.length; i++) {
    temperaturasFahrenheit[contadorArrayFahrenheit] = (temperaturaCelcius[i] * 9) / 5 +32;
    contadorArrayFahrenheit++;
}
console.table(temperaturaCelcius);
console.table(temperaturasFahrenheit);