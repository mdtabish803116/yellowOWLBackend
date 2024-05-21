"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStudent = exports.updateStudent = exports.deleteStudent = exports.getStudents = exports.createStudent = void 0;
const students_1 = require("../models/students");
const createStudent = async (req, res) => {
    try {
        let isEmailExist = await students_1.StudentModel.findOne({ email: req.body.email });
        if (isEmailExist) {
            return res
                .status(401)
                .send({ error: true, message: "This email already exist." });
        }
        let studentDetails = req.body;
        const newStudent = await new students_1.StudentModel(studentDetails)
            .save()
            .then((data) => data.toObject());
        return res.status(201).send({ success: true, student: newStudent });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ error: true, message: "Something went wrong..." });
    }
};
exports.createStudent = createStudent;
const getStudents = async (req, res) => {
    try {
        const students = await students_1.StudentModel.find({});
        return res.status(200).send({ students });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ error: true, message: "Something went wrong..." });
    }
};
exports.getStudents = getStudents;
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await students_1.StudentModel.findByIdAndDelete({ _id: id });
        return res.status(200).send({ success: true, student: id });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ error: true, message: "Something went wrong..." });
    }
};
exports.deleteStudent = deleteStudent;
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const studentDetails = req.body;
        const updatedStudent = await students_1.StudentModel.findByIdAndUpdate(id, studentDetails, {
            new: true,
        }).then((data) => data.toObject());
        return res.status(200).send({ success: true, student: updatedStudent });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ error: true, message: "Something went wrong..." });
    }
};
exports.updateStudent = updateStudent;
const searchStudent = async (req, res) => {
    try {
        const query = req.query.s;
        const searchedStudent = await students_1.StudentModel.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { phone: { $regex: query, $options: "i" } },
                { enrollNo: { $regex: query, $options: "i" } },
            ],
        });
        return res.status(200).send({ success: true, students: searchedStudent });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ error: true, message: "Something went wrong..." });
    }
};
exports.searchStudent = searchStudent;
//# sourceMappingURL=students.js.map