//object constructors
function order(pizza, pizzaPrice, crust, crustPrice) {
    this.pizzaSize = {
        size: pizza,
        price: pizzaPrice
    };
    this.crust = {
        crustName: crust,
        price: crustPrice
    };
}

function topping(name, price) {
    this.toppingName = name;
    this.price = price;
}

function address(location) {
    this.location = location;
}

//pricing
let pizzaPrices = {
    Small: 600,
    Medium: 700,
    Large: 900
}
let crustPrices = {
    Crispy: 100,
    Stuffed: 150,
    Gluten_Free: 200
}
let largeToppingPrices = 200
let mediumToppingPrices = 100
let smallToppingPrices = 50