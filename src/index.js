module.exports = {
    isPrime: num => {
        if (!Number.isInteger(num) || num <= 2 || num % 2 === 0) return false;

        const sqrt = Math.sqrt(num);

        for (let i = 3; i <= sqrt; i++) {
            if (num % i === 0) return false;
        }

        return true;
    },
    findPrime: (...args) => {
        const nums = Array.from(
            new Set(args.filter(number => Number.isInteger(number)))
        );

        return nums.reduce((results, num, index, arr) => {
            const sqrt = Math.sqrt(num);
            let result = { number: num, isPrime: true };

            if (num <= 2 || num % 2 === 0) {
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
