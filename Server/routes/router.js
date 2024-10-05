import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todoControllers.js";

const router = express.Router();

router.post("/add", addTodo);
router.get("/get", getTodos);
router.delete("/delete/:id", deleteTodo);

export default router;
