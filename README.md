# fast-primes

A suite of JS functions to find prime numbers

## The Challenge

Write your own function inside of `src/index.js`. Run the `npm run validate` command to test and benchmark your code against the stable. If all tests pass and the benchmark improves over the stable then PR!

## Usage

```javascript
const { isPrime, findPrime } = require('fast-primes');

isPrime(6);
// return Boolean: false

findPrime(6, 47, 808689);
// return Array: [
//     { number: 6, isPrime: false },
//     { number: 47, isPrime: true },
//     { number: 808689, isPrime: false },
// ];
```

## Development

Minify, test and benchmark (if tests pass) stable and working

```node
npm run validate
```

Run all tests

```node
npm run test
```

Run all benchmarks

```node
npm run benchmark
```

Build production

```node
npm run build-prod
```
