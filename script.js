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