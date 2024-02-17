//Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0;
let numbers = '';
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        numbers += i + "+";
        sum += i;
    }
}

document.write(`<p>Сума лише парних чисел в діапазоні від 30 до 80:</br> ${numbers.slice(0, -1)}=${sum}</p>`);