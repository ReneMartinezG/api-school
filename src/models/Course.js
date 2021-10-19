/*jshint esversion: 8 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teachers: [{
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        autopopulate: true
    }]
},{
    timestamps: true,
    versionKey: false
});

courseSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("Course",courseSchema);