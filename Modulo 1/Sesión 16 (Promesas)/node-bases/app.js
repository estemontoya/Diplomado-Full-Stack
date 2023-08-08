const fs = require('node:fs')


let base = 5;
let multiplicadora = (base) => {
    let tabla = "";
    for (let iCont = 0; iCont < 11; iCont++) {
        tabla += `${iCont} * ${base} = ${iCont * 5} \n`;    
    }    
    return tabla;
}

fs.writeFileSync(`tabla-del-${base}.txt` , multiplicadora(base));