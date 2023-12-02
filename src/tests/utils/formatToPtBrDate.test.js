const { dateFormater } = require('../../utils/formatToPtbrDate');

describe('test date formater', () => {

    it('should format date correctly', () => {
        expect(dateFormater('2020-01-05 13:42:25.099703')).toBe('05-01-2020');
        expect(dateFormater('2023-12-08 13:42:25.099703')).toBe('08-12-2023');
        expect(dateFormater('2022-08-15')).toBe('15-08-2022');
    });
});
