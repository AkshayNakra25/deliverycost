const { ifNull, notNumber} = require("../helpers/errorHandling");
 
function inRange(minimumValue, maximumValue, value) {
    if (!ifNull(minimumValue) && !ifNull(maximumValue) && !ifNull(value)) {
        if(!notNumber(minimumValue) && !notNumber(minimumValue) && !notNumber(minimumValue)){
            return minimumValue <= value && maximumValue >= value;
        }
    }

}

module.exports = inRange;