import { isEmpty } from '../src/client/js/form';

describe('isEmpty', () => {
    test('should return true if input is undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    })
    test('should return true if input is empty', () => {
        expect(isEmpty('')).toBe(true);
    });
    test('should return true if input is only whitespace', () => {
        expect(isEmpty(' ')).toBe(true);
    });
    test('should return false if input is not empty', () => {
        expect(isEmpty('test')).toBe(false);
    });
});