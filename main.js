// 1 Задание

function transformation(num) {
    if (num > 0 && num < 999) {
        let str = num.toString();
        let obj = {};
        let l = str.length;
        switch (l) {
            case 3:
                obj["сотни"] = str[l - 3];
            case 2:
                obj["десятки"] = str[l - 2];
            case 1:
                obj["единицы"] = str[l - 1];
        }
        return obj
    }
    else
        console.log("Неверное число");

    console.log(a);
}
console.log(transformation(154))

// 2 Задание

let basket = [
    {
        product: "apple",
        price: 30
    },
    {
        product: "pear",
        price: 20
    },
    {
        product: "plum",
        price: 40
    },
    {
        product: "lemon",
        price: 35
    },
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice);