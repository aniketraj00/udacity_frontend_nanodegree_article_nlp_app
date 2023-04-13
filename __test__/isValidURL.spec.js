import { isValidURL } from '../src/client/js/form';

describe('isValidURL', () => {
    test('should return true if input is a valid URL', () => {
        expect(isValidURL('https://www.udacity.com')).toBe(true);
    });
    test('should return false if input is not a valid URL', () => {
        expect(isValidURL('udacity')).toBe(false);
    });
});