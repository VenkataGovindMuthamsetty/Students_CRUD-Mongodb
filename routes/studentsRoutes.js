const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");
const student = require("../models/Student");

router.post("/add-std", studentsController.createStudent);
router.get("/get-stds", studentsController.getStudents);
router.get("/get-stdbyid/:id", studentsController.getStudentById);
router.put("/update-std/:id", studentsController.updateStudent);
router.delete("/delete-std/:id", studentsController.deleteStudent);

module.exports = router;
