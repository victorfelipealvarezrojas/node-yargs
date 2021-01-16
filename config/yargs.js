const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        //campo obligatorio que recibira desde la consola con alias d  node app crear -d "paseo",
        //aqui valido que sea obligatorio y le asigno un alias, estos son los nombres q se usaran en la consola para ejecutar la funcion
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por actualizar'
        },
        completado: {
            default: 'true',
            alias: 'c',
            desc: 'Marca como completada la tarea'
        }
    })
    .command('eliminar', 'Elimina un elemento', {
        descripcion: {
            demand: true,
            alias: 'e',
            desc: 'Descripcion de la tarea por Elimina un registro'
        }
    })
    .help()
    .argv;

    module.exports = {
        argv
    }

