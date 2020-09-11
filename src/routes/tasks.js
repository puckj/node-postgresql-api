import { Router } from 'express';
import { getTasks, getOneTask, getTasksByProject, createTask, deleteTask, updateTasks } from '../controllers/task.controller'
const router = Router();

// /api/tasks
router.get('/', getTasks)
router.post('/', createTask)

export default router;