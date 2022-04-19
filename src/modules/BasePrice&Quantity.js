const { ifNull, notNumber} = require("../helpers/errorHandling");
 
class BasePriceAndQuantity {

    constructor(packageInfo){
        const [basePrice, quantity] = packageInfo.split(" ");
        if(!ifNull(basePrice) && !notNumber(basePrice) 
            && !ifNull(quantity) && !notNumber(quantity)){
                this.basePrice = parseFloat(basePrice);
                this.quantity = parseFloat(quantity);
        }
    }

    getBasePrice(){
        return parseFloat(this.basePrice);
    }

    getPackageQuantity(){
        return parseFloat(this.quantity);
    }
}


module.exports = BasePriceAndQuantity;
