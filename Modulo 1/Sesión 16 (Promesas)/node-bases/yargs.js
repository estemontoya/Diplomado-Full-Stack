const argv = require('yargs').argv;

console.log(argv);
console.log(argv.base);

let baseMultiplicacion = argv.base;

const arg = process.argv;
console.log(arg[2]);

let base = arg[2].split('-');
console.log(base);