const readline = require('readline');
const chalk = require('chalk');
const log = console.log;
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const suites = [
    {
        name: 'Working',
        tests: [
            {
                name: 'isPrime',
                case: 'One Number',
                data: require('./cases/one'),
                fn: require('../src/index.min').isPrime,
            },
            {
                name: 'findPrime',
                case: 'Few Numbers',
                data: require('./cases/few'),
                fn: require('../src/index.min').findPrime,
            },
            {
                name: 'findPrime',
                case: 'Many Numbers',
                data: require('./cases/many'),
                fn: require('../src/index.min').findPrime,
            },
            {
                name: 'findPrimeInRange',
                case: 'Two Numbers',
                data: require('./cases/two'),
                fn: require('../src/index.min').findPrimeInRange,
            },
        ],
    },
    {
        name: 'Stable',
        tests: [
            {
                name: 'isPrime',
                case: 'One Number',
                data: require('./cases/one'),
                fn: require('../build/index.min').isPrime,
            },
            {
                name: 'findPrime',
                case: 'Few Numbers',
                data: require('./cases/few'),
                fn: require('../build/index.min').findPrime,
            },
            {
                name: 'findPrime',
                case: 'Many Numbers',
                data: require('./cases/many'),
                fn: require('../build/index.min').findPrime,
            },
            {
                name: 'findPrimeInRange',
                case: 'Two Numbers',
                data: require('./cases/two'),
                fn: require('../src/index.min').findPrimeInRange,
            },
        ],
    },
];

const average = 1; // Amount to run each test
const benchmark = 0.1; // Percent to compare against
let results = [];
let cycles = 0;
let ops = 0;

for (let tests of suites) {
    for (let test in tests.tests) {
        for (let i = 1; i <= average; i++) {
            const name = tests.name;
            const testName = tests.tests[test].case;
            const fn = tests.tests[test].fn;
            const data = tests.tests[test].data;
            const isArray = typeof data === 'array';

            if (isArray) {
                suite.add(`${name}: ${testName}`, () => {
                    fn(...data);
                });
            } else {
                suite.add(`${name}: ${testName}`, () => {
                    fn(data);
                });
            }
        }
    }
}

suite
    .on('cycle', event => {
        ops += Math.floor(event.target.hz);
        cycles++;

        if (cycles > 0) {
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
        }

        if (cycles < average) {
            process.stdout.write(
                chalk.bold.gray(
                    String(event.target),
                    `[${cycles} of ${average}]`
                )
            );
        } else {
            results.push(Math.floor(ops / average));

            process.stdout.write(
                chalk.bold.yellow(
                    `${event.target.name} x ${Math.floor(
                        ops / average
                    ).toLocaleString()} ops/sec average (${average} Tests)\n`
                )
            );

            cycles = 0;
            ops = 0;
        }

        if (cycles === 0) process.stdout.write(chalk.gray('Continuing...'));
    })
    .on('start', () => {
        log(chalk.bold.bgBlue.white(' Starting benchmarks... \n'));
    })
    .on('complete', () => {
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
        log();

        suites[0].tests.reduce((counter, test, index, arr) => {
            const work = parseInt(results[counter]);
            const stable = parseInt(results[counter + arr.length]);
            const diff = parseInt(work - stable);
            const min = parseInt(stable * benchmark);
            const better = diff > min;
            const worse = diff < 0 - min;
            const comparable = !better && !worse;
            const msg = ` ${parseInt(
                (diff / stable) * 100
            )}% ${suites[0].name.toUpperCase()} DELTA: ${test.case} -> ${
                test.name
            } `;

            log(
                better
                    ? chalk.bold.bgGreen.white(msg)
                    : worse
                        ? chalk.bold.bgRed.white(msg)
                        : comparable
                            ? chalk.bold.bgWhite.black(msg)
                            : chalk.bold.bgYellow.black('UNKNOWN RESULT')
            );

            return counter + 1;
        }, 0);

        log(chalk.gray(`\nRan all benchmarks.`));
    })
    .run({ async: true });
