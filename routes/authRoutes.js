import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/admin/login', authController.admin_login);

export default router;
