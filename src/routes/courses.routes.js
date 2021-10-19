/*jshint esversion: 8 */
const express = require("express");
const router = express.Router();
const {coursesCtrl} = require("../controllers/index.controllers.js");
const courseSchema = require("../schemas/Course.js");
const validate = require("../middlewares/validateData.js");

router.get("/",coursesCtrl.getAll);
router.post("/",validate(courseSchema),coursesCtrl.createOne);
router.put("/:id",validate(courseSchema),coursesCtrl.updateOne);
router.put("/assingTeacher/:id",coursesCtrl.assingTeacher);
router.put("/removeTeacher/:id",coursesCtrl.removeTeacher);
router.delete("/:id",coursesCtrl.deleteOne);


module.exports = router;