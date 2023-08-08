const fs = require('node:fs')
const argv = require('./config/yargs')

const base = argv.b;
console.log(`Base ingresada: ${base}`);

// crearTablaPromess(b)
//     .then(base =>{
//         console.log(`Se ejecuto correctamente ${base}`);
//     })
//     .catch(err => {
//         console.log(`Hubo un error ${err}`);
//     })