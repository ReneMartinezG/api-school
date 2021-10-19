/*jshint esversion: 8 */
const express =  require("express");
const app = express();
const argv = require("./config/yargs.js");
const {createFakeDataStudents, createFakeDataTeachers} = require("./models/fake-data/data.js");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

if(argv.s){
    createFakeDataStudents(argv.s);
}

if(argv.t){
    createFakeDataTeachers(argv.t);
}

app.use(require("./routes/index.routes.js"));

module.exports = app;