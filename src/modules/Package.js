const offers = require("../data/offers.json");
const inRange = require("../helpers/inRange");
const { WEIGHT_MULTIPLER, DISTANCE_MULTIPLER, PERCENTAGE, ZERO_PERCENTAGE } = require("../data/constants");
const { ifNull, notNumber, checkOfferId} = require("../helpers/errorHandling");
 

class Package {

    constructor(packageInfo) {
        const [packageId, packageWeight, packageDistance, offerId] = packageInfo.split(" ");
        if(!ifNull(packageWeight) && !notNumber(packageWeight) 
            && !ifNull(packageDistance) && !notNumber(packageDistance)
            && !checkOfferId(offerId) && !ifNull(packageId)){
                this.packageId = packageId;
                this.packageWeight = parseFloat(packageWeight);
                this.packageDistance = parseFloat(packageDistance);
                this.offerId = offerId;
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
        return parseFloat((this.packageWeight * WEIGHT_MULTIPLER) + (this.packageDistance * DISTANCE_MULTIPLER));
    }

    getDiscount() {
        let offerDetails = offers[this.offerId.toUpperCase()];
        if (inRange(offerDetails.minDistance, offerDetails.maxDistance, this.packageDistance) &&
            inRange(offerDetails.minWeight, offerDetails.maxWeight, this.packageWeight)) {
            return offerDetails.discountPercentage / PERCENTAGE;
        } else {
            return ZERO_PERCENTAGE;
        }
    }

}

module.exports = Package;