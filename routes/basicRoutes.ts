// routes/basic.route.ts
import { Router } from 'express';
import { BasicController } from '../controllers/basicController';
import { sampleMiddleware } from '../middleware/basic.middleware';
import { BasicService } from '../services/basicService';

const router = Router();
const basicService = new BasicService();
const basicController = new BasicController(basicService);

// Create
router.post('/basic', sampleMiddleware, basicController.create);

// Read (all)
router.get('/basic', basicController.getAll);

// Read (by ID)
router.get('/basic/:id', basicController.getById);

// Update (by ID)
router.put('/basic/:id', basicController.update);

// Delete (by ID)
router.delete('/basic/:id', basicController.remove);

export default router;
