const checkPrime = num => {
    if (num <= 2 || num % 2 === 0) return false;
    const sqrt = Math.sqrt(num);

    for (let i = 3; i <= sqrt; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

const isPrime = num => {
    if (!Number.isInteger(num)) return false; 
    return checkPrime(num)
}

module.exports = {
    isPrime: isPrime,
    findPrime: (...args) => {
        return args.reduce((lsit, num) => {
            if (!Number.isInteger(num)) {
                return false;
            }
            return {number: num, isPrime: checkPrime(num)};
        })
    },
};
