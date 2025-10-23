export function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

export function notFound(req, res, next) {
  res.status(404).json({ error: "Endpoint not found" });
}

export function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal server error" });
}