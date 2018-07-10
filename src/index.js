module.exports = {
    isPrime: num => {
        if (!(num & 1) || num < 2) return false;
        const sqrt = Math.sqrt(num);
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    },
    findPrime: (...args) => {
        const nums = Array.from(
            new Set(args.filter(number => Number.isInteger(number)))
        ).sort((num, next) => num - next);

        return nums.reduce((results, num, index, arr) => {
            const sqrt = Math.sqrt(num);

            if (!(num & 1) || num < 2) {
                return results;
            } else {
                for (let i = 3; i <= sqrt; i += 2) {
                    if (num % i === 0) return results;
                }
            }

            results.push(num);

            return results;
        }, []);
    },
    // 45 mil ops/sec avg
    findPrimeInRange: (number1, number2) => {
        const num1 = Number.isInteger(number1) ? number1 : 2;
        const num2 = Number.isInteger(number2) ? number2 : 2;
        const min = Math.min(num1, num2);
        const max = Math.max(num1, num2);
        const results = [];

        for (let num = min; num <= max; num++) {
            const sqrt = Math.sqrt(num);
            let isNot = false;

            if (!(num & 1) || num < 2) {
                continue;
            } else {
                for (let i = 3; i <= sqrt; i += 2) {
                    if (num % i === 0) {
                        isNot = true;
                        break;
                    }
                }
                if (isNot) continue;
            }

            results.push(num);
        }

        return results;
    },
};
