/*jshint esversion: 8 */
const express = require("express");
const router = express.Router();
const {teachersCtrl} = require("../controllers/index.controllers.js");
const teacherSchema = require("../schemas/Teacher");
const validate = require("../middlewares/validateData.js");

router.get("/",teachersCtrl.getAll);
router.post("/",validate(teacherSchema),teachersCtrl.createOne);
router.put("/:id",validate(teacherSchema),teachersCtrl.updateOne);
router.delete("/:id",teachersCtrl.deleteOne);


module.exports = router;