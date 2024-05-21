"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("../controllers/students");
exports.default = (router) => {
    router.get("/api/getStudent", students_1.getStudents);
    router.post("/api/postStudent", students_1.createStudent);
    router.patch("/api/updateStudent/:id", students_1.updateStudent);
    router.delete("/api/deleteStudent/:id", students_1.deleteStudent);
    router.get("/api/search", students_1.searchStudent);
};
//# sourceMappingURL=students.js.map