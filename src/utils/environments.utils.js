/*jshint esversion: 8 */

module.exports = {
    validateRequiredEnvs: (requiredEnvs) =>{
        for (const requiredEnv of requiredEnvs) {
            if(!process.env[requiredEnv]) {
                throw new Error (`${requiredEnv} must defined on the .env file`);
            }
        }
    }
};