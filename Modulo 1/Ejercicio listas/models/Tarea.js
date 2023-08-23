const {v4: uuidv4} = require('uuid');

class Tarea {
    constructor(desc, completadoEn = null) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = completadoEn;
    }
}

module.exports = {
    Tarea
};
