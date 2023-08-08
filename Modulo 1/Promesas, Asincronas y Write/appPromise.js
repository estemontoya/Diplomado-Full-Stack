const fs = require('fs');

let multiplicadoraPromesa = (base) => {
    return new Promise((resolve, reject) => {
        let tabla = "";
        for (let iCont = 0; iCont < 11; iCont++) {
            tabla += `${iCont} * ${base} = ${iCont * base} \n`;
        }
        fs.writeFile(`tabla-del-${base}.txt`, tabla, (err) => {
            if (err) 
                reject(err);
            else 
                resolve();
        });
    });
};

module.exports = {
    multiplicadoraPromesa
};