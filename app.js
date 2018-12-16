const { argv } = require('./config/yargs.config');
let { crearArchivo, listar } = require('./multiplicar/multiplicar');
var colors = require('colors');

// let base = process.argv[2].split("=")[1];

// console.log(`La base es ${argv.base}`, `el limite es ${argv.limite}`);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        console.log("\n==============================");
        console.log("Creacion de tabla de multiplicar");
        console.log("================================");

        crearArchivo(argv.base, argv.limite)
            .then(result => console.log(`\nSe ha creado el archivo: ${colors.green(result)}\n`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}