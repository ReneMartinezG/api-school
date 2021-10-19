/*jshint esversion: 8 */
const Students = require("../models/Students.js");
const Student = require("../models/Students.js");

module.exports.getAll = async (req,res)=>{
    const findStudent = await Student.find()
    .sort({age:1});

    res.json(findStudent);
    
};

module.exports.createOne = async (req,res)=>{
    const {firstName, lastName, age} = req.body;
    
    const newStudent = new Student ({
        firstName,
        lastName,
        age
    });

    await newStudent.save();

    res.json({message: "student Created"});
};

module.exports.updateOne = async  (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age, courses} = req.body;

    await Student.findByIdAndUpdate(id,{
        $set: {
            firstName,
            lastName,
            age,
            courses
        }
    });

    res.json({message: "Student Updated"});
};

module.exports.deleteOne = async (req,res)=>{
    const {id} = req.params;

    await Student.findByIdAndDelete(id);

    res.json({message: "Student Deleted"});
};

module.exports.assingCourse = async (req,res) =>{
    const {id} = req.params;
    const {course} = req.body;

    await Students.findByIdAndUpdate(id,{
        $push: {
            courses: course
        }
    });

    res.json({message: "Student Updated"});
};

module.exports.removeCourse = async (req,res) =>{
    const {id} = req.params;
    const {course} = req.body;

    await Students.findByIdAndUpdate(id,{
        $pull: {
            courses: course
        }
    });

    res.json({message: "Student Updated"});
};

module.exports.count =async  (req,res)=>{
    const total = await Student.find().count();

    res.json({ total });
};

module.exports.getByfirstName = async (req,res)=>{
    const {firstName} = req.query;
    const studentFound = await Student.find({
        firstName
    });

    res.json(studentFound);
};

module.exports.getByAge = async (req,res)=>{
    const {age} = req.query;
    const studentFound = await Student.find({
        age: {$gte: age}
    });

    res.json(studentFound);
};