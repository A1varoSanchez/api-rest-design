import { getAllTasks, createTask } from "../services/taskService.js";

export function getTasks(req, res) {
  const tasks = getAllTasks();
  res.json(tasks);
}

export function addTask(req, res) {
  const { title, status, priority } = req.body;

  if (!title || !status) {
    return res.status(400).json({ error: "title and status are required" });
  }

  const newTask = createTask({ title, status, priority });
  res.status(201).json(newTask);
}