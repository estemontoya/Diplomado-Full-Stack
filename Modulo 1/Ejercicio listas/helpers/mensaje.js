const { default: inquirer } = require('inquirer');
const { resolve } = require('path');

// Importar el módulo 'colors' para aplicar colores a la consola
require('colors');

// Función para mostrar el menú de opciones
const mostrarMenu = () => {
    
    return new Promise((resolve) => {
         // Mostrar encabezado con color de fondo y formato
        console.log('------------------------------------------'.bgCyan);
        console.log('           MENÚ DE OPCIONES              '.bgCyan.black);
        console.log('------------------------------------------'.bgCyan);

        // Mostrar opciones numeradas con colores
        console.log(`${'1'.yellow}. ${'Crear Nueva Tarea'.cyan}`);
        console.log(`${'2'.yellow}. ${'Listar Tareas'.cyan}`);
        console.log(`${'3'.yellow}. ${'Listar Tareas Completas'.cyan}`);
        console.log(`${'4'.yellow}. ${'Listar Tareas Pendientes'.cyan}`);
        console.log(`${'5'.yellow}. ${'Completar Tareas (s)'.cyan}`);
        console.log(`${'6'.yellow}. ${'Borrar Tareas'.cyan}`);
        console.log(`${'7'.yellow}. ${'Salir'.cyan}`);

        // Crear una interfaz para leer entrada del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        // Preguntar al usuario por una opción
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(`Ha seleccionado la opción: ${opt}`.green);
        });
    })
};

// Exportar la función mostrarMenu con alias 'mostrarMenu'
module.exports = {
    mostrarMenu
};
