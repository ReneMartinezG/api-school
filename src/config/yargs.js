/*jshint esversion: 8 */
const argv = require("yargs")
    .options('s',{
        alias: 'students',
        type: 'number',
        demandOption: false,
        describe: 'crea datos de alumnos'
    })
    .options('t',{
        alias: 'teachers',
        type: 'number',
        demandOption: false,
        describe: 'crea datos de profesores' 
    }).check((argv,options)=>{
        if(argv.s){
            if(isNaN(argv.s)){
                throw "students tiene que ser un numero";
            }
        }
        if(argv.t){
            if(isNaN(argv.t)){
                throw "teachers tiene que ser un numero";
            }
        }
        return true;
    }).argv;

module.exports = argv;