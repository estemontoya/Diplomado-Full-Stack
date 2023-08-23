const fs = require('fs');

const guardaDB = (data) => {
    fs.writeFileSync('archivo.txt' , data);
}

const leerDB = () => {
    if(!fs.existsSync(archivo)) {
        return null;
    }

    const = fs.readFileSync(archivo, {enconding: 'utf-8'});
    const data = JSON.parse
}