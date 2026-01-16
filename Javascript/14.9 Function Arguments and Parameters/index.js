var again = true;

while (again) {

    alert("Hello! Good day, Welcome to our Coffee Shop!");
    alert(
        "Products:\n" +
        "Cake - P120\n" +
        "Cookies - P50\n" +
        "Iced Coffee - P69\n" +
        "Milk Tea - P79"
    );

    var receipt = "----- RECEIPT -----\n";
    var grandTotal = 0;
    var orderMore = true;

    while (orderMore) {

        var product = prompt("What would you like to buy?").toLowerCase();
        var quantity = Number(prompt("How many would you like to buy?"));

        var price = 0;

        // SWITCH STATEMENT
        switch (product) {
            case "cake":
                price = 120;
                break;

            case "cookies":
                price = 50;
                break;

            case "iced coffee":
                price = 69;
                break;

            case "milktea":
            case "milk tea":
                price = 79;
                break;

            default:
                alert("Invalid product.");
                continue;
        }

        var total = price * quantity;
        grandTotal += total;

        receipt += product.toUpperCase() + " x " + quantity + " = P" + total + "\n";

        orderMore = confirm("Would you like to order another product?");
    }

    receipt += "\nTOTAL: P" + grandTotal + "\n";

    var money = Number(prompt("Enter your money:"));
    var change = money - grandTotal;

    if (change < 0) {
        alert("You don't have enough money.");
    } else {
        receipt += "PAID: P" + money + "\n";
        receipt += "CHANGE: P" + change + "\n";
        receipt += "\nThank you for buying! ☕";

        alert(receipt);
    }

    again = confirm("Thank you for buying! Would you like to purchase again?");
}
