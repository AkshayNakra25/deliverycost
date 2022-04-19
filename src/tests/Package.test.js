const Package = require('../modules/Package');

describe('Package Class Test', () => {

    beforeEach(() => {
        packageObject = new Package('PKG1 10 100 OFR003'); 
    });

    it('If package is set to correct values', () => {
        expect(packageObject.getPackageId()).toBe('PKG1');
        expect(packageObject.getPackageWeight()).toBe(10);
        expect(packageObject.getPackageDistance()).toBe(100);
        expect(packageObject.getPackageOfferId()).toBe('OFR003');
    });

    it('If package is set to wrong values', () => {
        const consoleSpy = jest.spyOn(console, 'error');
        packageObject1 = new Package('PKG1 10 100 OF003');
        expect(consoleSpy).toHaveBeenCalled();
    });
});