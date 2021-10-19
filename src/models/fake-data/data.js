/*jshint esversion: 8 */
const faker = require("faker");
const Student = require("../Students.js");
const Teacher = require("../Teachers.js");

module.exports.createFakeDataStudents = async (data)=>{
    for(let i=1; i<=data; i++){
        const newStudent = new Student({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.datatype.number(30)
        });
        await newStudent.save();
    }
};

module.exports.createFakeDataTeachers = (data)=>{
    for(let i=1; i<=data; i++){
        const newTeacher = new Teacher({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.datatype.number(30)
        });
        newTeacher.save();
    }
};