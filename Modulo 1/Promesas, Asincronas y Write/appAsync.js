const fs = require('fs').promses;

let multiplicadoraAsync = async (base) => {
    let tabla = "";
    for (let iCont = 0; iCont < 11; iCont++) {
        tabla += `${iCont} * ${base} = ${iCont * base} \n`;
    }
    //await fs.writeFile(`tabla-del-${base}.txt`, tabla);
    fs.writeFile(`tabla-del-${base}.txt`, tabla);
};

module.exports = {
    multiplicadoraAsync
};