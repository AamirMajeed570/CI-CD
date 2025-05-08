import express from 'express';
export const router = express.Router();
import { getTask, createTask } from '../controllers/index.js'
router.get('/task', getTask)
router.post('/create', createTask)