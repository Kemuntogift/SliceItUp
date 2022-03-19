$(document).ready(function() {
            $("#submit").click(function(event) {
                        var flavour = parseFloat(document.getElementById('flavour').value);
                        var size = parseFloat(document.getElementById('size').value);
                        var crust = parseFloat(document.getElementById('crust').value);
                        var topping = parseFloat(document.getElementById('extra-topping').value);
                        var quantity = parseFloat(document.getElementById('number').value);
                        var total = (flavour + size + crust + topping + quantity + Amount);