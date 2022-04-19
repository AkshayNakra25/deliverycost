
class BasePriceAndQuantity {

    constructor(packageInfo){
        [this.basePrice, this.quantity] = packageInfo.split(" ");
        if(isNaN(this.basePrice)){
            console.error("Base Quantity needs to be a number");
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
