module.exports = (arg => {
    if (arg === 1) return false;
    const sieve = 2;
    return new Array(arg + sieve).fill(true).map((num, index, arr) => {
        if (num && index > 1) {
            for (let j = index * index; j < arg + sieve; j += index) {
                arr[j] = false;
            }
        }
        return num;
    }, [])[arg];
});