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
$("#delivery-checkbox").click(function(event) {
    //   $(".addAddress").toggle();

    if (document.querySelector('#delivery-checkbox').checked) {
        // $('#addressModal').modal();
        // $("#addressModal").show();
    } else {
        // $(".checkout").attr("disabled", false);
    }

});


$(document).ready(function() {

            // Order 
            $("form#new-order").submit(function(event) {
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