const offers = require("../data/offers.json");
const inRange = require("../helpers/inRange");
const { ifNull, notNumber, checkOfferId} = require("../helpers/errorHandling");
 

class Package {

    constructor(packageInfo) {
        const [packageId, packageWeight, packageDistance, offerId] = packageInfo.split(" ");
        if(!ifNull(packageWeight) && !notNumber(packageWeight) 
            && !ifNull(packageDistance) && !notNumber(packageDistance)
            && !checkOfferId(offerId) && !ifNull(packageId)){
                [this.packageId, this.packageWeight, this.packageDistance, this.offerId] = packageInfo.split(" ");
        }

    }

    getPackageId() {
        return this.packageId;
    }

    getPackageWeight() {
        return parseFloat(this.packageWeight);
    }

    getPackageDistance() {
        return parseFloat(this.packageDistance);
    }

    getPackageOfferId() {
        return this.offerId;
    }

    getDeliveryCost() {
        return parseFloat((this.packageWeight * 10) + (this.packageDistance * 5));
    }

    getDiscount() {
        let offerDetails = offers[this.offerId.toUpperCase()];
        if (inRange(offerDetails.minDistance, offerDetails.maxDistance, this.packageDistance) &&
            inRange(offerDetails.minWeight, offerDetails.maxWeight, this.packageWeight)) {
            return offerDetails.discountPercentage / 100;
        } else {
            return 0;
        }
    }

}

module.exports = Package;