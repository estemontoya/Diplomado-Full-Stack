const empleados = [{
    id:1,
    nombre: "Esteban"
},
{
    id:2,
    nombre: "Emmanuel"
},
{
    id:3,
    nombre: "Javier"
},
{
    id:4,
    nombre: "Hector"
}]


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con el id ${id} no existe`);
    }
    console.log(empleado);
}

getEmpleado(1, (err, empleado)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
    }
    
    console.log("Imprime aqui");
})


const getSalario = (id, callback) => {
    const salario = salarios.find(ee => ee.id === id)?.salario;

    if(salario) {
        callback(null, salario);
    } else {
        callback(`El salario con el id ${id} no existe`);
    }
}