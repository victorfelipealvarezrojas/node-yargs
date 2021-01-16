
//validacion de comandos de entrada tiene la defionicion de quie valores captura y su definicion 
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];//obtengo comando desde consola 

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);//es la tarea que ingreso desde la consola  node app crear -d "paseo" 
        break;
    case 'listar':
        let listado = porHacer.ListadoTareas();
        console.log("======por hacer======".green);
        for (const tarea of listado) {
            console.log(tarea.descripcion);
            console.log(tarea.completado);
        }
        console.log("=====================".green);
        break;
    case 'actualizar':
        let resultado = porHacer.actualiza(argv.descripcion, argv.completado);
        console.log(resultado);
        break;
    case 'eliminar':
        let res = porHacer.eliminarDoc(argv.descripcion);
        console.log(res);
        break;
    default:
        console.log(argv);

}