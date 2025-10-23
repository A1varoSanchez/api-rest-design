// src/server.js
import "dotenv/config.js";              // carga .env
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB();
    app.listen(PORT, function() {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
      console.log(`→ Swagger UI:          http://localhost:${PORT}/explorer`);
      console.log(`→ OpenAPI (JSON):      http://localhost:${PORT}/taskmanager-api.json`);
    });
  } catch (err) {
    console.error("Fallo crítico al iniciar la app:", err.message);
    process.exit(1);
  }
}

start();