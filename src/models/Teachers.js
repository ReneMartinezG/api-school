/*jshint esversion: 8 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Teacher",teacherSchema);