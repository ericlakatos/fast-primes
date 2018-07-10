const { isPrime, findPrime, findPrimeInRange } = require('../build/index.min');

describe('is prime', () => {
    it('finds that 1 is not prime', function() {
        let output = isPrime(1);
        let expected = false;

        expect(output).toEqual(expected);
    });

    it('finds that 6 is not prime', function() {
        let output = isPrime(6);
        let expected = false;

        expect(output).toEqual(expected);
    });

    it('finds that {} is not prime', function() {
        let output = isPrime({});
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

describe('findPrime', () => {
    it('finds that 6, 47 and 808689 returns a valid result array', function() {
        let output = findPrime(6, 47, 808689);
        let expected = [47];

        expect(output).toEqual(expected);
    });

    it('finds that 7, 47, "" and {} returns a valid result array', function() {
        let output = findPrime(7, 47, '', {});
        let expected = [7, 47];

        expect(output).toEqual(expected);
    });

    it('finds that 47, 7, 20, "" and {} returns a valid result array', function() {
        let output = findPrime(47, 7, 20, '', {});
        let expected = [7, 47];

        expect(output).toEqual(expected);
    });
});

describe('findPrimeInRange', () => {
    it('finds that 3, 20 returns a valid result array', function() {
        let output = findPrimeInRange(3, 20);
        let expected = [3, 5, 7, 11, 13, 17, 19];

        expect(output).toEqual(expected);
    });

    it('finds that 20, 3 returns a valid result array', function() {
        let output = findPrimeInRange(20, 3);
        let expected = [3, 5, 7, 11, 13, 17, 19];

        expect(output).toEqual(expected);
    });

    it('finds that 20, 3 and extra garbo returns a valid result array', function() {
        let output = findPrimeInRange(20, 3, {}, '', () => {});
        let expected = [3, 5, 7, 11, 13, 17, 19];

        expect(output).toEqual(expected);
    });

    it('finds that "", {} returns a valid result array', function() {
        let output = findPrimeInRange('', {});
        let expected = [];

        expect(output).toEqual(expected);
    });
});
