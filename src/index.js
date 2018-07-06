module.exports = {
    isPrime: num => {
        if (!(num & 1)) return false;

        const sqrt = Math.sqrt(num);

        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) return false;
        }

        return true;
    },
    findPrime: (...args) => {
        // This is a very blown out version that returns a data object
        // We should probably just be okay returning an array of valid primes
        const nums = Array.from(
            new Set(args.filter(number => Number.isInteger(number)))
        );

        return nums.reduce((results, num, index, arr) => {
            const sqrt = Math.sqrt(num);
            let result = { number: num, isPrime: true };

            if (!(num & 1)) {
                result.isPrime = false;
            } else {
                for (let i = 3; i <= sqrt; i++) {
                    if (num % i === 0) result.isPrime = false;
                }
            }

            results.push(result);

            return results;
        }, []);
    },
};
