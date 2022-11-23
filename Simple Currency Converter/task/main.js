console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

const map = new Map();

map.set('JPY', 113.5);
map.set('EUR', 0.89);
map.set('RUB', 74.36);
map.set('GBP', 0.75);
map.set('USD', 1);

const input = require('sync-input');

for( ; ; ) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let operation = input();
    if (operation !== "1" && operation !== "2") {
        console.log(`Unknown input`);
        continue;
    }
    if (operation === "2") {
        console.log(`Have a nice day!`);
        break;
    }

    if (operation === "1") {
        for (; ;) {
            console.log(`What do you want to convert?`);
            let currencyFrom = input("From: ");
            let currencyFromUpper = currencyFrom.toUpperCase();

            if (!map.has(currencyFromUpper)) {
                console.log("Unknown currency");
                continue;
            }

            let currencyTo = input("To: ");
            let currencyToUpper = currencyTo.toUpperCase();

            if (!map.has(currencyToUpper)) {
                console.log("Unknown currency");
                continue;
            }

            let amount = Number(input("Amount: "));

            if (amount < 1) {
                console.log("The amount cannot be less than 1.");
                continue;
            }
            if (!Number.isInteger(amount)) {
                console.log(" The amount has to be a number.");
                continue;
            }

            map.forEach(function (value1, key1, map) {
                if (currencyToUpper === key1) {
                    map.forEach(function (value2, key2, map) {
                        if (currencyFromUpper === key2) {
                            let result = (value1 / value2) * amount;
                            console.log(`Result: ${amount} ${key2} equals ${result.toFixed(4)} ${key1}`);
                        }
                    })
                }
            })
        }
    }
}



