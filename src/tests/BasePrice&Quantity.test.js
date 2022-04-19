const BasePriceAndQuantity = require('../modules/BasePrice&Quantity');

describe('Base Price and Quantity Class Test', () => {

    beforeEach(() => {
        priceAndQuantityValue = new BasePriceAndQuantity('100 3');
    });

    it('If base price & quantity is set to correct values', () => {
        expect(priceAndQuantityValue.getBasePrice()).toBe(100);
        expect(priceAndQuantityValue.getPackageQuantity()).toBe(3);
    });
});