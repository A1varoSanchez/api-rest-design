import { Router } from "express";
import {
  getTasks,
  addTask,
  getTask,
  replaceTask,
  partialUpdateTask,
  removeTask
} from "../controllers/taskController.js";


const router = Router();

router.get("/", getTasks);
router.post("/", addTask);
router.get("/:id", getTask);
router.put("/:id", replaceTask);
router.patch("/:id", partialUpdateTask);
router.delete("/:id", removeTask);

export default router;