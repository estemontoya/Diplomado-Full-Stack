const salarios = [{
    id:1,
    salario: 400
},
{
    id:2,
    salario: 100
}]


/**
 * async
 * await: Asigana funcones a realizar despues de realizar la función
 * 
 */
const roles = [
    {
        id: 1,
        rol: "Licenciado"
    }, 
    {
        id: 2,
        rol: "Maestro"
    }, 
    {
        id: 1,
        rol: "Doctor"
    }, 
]

const getRol = async (id) => {
    return new Promise ((resolve, reject) => {
        const rol = roles.find(rol => rol.id === id);

        if(rol) {
            resolve(rol);
        } else {
            reject(`No existe el rol con id ${id}`);
        }
    })
}


getRol(4)
    .then(rol => {
        console.log(`El rol es ${rol.rol} y tiene un id ${rol.id}`);
    })
    .catch((err)=> {
        console.log(err);

    })
