const fs = require('fs');
const { command } = require('yargs');

let listadoPorHacer = [];

ListadoTareas = () => {
    return listadoPorHacer = require('../db/data.json');
}

const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);//convierto el arreglo a un json
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar.', err);
    });
}

const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarBD();//asigna a listadoPorHacer lo que tiene registrado
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);//ahrego la tarea al arreglo 
    guardarBD();
    return porHacer;
}

const actualiza = (descripcion, completado = true) => {
    cargarBD();
    //findIndex me permite buscar dentro de un arreglo y me devulve la posicion indice de el contenido encontrado
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        //modifico el registro que contiene el arreglo por el index(en este momento contiene toda la info del data.json),
        listadoPorHacer[index].completado = completado;
        guardarBD();//envio mi arrelo con todo su contyenmido a sobre escrivir el archivo data.json
        return true;
    } else {
        return false;
    }
}

const eliminarDoc = (descripcion) => {
    cargarBD();//cargo arreglo con el contenido del archivo .json
    //omito popr medio del filter el registro y creo unnuevo arreglo
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }

}

module.exports = {
    crear,
    ListadoTareas,
    actualiza,
    eliminarDoc
}
