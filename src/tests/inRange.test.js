const inRange = require('../helpers/inRange');

describe('In Range Function Test', () => {

    it('inRange function should return true/false if value is above(eq)/below minimum or below(eq)/above maximum', () => {
        expect(inRange(7, 7, 7)).toBe(true);
        expect(inRange(10, 11, 15)).toBe(false);
    });
});