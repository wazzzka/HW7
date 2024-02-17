//Знайти добуток усіх цілих чисел від 15 до 35.

let numbers = '';
let product = 1;

for (let i = 15; i <= 35; i++) {
    numbers += i + '*';
    product *= i;
}

console.log(typeof product);

document.write(`<p>Добуток всіх цілих чисел від 15 до 35:</br> ${numbers.slice(0, -1)}=${product}</p>`);