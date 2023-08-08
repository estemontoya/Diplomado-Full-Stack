const fs = require('fs');

let multiplicadora = (base) => {
    let tabla = "";
    for (let iCont = 0; iCont < 11; iCont++) {
        tabla += `${iCont} * ${base} = ${iCont * base} \n`;
    }
    fs.writeFileSync(`tabla-del-${base}.txt`, tabla);
};

module.exports = {
    multiplicadora
};