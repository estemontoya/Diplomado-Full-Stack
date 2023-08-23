const inquirer = require ('inquirer');
const suma = (numero1 , numero2) => {
    return numero1 + numero2
}
const multiplicar = async (numero1 , numero2) => {
    return numero1 * numero2;
}
const restarPromise = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        const resultado = numero1 - numero2;
        isNaN(resultado) ? reject(new Error('El resultado no es un número válido.')) : resolve(resultado);
    });
};

const principal = async () => {
    const pregunta = [{
        type: "input",
        name: "numero",
        message: "Por favor ingresa un numero",
        validate: function (value) {
            if (isNaN(value)) {
                return "Ingresa un número valido";
            } else {
                return true;
            }
        }
    }];
    console.log("Programa para sumar");
    let num1 = parseFloat( (await inquirer.prompt(pregunta)).numero);
    let num2 = parseFloat( (await inquirer.prompt(pregunta)).numero);
    console.log("\n");
    console.log(`La suma de los dos números es ${suma(num1 , num2)}`);
    console.log("\n");
    console.log(`Esta multiplicacion es asincrona: ${await multiplicar(num1, num2)}`);
    console.log("\n");
    try {
        const resultado = await restarPromise(num1, num2);
        console.log(`La resta de los dos números es: ${resultado}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

principal();




module.exports = {
    suma,
    principal
};

