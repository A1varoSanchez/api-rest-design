import Task from "../models/taskModel.js";

export async function getAllTasks(filters = {}) {
  const {
    status,
    priority,
    page = 1,
    limit = 50,
    search,
  } = filters;

  const query = {};
  if (status) query.status = status;
  if (priority) query.priority = priority;
  if (search) query.title = { $regex: search, $options: "i" };

  if (from || to) {
    query.createdAt = {};
    if (from) query.createdAt.$gte = new Date(from);
    if (to) query.createdAt.$lte = new Date(to);
  }

  const skip = (Number(page) - 1) * Number(limit);

  const [items, totalItems] = await Promise.all([
    Task.find(query).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }).lean(),
    Task.countDocuments(query),
  ]);

  const totalPages = Math.ceil(totalItems / Number(limit) || 1);
  
  return { items, page: Number(page), limit: Number(limit), totalItems, totalPages };
}

export async function createTask(taskData) {
  const created = await Task.create(taskData);
  return created.toObject();
}