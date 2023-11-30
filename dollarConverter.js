
prompt = require('prompt-sync')();

class CoinConverter {
    constructor() {
        this.quarter = 25;
        this.dime = 10;
        this.nickel = 5;
        this.penny = 1;
    }

    getInput() {
        while (true) {
            let userInput = prompt("Enter amount in dollars:");
            let cents = Math.floor(parseFloat(userInput) * 100);

            if (!isNaN(cents)) {
                return cents;
            }

            alert("Please enter a valid float.");
        }
    }

    calculateCoins(cents) {
        const quarters = Math.floor(cents / this.quarter);
        cents %= this.quarter;

        const dimes = Math.floor(cents / this.dime);
        cents %= this.dime;

        const nickels = Math.floor(cents / this.nickel);
        cents %= this.nickel;

        const pennies = cents;

        return {
            quarters: quarters,
            dimes: dimes,
            nickels: nickels,
            pennies: pennies
        };
    }
}

const converter = new CoinConverter();
const centsInput = converter.getInput();
const result = converter.calculateCoins(centsInput);

console.log(result);
