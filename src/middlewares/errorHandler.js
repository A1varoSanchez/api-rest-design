export function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);

  const isValidation = err?.name === "ValidationError" || err?.name === "CastError";
  const status = isValidation ? 400 : 500;
  
  res.status(status).json({ error: isValidation ? "Invalid data" : "Internal server error", details: err.message });
}