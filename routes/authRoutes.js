import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/admin/login', authController.admin_login);
router.get('/get-user', authController.getUser);

export default router;
