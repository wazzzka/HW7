//Знайти суму всіх цілих чисел від 1 до 15.

let numbers = '';
let sum = 0;

for (let i = 1; i <= 15; i++) {
    numbers += i + '+';
    sum += i;
}

document.write(`<p>Сума всіх цілих чисел від 1 до 15:</br> ${numbers.slice(0, -1)}=${sum}</p>`);