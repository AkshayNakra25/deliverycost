const offers = require("../data/offers.json");


class Package {

    constructor(packageInfo) {
        [this.packageId, this.packageWeight, this.packageDistance, this.offerId] = packageInfo.split(" ");
    }

    getPackageId(){
        return this.packageId;
    }

    getPackageWeight(){
        return this.packageWeight;
    }

    getPackageDistance(){
        return this.packageDistance;
    }

    getPackageOfferId(){
        return this.offerId;
    }

    getDeliveryCost(){
        return parseFloat((this.packageWeight *  10) + (this.packageDistance * 5));
    }

    getDiscount(){
        let offerDetails = offers[this.offerId];
        if(offerDetails.minDistance <= this.packageDistance && offerDetails.maxDistance > this.packageDistance
        && offerDetails.minWeight <= this.packageWeight && offerDetails.maxWeight > this.packageWeight){
            return offerDetails.discountPercentage / 100;
        }else{
            return 0;
        }
    }
    
}

module.exports = Package;