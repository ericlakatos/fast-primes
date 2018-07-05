const isPrime = require('../src/index.min');

describe('is prime', () => {
    it('finds that 6 is not prime', function() {
        let output = isPrime(6);
        let expected = false;

        expect(output).toEqual(expected);
    });

    it('finds that 47 is prime', function() {
        let output = isPrime(7);
        let expected = true;

        expect(output).toEqual(expected);
    });

    it('finds that 808689 is not prime', function() {
        let output = isPrime(808689);
        let expected = false;

        expect(output).toEqual(expected);
    });
});
