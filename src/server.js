// src/server.js
import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`→ Swagger UI:           http://localhost:${PORT}/explorer`);
  console.log(`→ OpenAPI (JSON):       http://localhost:${PORT}/taskmanager-api.json`);
});