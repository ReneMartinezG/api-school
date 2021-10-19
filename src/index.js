/*jshint esversion: 8 */
require("dotenv").config();
require("./database.js");
const { 
    environmentUtils: {validateRequiredEnvs}
    } = require("./utils/index.utils.js");

const app = require("./app.js");

const {port} = require("./config/index.config.js");

const environmentReq = [
    'PORT',
    'MONGO_URI'
];

validateRequiredEnvs(environmentReq);


app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
});