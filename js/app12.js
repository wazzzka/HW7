document.write("<h2>Таблиця множення від 1 до 10:</h2>");
document.write("<table border='1'>");

document.write("<tr><th>Число</th><th>Результат</th></tr>");

for (let i = 1; i <= 10; i++) {
    document.write(`<tr><td>${i}</td><td>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} × ${j} = ${i * j}<br>`);
    }
    document.write("</td></tr>");
}

document.write("</table>");