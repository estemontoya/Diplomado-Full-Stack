const usuario ={
    //Propiedad y Valor
    nombre:'Amanda',
    apellido_paterno:'Sabino',
    edad:34,
    isGirl:false,
    direccion:{
        calle:'Test',
        num_ext:45,
        cp:5699,
    },
    areas:['TI','Admin','Contabilidad']
};

console.log(usuario);

console.log(usuario.nombre);
console.log(usuario['apellido_paterno']);
console.log(usuario.areas[usuario.areas.length -1]);

console.log(usuario.areas.indexOf('admin'));

