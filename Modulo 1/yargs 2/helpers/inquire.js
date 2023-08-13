const inquirer = require ('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que opcion quiere ?',
        choices: [
            {
                value: '1',
                name: 'Crear Nueva Tarea'
            },
            {
                value: '2',
                name: 'Listar Tareas'
            },
            {
                value: '3',
                name: 'Listar Tareas Completas'
            },
            {
                value: '4',
                name: 'Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: 'Completar Tareas (s)'
            },
            {
                value: '6',
                name: 'Borrar Tareas'
            },
            {
                value: '0',
                name: 'Salir'
            }
        ]
    }
];

const inquireMenu = async() => {
    console.clear();
    console.log('------------------------------------------'.bgCyan);
    console.log('           MENÚ DE OPCIONES              '.bgCyan.black);
    console.log('------------------------------------------'.bgCyan);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const leerInput = async() => {

    const pregunta = [{
        type: "input",
        name: "desc",
        message: "Descripcion: ",
        validate(value) {
            if(value.length === 0) {
                return "Por favor ingresa un valor";
            }

            return true;
        }
    }]
    await inquirer.prompt(pregunta);
}
const leerBool = async() => {

    const pregunta = [{
        type: "input",
        name: "bool",
        message: "Ingresa 1 para Completadas y 0 para Pendientes: ",
        validate(value) {
            if(value == 0) {
                return "false";
            }
            return "true";
            
        }
    }]
    await inquirer.prompt(pregunta);
}

const pausa = async ()=> {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'} para continuar`
        }
    ];

    await inquirer.prompt(question);

    // return new Promise((resolve)=> {
    //     const readline = require('readline').createInterface({
    //         input: process.stdin,
    //         output: process.stdout,
    //     })

    //     readline.question(`Presione ENTER para poder continuar ` , (opt) => {
    //         readline.close();
    //         resolve(opt);
    //     })
    // });

}

module.exports = {
    inquireMenu,
    leerInput,
    pausa,
    leerBool
}