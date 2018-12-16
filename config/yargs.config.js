let option = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};


const argv = require("yargs")
    .command('listar', 'Listar tablas de multiplicar', option)
    .command('crear', 'crear un archivo con la tabla y su limite', option)
    .help()
    .argv;

module.exports = {
    argv
};