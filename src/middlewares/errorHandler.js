export function errorHandler(err, req, res, next) {
  const message = err.message || "Internal server error";
  if (message === "Task not found") return res.status(404).json({ error: message });
  if (message === "Invalid ID") return res.status(400).json({ error: message });
  res.status(500).json({ error: message });
};