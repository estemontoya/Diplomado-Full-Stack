const usuario = {
    nombre: 'Amanda',
    apellido_paterno: 'Sabino',
    edad: 34,
    isGirl: false,
    dirección: {
        calle: 'Test',
        num_ext: 45,
        cp: 5699
    },
    areas: ['TI' , 'Admin', 'Contabilidad']
};

usuario.areas.unshift('Finanzas');
console.log(usuario);

const empleado = {
    nombre: 'Esteban',
    apellido: 'Montoya',
    correo: 'estemontoya@outlook.com',
    puesto: 'Analista',
    roles : {
        1: 'Desarrollador',
        2: 'Analista',
        3: 'Documentador',
    }
}
console.log(empleado);
console.log("Nombre: " + empleado.nombre);
console.log("Puesto: " + empleado.puesto);
console.log("Rol 3: " + empleado.roles[3]);


//? Arreglos

let carros = ['Mazada' , 'BMW', 'KIA' , 'Porche']
console.log(carros);

const lambda = () => Math.random();

console.log(lambda());
console.log(lambda());
console.log(lambda());
console.log(lambda());