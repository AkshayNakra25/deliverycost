const offers = require("../data/offers.json");
const {
    BASEPRICE_INDEX,
    PACKAGE_MISSING
} = require("../data/constants");

function ifNull(value){
    try{
        if(value === null){
            throw "is empty";
        }else{
            return false;
        }
    }catch(err){
        console.error("Value provided " + err);
    }
}

function notNumber(value){
    try{
        if(isNaN(value)){
            throw "is not a number";
        }else{
            return false;
        }
    }catch(err){
        console.error("Value provided " + err);
    }
}

function checkOfferId(value){
    try{
        let offerKeys = Object.keys(offers)
        if(!offerKeys.includes(value)){
            throw "is not an offer ID";
        }else{
            return false;
        }
    }catch(err){
        console.error("Value provided " + err);
    }
}

function inputIsValid(input){
    if (input.length <= 1) {
        console.error(INVALID_FORMAT);
    }else if(input.length - 1 <= input[BASEPRICE_INDEX].split(" ")[BASEPRICE_INDEX + 1]){
        console.error(PACKAGE_MISSING);
    }
}

module.exports = { ifNull, notNumber, checkOfferId, inputIsValid}