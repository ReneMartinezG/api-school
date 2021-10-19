/*jshint esversion: 8 */
const Course = require("../models/Course.js");

module.exports.getAll = async (req,res)=>{
    const findCourse = await Course.find();

    res.json(findCourse);

};

module.exports.createOne = async (req,res)=>{
    const {name} = req.body;
    const newCourse = new Course({
        name
    });
    await newCourse.save();
    res.json({message: "Course Created"});
};

module.exports.updateOne = async (req,res)=>{
    const {id} = req.params;
    const {name,teachers} = req.body;

    await Course.findByIdAndUpdate(id,{ 
        $set:
        {
        name,
        teachers
        }
    });
    res.json({message: "Course Updated"});
};

module.exports.deleteOne = async (req,res)=>{
    const {id} = req.params;

    await Course.findByIdAndDelete(id);

    res.json({message: "Course Deleted"});
};

module.exports.assingTeacher = async (req,res)=>{
    const {id} = req.params;
    const {teacher} = req.body;

    await Course.findByIdAndUpdate(id,{
        $push: {
            teachers: teacher
        }
    });

    res.json({message: "Course Updated"});
};

module.exports.removeTeacher = async (req,res)=>{
    const {id} = req.params;
    const {teacher} = req.body;

    await Course.findByIdAndUpdate(id,{
        $pull: {
            teachers: teacher
        }
    });

    res.json({message: "Course Updated"});
};