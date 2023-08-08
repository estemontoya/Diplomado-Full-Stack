const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base inicial de la tabla de multiplicación',
    }).argv;

module.exports = argv;
// console.log(argv);
// console.log(argv.base);

//let baseMultiplicacion = argv.b;

// const arg = process.argv;
// console.log(arg[2]);

// let base = arg[2].split('-');
// console.log(base);


//module.exports = baseMultiplicacion;