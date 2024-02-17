//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//Визначити кількість його парних дільників.
//Визначити кількість його парних дільників.
//Знайти суму його парних дільників.

let number = parseInt(prompt("Введіть натуральне число:"));
let evenDivisors = '';

if (isNaN(number) || number <= 0) {
    alert("Неправильний ввід. Будь ласка, введіть натуральне число.");
} else {
    document.write(`<p>Дільники числа ${number}:</p>`);

    let evenDivisorsCount = 0;
    let evenDivisorsSum = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            document.write(`<p>${i} - це дільник числа ${number}. </br> ${number} / ${i} = ${number / i}`);


            if (i % 2 === 0) {
                evenDivisors += i + "+"
                evenDivisorsCount++;
                evenDivisorsSum += i;
            }
        }
    }
    document.write(`<p>Кількість парних дільників: ${evenDivisorsCount}</p>`);

    document.write(`Сума парних дільників: ${evenDivisors.slice(0,-1)}=${evenDivisorsSum}</p>`);
}