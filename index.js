const readline = require('readline');
const BasePriceAndQuantity = require('./src/modules/BasePrice&Quantity');
const Package = require("./src/modules/Package");
const {
    inputIsValid
} = require("./src/helpers/errorHandling");
const {
    INVALID_FORMAT,
    INVALID_BASEPRICE,
    INVALID_PACKAGE,
    BASEPRICE_INDEX,
    PACKAGES_STARTING_INDEX
} = require("./src/data/constants");

let input = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (cmd) {
    input.push(cmd);
});

rl.on('close', function () {
    inputIsValid(input);
    try {
        var basePrice = new BasePriceAndQuantity(input[BASEPRICE_INDEX]);
    } catch (err) {
        console.error(INVALID_BASEPRICE);
    }
    for (let eachPackage = PACKAGES_STARTING_INDEX; eachPackage < input.length; eachPackage++) {
        try {
            var package = new Package(input[eachPackage]);
            const deliveryCost = basePrice.getBasePrice() + package.getDeliveryCost();
            const discount = deliveryCost * package.getDiscount();
            const totalCost = deliveryCost - discount;
            console.log(package.getPackageId(), discount, totalCost);
        } catch (err) {
            console.error(INVALID_PACKAGE);
        }
    }

});