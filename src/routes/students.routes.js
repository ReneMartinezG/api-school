/*jshint esversion: 8 */
const express = require("express");
const router = express.Router();
const {studentsCtrl} = require("../controllers/index.controllers.js");
const studentSchema = require("../schemas/Student");
const validate = require("../middlewares/validateData.js");

router.get("/",studentsCtrl.getAll);
router.get("/count",studentsCtrl.count);
router.get("/getByfirstName",studentsCtrl.getByfirstName);
router.get("/getByAge",studentsCtrl.getByAge);
router.post("/",validate(studentSchema), studentsCtrl.createOne);
router.put("/:id",validate(studentSchema),studentsCtrl.updateOne);
router.put("/assingCourse/:id",studentsCtrl.assingCourse);
router.put("/removeCourse/:id",studentsCtrl.removeCourse);
router.delete("/:id",studentsCtrl.deleteOne);



module.exports = router;