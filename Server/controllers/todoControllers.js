import { Todo } from "../models/Todo.js";

export const addTodo = async (req, res) => {
  const { title } = req.body;

  const newtodo = await Todo.create({ title: title });
  res.send(newtodo);
};

export const getTodos = async (req, res) => {
  const alltodos = await Todo.find({});
  res.send(alltodos);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  res.send(todo);
};
