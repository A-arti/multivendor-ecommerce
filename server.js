import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import { connectDB } from './utils/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to connect to database. Server not started.", err);
});
