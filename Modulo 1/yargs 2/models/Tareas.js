const { Tarea } = require("./Tarea");

class Tareas {
    constructor() {
        this._listado = {};
    }

    get getListadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    crearTarea(desc = " ") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        console.log(tarea);
    }

    listadoCompleto() {
        this.getListadoArr.forEach((tarea , i) => {
            const idx = `${i + 1}`.red;
            const {desc , completado} = tarea;

            const estado = (completado)
                ? 'Completado'.green
                : 'Pendientes'.red

                console.log(`${idx} ${desc} => ${estado}`);
        })
    }

    listadoCompletoBool(opcion) {
        let resultadoFinal = [];
        this.getListadoArr.forEach((tarea , i) => {
            const idx = `${i + 1}`.red;
            const {desc , completadoEn} = tarea;

            let estado;

            if (opcion) {
                if(completadoEn) {
                    estado = 'Completado'.green;
                    if (completadoEn != null) {
                        resultadoFinal.push(`${idx} ${desc} => ${estado}`);
                    }
                }
            } else {
                estado = 'Pendiente'.red;   
                if (completadoEn == null) {
                    resultadoFinal.push(`${idx} ${desc} => ${estado}`);
                }
            }
        })

        if (resultadoFinal.length == 0) {
            console.log("No hay tareas finalizadas".blue);
        } else {
            console.log(resultadoFinal.toString());
        }
    }
}

module.exports = Tareas;