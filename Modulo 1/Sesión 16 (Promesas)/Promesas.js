/**
 * Apartado de variables  
 */
const salarios = [{
    id:1,
    salario: 400
},
{
    id:2,
    salario: 100
}]

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



const getSalario = (id) => {
    return new Promise((resolve, reject)=> {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject (`No existe el salario con el id ${id}`);
    });
}

const id = 1;

getSalario(id)
    .then(salario => {console.log(`El salario del empleado con id ${id} es de $${salario}`)})
    .catch(err => console.log("Esta ocurriendo un erro " + err))


