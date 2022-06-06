// 1 Задание

var a = 1, b = 1, c, d;
c = ++a; alert(c);       // 2 происходит сначала сложение затем присваивание 
d = b++; alert(d);       // 1 происходит сначала присваивание затем сложение
c = (2 + ++a); alert(c); // 5 на данном этапе а уже равнялось 2 
d = (2 + b++); alert(d); // 4 происходит сначала присваивание затем сложение
alert(a);                // 3 а уже имеет значение 3 за 3 и 5 строку
alert(b);                // 3 за счет сложения равняется 3

// 2 Задание

var a = 2;
var x = 1 + (a *= 2); // Скобка равносильна а = 2 * 2 и к 1 + 4 = 5

// 3 задание

var a = 5
var b = 0
var number = null

if (a >= 0 && b >= 0) {
    number = a - b
    console.log(`a и b положительные их разность: ${number}`);
} else if (a < 0 && b < 0) {
    number = a * b
    console.log(`если а и b отрицательные их произведение: ${number}`);
} else {
    number = a + b
    console.log(`если а и b разных знаков их сумма: ${number}`);
}

// 4 Задание. Не совсем понял как делать. Сделал самый очевидный вариант.
var a = 5
switch (a) {
    case 1:
        console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 2:
        console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 3:
        console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 4:
        console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 5:
        console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 6:
        console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 7:
        console.log(7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 8:
        console.log(8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 9:
        console.log(9, 10, 11, 12, 13, 14, 15)
        break;
    case 10:
        console.log(10, 11, 12, 13, 14, 15)
        break;
    case 11:
        console.log(11, 12, 13, 14, 15)
        break;
    case 12:
        console.log(12, 13, 14, 15)
        break;
    case 13:
        console.log(13, 14, 15)
        break;
    case 14:
        console.log(14, 15)
        break;
    case 15:
        console.log(15)
        break;
}

// 5 Задание

function sum(arg1, arg2) {
    return (arg1 + arg2);
}
console.log(sum(2, 5));

function del(arg1, arg2) {
    return (arg1 / arg2);
}
console.log(del(2, 5));

function pro(arg1, arg2) {
    return (arg1 * arg2);
}
console.log(pro(2, 5));

function raz(arg1, arg2) {
    return (arg1 - arg2)
}
console.log(raz(2, 5));

// // 6 Задание 

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
            break;
        case del:
            return del(arg1, arg2);
            break;
        case pro:
            return pro(arg1, arg2);
            break;
        case raz:
            return raz(arg1, arg2);
            break;
    }

}

console.log(mathOperation(2, 3, raz))