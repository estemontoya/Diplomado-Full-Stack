setTimeout(() => {
    console.log("Este es una ejemplo de callback");
}, 3000);

const getUserId = (id, nombre,  callback)=> {
    console.log("Función de flecha");

    const user = {
        id:1,
        nombre: nombre
    }

    setTimeout(() => {
        callback(user)
    }, 3000);
}

const getUser = () => {
    console.log("Get user");
}


getUserId(1, ()=> {
    console.log("Ejecutando callback");
})
