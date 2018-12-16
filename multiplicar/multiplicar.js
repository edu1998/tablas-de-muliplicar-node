let fs = require('fs');
var colors = require('colors');

let tabla = '';

let crearArchivo = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        tabla += `${base} * ${i} = ${base * i} \n`;
    }

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("la base no es un numero");
            return;
        }

        fs.writeFile(`archivos/tabla_${base}_al_${limite}.txt`, `${tabla}`, err => {
            if (err) {
                reject(`A ocurrido un error al crear el archivo: tabla_${base} y limite: ${limite}`);
            } else {
                resolve(`tabla_${base}_limite_${limite}`);
            }
        });
    });
}

let listar = (base, limite) => {

    console.log('\n===========================');
    console.log(`Tabla de multiplicar del ${base}`.cyan);
    console.log('===========================\n');

    for (let i = 1; i <= limite; i++) {
        tabla += `${base} * ${i} = ${colors.green(base * i)} \n`;
    }
    console.log(tabla);

    /**
     * eso de aqui abajo es mas lento que lo de arriba
     */

    // for (let i = 1; i <= limite; i++) {
    //     console.log(`${base} * ${i} = ${base * i} \n`)
    // }

}

module.exports = {
    crearArchivo,
    listar
};