const { isPrime, findPrime } = require('../build/index.min');

describe('is prime', () => {
    it('finds that 6 is not prime', function() {
        let output = isPrime(6);
        let expected = false;

        expect(output).toEqual(expected);
    });

    it('finds that 47 is prime', function() {
        let output = isPrime(47);
        let expected = true;

        expect(output).toEqual(expected);
    });

    it('finds that 808689 is not prime', function() {
        let output = isPrime(808689);
        let expected = false;

        expect(output).toEqual(expected);
    });
});

describe('primes', () => {
    it('finds that 6, 47 and 808689 returns a valid result array', function() {
        let output = findPrime(6, 47, 808689);
        let expected = [
            { number: 6, isPrime: false },
            { number: 47, isPrime: true },
            { number: 808689, isPrime: false },
        ];

        expect(output).toEqual(expected);
    });
});
