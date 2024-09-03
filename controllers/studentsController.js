const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const { name, age, gender } = req.body;

    const student = new Student({
      name,
      age,
      gender,
    });

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const studentById = await Student.findById(req.params.id);
    if (!studentById) {
      res.status(404).json({ message: "student not found" });
    }
    res.status(201).json(studentById);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const myStudent = await Student.findByIdAndUpdate(req.params.id, {
      name,
      age,
      gender,
    });
    if (!myStudent) {
      res.status(404).json({ message: "student not found" });
    }
    res.status(200).json(myStudent);
  } catch (error) {
    res.status(500).json({ message: "error msg" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deleteStd = await Student.findByIdAndDelete(req.params.id);
    if (!deleteStd) {
      res.status(404).json({ message: "student not found" });
    }
    res.status(201).json(deleteStd);
  } catch (error) {
    res.status(500).json({ message: "server eoor" });
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
