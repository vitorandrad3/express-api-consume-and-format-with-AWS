const { percentFormater } = require('../../utils/convertToPercent');

describe('test percent formater', () => {

    it('should return correct percents', () => {
        expect(percentFormater(0.1)).toBe('10%');
        expect(percentFormater(0.35)).toBe('35%');
        expect(percentFormater(0)).toBe('0%');
        expect(percentFormater(0.01)).toBe('1%');
    });
});