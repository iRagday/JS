// 1 Задание

let i = 0;
while (i <= 100) {
    let check = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(i);
    i++;
}



// 2 Задание. Не додумался как без словаря сделать. 


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


// 3 Задание


function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket));

// 4* Задание

for (let i = 0; i <= 9; console.log(i), i++) { };

// 5* Задание

var count = "";

for (let i = 0; i < 20; i++) {
    console.log(count += 'x');

}