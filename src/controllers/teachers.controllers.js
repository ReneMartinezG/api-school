/*jshint esversion: 8 */
const Teacher = require("../models/Teachers.js");

module.exports.getAll = async (req,res)=>{
    const findTeacher = await Teacher.find();
    res.json(findTeacher);
};

module.exports.createOne = async (req,res)=>{
    const {firstName,lastName,age} = req.body;

    const newTeacher = new Teacher({
        firstName,
        lastName,
        age
    });

    await newTeacher.save();

    res.json({message: "Teacher Created"});
};

module.exports.updateOne = async (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;

    await Teacher.findByIdAndUpdate(id,{
        $set: {
            firstName,
            lastName,
            age
        }
    });

    res.json({message: "Teacher Updated"});
};

module.exports.deleteOne = async (req,res)=>{
    const {id} = req.params;

    await Teacher.findByIdAndDelete(id);

    res.json({message: "Teacher Deleted"});
};

