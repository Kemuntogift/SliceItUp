//object constructors
function myOrder(pizza, pizzaPrice, crust, crustPrice) {
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

$(document).ready(function() {
    $("#delivery-checkbox").click(function(event) {
        if (document.querySelector('#delivery-checkbox').checked) {} else {

        }

    });
});

$(document).ready(function() {

            // Order 
            $("form#nOrder").submit(function(event) {
                        event.preventDefault();

                        var pizzaSize = $("#size").val();
                        var crust = $("#crust").val();

                        var checkBoxes = document.getElementsByClassName('form-check-input');
                        var isChecked = false;
                        for (var i = 0; i < checkBoxes.length; i++) {
                            if (checkBoxes[i].checked) {
                                isChecked = true;
                            };
                            else(!isChecked) {
                                alert('Add a topping!');
                            }

                            let flavour = $("#flavour option:selected").val();
                            let size = $("#size option:selected").val();
                            let crust = $("#crust option:selected").val();
                            let topping = $("#extra-toppings option:selected").val();
                            let quantity = $("#number").val();
                            //function
                            let order = (flavour, size, crust, topping, number, total) => {
                                return { flavour, size, crust, topping, number, total };
                            }
                            let newOrder = order(flavour, size, crust, topping, number);
                            console.log(newOrder);
                            $('.output-data').text(" ");
                            $(".output-data").append("<br>" + "Flavour :   " + newOrder.flavour + "<br>" + "Size :   " +
                                newOrder.size + "<br>" + "Crust :     " +
                                newOrder.crust + "<br>" + "Toppings :     " +
                                newOrder.topping + "<br>" + " Number of pizza :    " +
                                newOrder.number + "<br> ")
                        });