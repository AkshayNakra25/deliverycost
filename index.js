const readline = require('readline');
const BasePriceAndQuantity = require('./src/modules/BasePrice&Quantity');
const Package = require("./src/modules/Package");
let input = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (cmd) {
    input.push(cmd);
});

rl.on('close', function () {
    const basePrice = new BasePriceAndQuantity(input[0]);
    for (let eachPackage = 1; eachPackage < input.length; eachPackage++){
        let package = new Package(input[eachPackage]);
        const deliveryCost = basePrice.getBasePrice() +  package.getDeliveryCost();
        const discountPercentage = package.getDiscount()
        const discount = deliveryCost*discountPercentage;
        const totalCost = deliveryCost - discount;
        console.log(package.getPackageId(), " " , discount, " ",  totalCost);
    }
});