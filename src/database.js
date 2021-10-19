/*jshint esversion: 8 */
const mongoose =  require("mongoose");
const {mongoUri} = require("./config/index.config.js");

mongoose.connect(mongoUri)
    .then( (db)=>{
        console.log("Databse is connected");
    })
    .catch( (error)=>{
        throw error;
    });