import express from "express";

const router = express.Router();

import students from "./students"

export default (): express.Router => {
    students(router);
  return router;
};
