const offers = require("../data/offers.json");

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

module.exports = { ifNull, notNumber, checkOfferId}