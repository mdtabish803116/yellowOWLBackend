import express from "express";

import { createStudent, deleteStudent, getStudents, searchStudent, updateStudent } from "../controllers/students";

export default (router: express.Router) => {
  router.get("/api/getStudent", getStudents);
  router.post("/api/postStudent", createStudent);
  router.patch("/api/updateStudent/:id", updateStudent);
  router.delete("/api/deleteStudent/:id", deleteStudent);
  router.get("/api/search", searchStudent);
};
