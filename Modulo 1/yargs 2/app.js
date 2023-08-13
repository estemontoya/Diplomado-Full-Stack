const fs= require('node:fs');
const {mostrarMenu}  = require ('./helpers/mensaje');
const {inquireMenu, leerInput, pausa, leerBool}  = require ('./helpers/inquire.js');
const Tareas = require("./models/Tareas");

console.clear();

//? Todas las funciones que se llamen en una función asincrona deben de tener un retorno de tipo promesa
const main = async () =>{
    let opt = " ";
    const tareas = new Tareas();

    do {
        // console.clear();
        // opt = await mostrarMenu();
        // console.log(opt);
        // await pausa();
        opt = await inquireMenu();
        console.log(opt);

        switch (opt) {
            case '1':
                const desc = await leerInput();
                tareas.crearTarea();
            break;
            case '2':
                console.log(tareas.getListadoArr);
            break;
            case '3':
                tareas.listadoCompletoBool(true);
                //console.log(tareas.listadoCompleto());
                break;
            case '4':
                //const bool = await leerBool();
                tareas.listadoCompletoBool(false);
                
            break;
            case '5':
                
            break;
            case '6':
                
            break;      
            default:
                break;
        }

        await pausa();

    } while (opt !== "0");
}

main();

