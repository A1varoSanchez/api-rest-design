import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  patchTask,
  deleteTask
} from "../services/taskService.js";

export async function getTasks(req, res, next) {
  try {
    const { status, priority, page, limit, search, from, to } = req.query;
    const result = await getAllTasks({ status, priority, page, limit, search, from, to });
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function addTask(req, res, next) {
  try {
    const { title, status, priority, description, dueDate } = req.body;

    // Validación mínima a nivel controlador (lo fuerte lo hace Mongoose)
    if (!title || !status) {
      //return res.status(400).json({ error: "title and status are required" });
      throw(400, "title and status are required")
    }

    const newTask = await createTask({ title, status, priority, description, dueDate });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
}

export async function getTask (req, res, next) {
  try {
    const task = await getTaskById(req.params.id);
    res.json(task);
  } catch (err) { next(err); }
};

export async function replaceTask (req, res, next) {
  try {
    if (!req.body.title || !req.body.status) {
      return res.status(400).json({ error: "title and status are required for PUT" });
    }
    const updated = await updateTask(req.params.id, req.body);
    res.json(updated);
  } catch (err) { next(err); }
};

export async function partialUpdateTask (req, res, next) {
  try {
    const updated = await patchTask(req.params.id, req.body);
    res.json(updated);
  } catch (err) { next(err); }
};

export async function removeTask (req, res, next) {
  try {
    await deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};