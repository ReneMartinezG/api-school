/*jshint esversion: 8 */
const Joi = require("@hapi/joi");

const schema = Joi.object({
    name: Joi.string().required()
});

module.exports = schema;