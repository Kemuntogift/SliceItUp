//function constructors
function Order(pizza, pizzaPrice, crust, crustPrice) {
    this.pizzaSize = {
        size: pizza,
        price: pizzaPrice
    };
    this.crust = {
        crustName: crust,
        price: crustPrice
    };
}