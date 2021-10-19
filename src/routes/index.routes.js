/*jshint esversion: 8 */
const express = require("express");
const app = express();

app.use("/course",require("./courses.routes.js"));
app.use("/student",require("./students.routes.js"));
app.use("/teacher",require("./teachers.routes.js"));

module.exports = app;

