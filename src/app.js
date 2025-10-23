// src/app.js
import express from "express";
import { logger, notFound, errorHandler } from "./middlewares/index.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());
app.use(logger);
app.use("/tasks", taskRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openapiPath = path.resolve(__dirname, "../openapi/taskmanager.yaml");

const openapiDocument = YAML.load(openapiPath);

app.use("/explorer", swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.get("/taskmanager-api.json", function(req, res) {
  res.type("application/json").send(JSON.stringify(openapiDocument, null, 2));
});

app.use(notFound);
app.use(errorHandler);

export default app;