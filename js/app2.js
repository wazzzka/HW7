//Вивести квадрати чисел від 10 до 20.

let numbers = '';
for (let i = 10; i <= 20; i++) {
    numbers += i * i + ', ';
}
document.write("<p>" + numbers.slice(0, -2) + "</p>");