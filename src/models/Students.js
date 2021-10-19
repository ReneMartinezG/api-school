/*jshint esversion: 8 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: "Course",
        autopopulate: true
    }]
},{
    timestamps: true,
    versionKey: false
});

studentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Student",studentSchema);